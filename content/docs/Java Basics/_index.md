---
title: 了解 Java
description: 自学 Java 的笔记, 用来查缺补漏.
toc: true
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - Java 复习
date: '2021-12-20'
lastmod: '2021-12-20'
featuredImage: images/java-logo.png
draft: false
---

## 我的第一个java程序

### 普通内容

创建文件 *HelloWorld.java*, 代码如下：

```java
public class HelloWorld{
	public static void main(String[] args){
        System.out.println("Hello World.");
    }      
}
```

> String args[] 和 String[] args 都可以执行， 但推荐使用 String[] args, 这样可以避免歧异和误读。   

运行结果如下：  

```shell
$ javac HelloWorld.java
$ java HelloWorld
Hello world.
```

> `javac` 后面跟文件名，用于将java源文件编译为class字节码文件。
>
> 如果编译没有错误的话，会出现一个HelloWorld.class的文件。
>
> `java`后面跟java文件中的类名（这里猜测是class），例如HelloWorld就是类名。
>
> **注意:** `java`命令后不加 *.class*



***

### 进阶分析

**`public static void main(String[] args)`  是什么意思？**

这是Java程序的入口地址，Java虚拟机运行程序的时候首先要找的就是 `main` 方法。跟 C 语言里的 `main()` 函数作用是一样的。  

只有又 `main()` 方法的 Java 程序才能够被 Java 虚拟机运行，可理解为 **规定的格式** 。  

对于参数及修饰符：

- `public` ：表示程序的访问权限，表示任何场合可以被引用，java 虚拟机找到 `main()` 方法，从而运行 `javac` 程序。
- `static` ：表示方法是 *静态* 的，不依赖类的对象的，属于类的，在加载类的时候 `main()` 方法随着类加载到内存中。
- `void main()` ：方法不需要返回值。
- `main()` ：约定成俗，规定的。
- `String[] args` ：从控制台接受参数。

***

一开始看可能不理解，为什么是`String[] args`这个 `args`是干嘛的。他在 `main` 函数中实现参数的传递（空格区分）。

在命令行中运行 **Test.class** 文件，可以这样写：

```shell
$ java Test runoob
```

> 相当于给数组传入了一个字符串 `runoob` 可以打印出来，也可做为简单的输入。

```java
public class Test{
    public static void main(String[] args){
        System.out.println(args[0]);
        System.out.println(args[1]);
        System.out.println(args[2]);
    } 
}
```

控制台运行：

```shell
$ java Test.java
$ java Test aaa bbb ccc
aaa
bbb
ccc
```





