---
title: Java 复习之视频通信小项目
description: 通过 Java 实现的一格视频通信软件
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
  - Projects
series:
 
  - 项目
tags:
  - 项目
date: '2022-01-17'
lastmod: '2022-01-17'
featuredImage: images/java-logo.png
toc: true
draft: false
---



## 1. 简单的服务器与客户端

### 1.1 建立 TCP 连接

- 服务端需要有一个 `ServerSocket` 对象, 通过他的 `accept` 方法监听客户端的 `socket` 请求并且返回一个`socket`来与客户端的 `socket` 建立连接.

### 1.2 发信息

#### 最基础的写法

- 服务端

```java
Socket socket = serverSocket.accept();
OutputStream ous = serverSocket.getOutputStream();
String msg = "hello \r\n";
byte[] data = msg.getBytes();
ous.write(data);
```

这个基础的写法目前还只是用于了解发送的 基本原理, 没有继续研究如何发送中文.

- 发信息的一方需要有一个输出流对象 `OutputStream` , 可以通过 `Socket` 对象的 `getOutputStream` 方法返回.

- 创建一个 `String` 对象存储所发的消息

- 使用 `getByte` 方法将字符创存入一个 `Byte` 型的数组.

  - 查了源码后发现, String 类有一个静态的 `value` 属性, 是一个 `byte` 类型的数组, 字符串的每个字符都相应存在数组里面. 通过在 SringUTF16 的类里面如下方法

  - ```java
    public static byte[] toBytes(char[] value, int off, int len) {
            byte[] val = newBytesFor(len);
            for (int i = 0; i < len; i++) {
              // 3个参数依次是 byte[],int,int
                putChar(val, i, value[off]);
                off++;
            }
            return val;
        }
    ```

  - 这里实际上是把 `char` 数组里面的 `char` 直接通过 `int c` 传入到以下方法

  - **因为 `char` 实际上存储的是一个整数: 0~65535(2^16), 是字符在字符编码表中的位置.**

  - 我经过测试发现实际上 `char` 字符可以直接转换成 `int` 变量. 输出的话会得到对应的 ASCII 码.

    ```java
     static void putChar(byte[] val, int index, int c) {
            assert index >= 0 && index < length(val) : "Trusted caller missed bounds check";
            index <<= 1;
       // 这里证实是相邻的两个byte位置存储了一个 char 类型
            val[index++] = (byte)(c >> HI_BYTE_SHIFT);
            val[index]   = (byte)(c >> LO_BYTE_SHIFT);
        }
    ```

- 用输出流对象 ` OutputStream` 的 `write` 方法把 `byte` 数组传进去

  - 所有的输入输出流都是基于字节的.
  
##### **注意: `write` 方法的参数值问题**

  - `write` 方法其实是接受一个 `int` 变量, 但是 `int` 的前八位会被读取,也就是每次读取一个 **字节**. 后面的 24 位会被忽略. 所以, 可以往里进的数据可以是, `int` , `char`,等等值类型. 但不能是字符串, 用字符串, 必须要先把字符串通过 `getByte` 的方法存进一个 `byte` 数组.




#### 简化版写法

- 服务端

```java
Socket socket = serverSocket.accept();
DataOutputStream out = new DataOutputStream(serverSocket.getOutputStream);
out.writeUTF("这里可以直接写中文");
```

### 1.3 收信息

#### 最基础的写法

- 客户端

```java
Socket socket = new Socket("localhost", 50000);
InputStream in = socket.getInputStream();
int readMsg = 0;
while(true) {
  readMsg = in.read()// 这里有的 read 每次读取一个字节, 所以得到的取值范围是 0~255 的 ASC 码, 并且由于字符串正常情况下是一个 char 数组,发送的时候使用 getByte 转化成 Byte 数组. 发送 ASC 码内字符的时候, 只会占用 char 的前 8 位, 后八位是 0, 这样按理说 byte 数组每隔一个位置会有一个空.
  if(readMsg == -1) break; //意思是读到末尾了
  }
	System.out.println((char)readMsg);
}
```

#### 简单写法

```java
Socket socket = new Socket("localhost", 50000);
DataInputStream in = new DataInputSteam(socket.getInputStream);
Sting inMsg = in.readUTF();
```

到这里, 已经能够做到一个客户端和服务端的简单通讯了. 但是有一定限制:

- 基本的 `write` 和 `read` 只能传输 ASC 码内的内容
- 只能实现服务端和客户端一对一通讯

## 2. 服务端和客户端复杂通讯的准备工作

### 2.1 通过 `write` 和 `read` 实现的写入和读取 `Int` 数据类型的方法

#### 思路

-  `write` 和 `read` 只能写入和读取单个字节, 而 `int` 型有四个字节
- 如果直接用 `write` 和 `read` 直接来传输 `int` 会出现后三个字节丢失的情况
- 所以, 需要一次读取和写入四个字节, 可以封装一个函数, 来做这个事情.

```java
//将 int 拆分成四个字节并且写入 os 中
public static void writeInt(OutputStream os, int value) throws IOException {
        int[] intValues = new int[4];
        intValues[0] = (value >> 24) & 0xFF; //注意移位后, value 仍然是整型, 只是前面补零, 并且 java 整型第一位永远是留作符号位.
        intValues[1] = (value >> 16) & 0xFF; //其实也可以用不同的掩码, 将在下面一个方法内尝试实现, 后来想了下不行, 因为读取是度前 8 位
        intValues[2] = (value >> 8) & 0xFF;
        intValues[3] = value  & 0xFF;
        for (int i = 0; i < 4; i++) {
            os.write(intValues[i]);
        }
    }
//将 int 依次从 is 中拿出并且拼接
public static int readInt(InputStream os) throws IOException {
        int intValues[] = new int[4];
        for(int i =0;i<4;i++) {
            intValues[i] = os.read();
        }
        int value = intValues[0] << 24 | intValues[1] << 16 | intValues[2] << 8 | intValues[3];
        return value;
    }
```

#### 注意

- 因为想要恰好读取到发送的四个字节, 并整合到一个整型中, 就需要严格指定一套 **通信协议**, 确保收发不会发生错位.
- 所以, 一旦涉及到基于字节的其他类型的传输, 就需要收发端书写一套相同的通信协议.

### 2.2 通过 `write` 和 `read` 实现的写入和读取 `String` 数据类型的方法

#### 思路

- `write` 端
  - 先把想要传输的字符串转换成字节数组, 可利用`String` 类自带的  `getbytes` 的方法直接获得.
  - 获取 ` byte` 数组的长度, 先通过写入 `int` 的方法把长度发出.
  - 再直接发送这个字节数组.
-  `read` 端
  - 先读取 `byte` 数组的长度 `int`.
  - 接着创建一个相同长度的 `byte` 数组, 防止多读取数据.
  - 最会通过 `String` 的构造函数把 `byte` 数组传进去, 直接创建字符串.

```java
public static void writeString(OutputStream os, String value) throws IOException {
    byte[] bytes = value.getBytes();
    int length = bytes.length;
    System.out.println("Write Length: " + length);
    byte[] byteValues = value.getBytes();
    IOUtils.writeInt(os,length);
    os.write(byteValues);
}
public static String readString(InputStream is) throws IOException {
    int length = IOUtils.readInt(is);
    System.out.println("Read Length: " + length);
    byte[] bytes = new byte[length];
    is.read(bytes);
    String value = new String(bytes);//每两字节转换成一个 char 然后组合成一个字符串
    return value;
}
```



### 2.3 多线程

#### 多线程的原因

- 多线程在这个项目里主要是运用在服务端, 因为服务端要保持监听, 而不是从上到下运行完后退出监听.

  - 客户端同样需要一个死循环来保持监听输入和持续输出, 但是不需要做其他事情, 所以每个客户端只需要一个线程就足够了

- 因此会存在两种死循环来让服务端保持持续监听,

  - 死循环下来 `accept` 新的 `socket`
  - 死循环下来处理 `InputStream` 和 `OutputStream` , 即收发流 .

- 死循环状态下, 程序就会阻塞, 无法运行循环后面的代码

- 所以需要多线程去处理这种阻塞问题

  - 服务类需要做的就是一个 `accept` 死循环来创建新的 线程类
  - 每一个连接的 `socket` 都需要传一个线程类里, 在新的线程类里开始运行死循环, 来处理他们独自的收发流

  
