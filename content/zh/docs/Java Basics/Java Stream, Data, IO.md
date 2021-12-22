# Java 流(Stream)、文件(File)和IO

Java 的控制台输入由 System.in 完成。

为了获得一个绑定到控制台的字符流，你可以把 System.in 包装在一个 BufferedReader 对象中来创建一个字符流。

下面是创建 BufferedReader 的基本语法：

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
```

BufferedReader 对象创建后，我们便可以使用 read() 方法从控制台读取一个字符，或者用 readLine() 方法读取一个字符串。

#### 例子：控制台输入到q结束

```java
import java.io.*;

public class JavaIO {
    public static void main(String[] args) throws IOException {
        /** 每次调用 read() 方法，它从输入流读取一个字符并把该字符作为整数值返回。 
        当流结束的时候返回 -1。该方法抛出 IOException。*/
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        char c;
        System.out.println("Input charactors until press 'q'");
        do{
            c = (char) br.read();//让控制台在输入字符状态
            System.out.println(c);
        } while(c!='q');
    }  
}

```

输出：

```java
asdasfasfqdfsgdfsf
a
s
d
a
s
f
a
s
f
q
```

## 读写文件

<img src="https://www.runoob.com/wp-content/uploads/2013/12/iostream2xx.png" alt="img" style="zoom:80%;" />

---

### FileInputStream

可以使用字符串类型的文件名来创建一个输入流对象来读取文件：

```java
InputStream f = new FileInputStream("C:/java/hello");
```

也可以使用一个文件对象来创建一个输入流对象来读取文件。我们首先得使用 File() 方法来创建一个文件对象：

```java
File f = new File("C:/java/hello");
InputStream out = new FileInputStream(f);
```

### FileOutputStream

如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。

有两个构造方法可以用来创建 FileOutputStream 对象。

使用字符串类型的文件名来创建一个输出流对象：

```java
OutputStream f = new FileOutputStream("C:/java/hello")
```

也可以使用一个文件对象来创建一个输出流来写文件。我们首先得使用File()方法来创建一个文件对象：

```java
File f = new File("C:/java/hello");
OutputStream f = new FileOutputStream(f);
```

#### 例子：写入byte到文件 并读取输出到控制台

```java
import java.io.*;

public class FileStreamTest {
    public static void main(String[] args) throws IOException {
        arrayStream();
    }

    public static void arrayStream() {
        try {
            byte bWrite[] = { 11, 21, 3, 40, 5 };
            OutputStream os = new FileOutputStream("text.txt");
            OutputStreamWriter writer = new OutputStreamWriter(os, "UTF-8");
            for (byte b : bWrite) {
                writer.append(String.valueOf(b)); //没法用Tostring 因为b不是对象
            writer.close();
            os.close();
            
            InputStream is = new FileInputStream("text.txt");
            InputStreamReader reader = new InputStreamReader(is, "UTF-8");
            StringBuilder sb = new StringBuilder();
            while (reader.ready()) {
                sb.append((char)reader.read());
            }
            System.out.println(sb);
            reader.close();
            is.close();
        }
        } catch (Exception e) {
            System.out.print("Exception");
        }       
    }
}

```

输出:

```java
11213405
```

## Java中的目录

File类中有两个方法可以用来创建文件夹：

- **mkdir( )**方法创建一个文件夹，成功则返回true，失败则返回false。失败表明File对象指定的路径已经存在，或者由于整个路径还不存在，该文件夹不能被创建。
- **mkdirs()**方法创建一个文件夹和它的所有父文件夹。

#### 例子: 创建一个目录

```java
import java.io.File;
 
public class CreateDir {
    public static void main(String args[]) {
        String dirname = "/tmp/user/java/bin";
        File d = new File(dirname);
        // 现在创建目录
        d.mkdirs();
    }
}
```

#### 例子:读取一个目录

个目录其实就是一个 File 对象，它包含其他文件和文件夹。

如果创建一个 File 对象并且它是一个目录，那么调用 isDirectory() 方法会返回 true。

可以通过调用该对象上的 list() 方法，来提取它包含的文件和文件夹的列表。

下面展示的例子说明如何使用 list() 方法来检查一个文件夹中包含的内容：

```java
import java.io.File;
 
public class DirList {
    public static void main(String args[]) {
        String dirname = "/tmp";
        File f1 = new File(dirname);
        if (f1.isDirectory()) {
            System.out.println("目录 " + dirname);
            String s[] = f1.list();
            for (int i = 0; i < s.length; i++) {
                File f = new File(dirname + "/" + s[i]);
                if (f.isDirectory()) {
                    System.out.println(s[i] + " 是一个目录");
                } else {
                    System.out.println(s[i] + " 是一个文件");
                }
            }
        } else {
            System.out.println(dirname + " 不是一个目录");
        }
    }
}
```

输出:

```java
目录 /tmp
bin 是一个目录
lib 是一个目录
demo 是一个目录
test.txt 是一个文件
README 是一个文件
index.html 是一个文件
include 是一个目录
```

## Java Scanner类

java.util.Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来获取用户的输入。

下面是创建 Scanner 对象的基本语法：

```java
Scanner s = new Scanner(System.in);
```

#### 例子: Bank Demo的片段

```java
package Exception_Test;

import java.util.Scanner;
import java.io.*;

public class BankDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int accNumber = 0;
        double amount = 0;
        System.out.println("Please enter your account number: ");

        if (scan.hasNextInt()) {
            // 判断输入的是否是Int
            accNumber = scan.nextInt();
            // 接收整数
            System.out.println("Account number：" + accNumber);
        } else {
            // 输入错误的信息
            System.out.println("Wrong input info.");
        }
        CheckAccount c = new CheckAccount(accNumber);

        System.out.println("Please enter the amount you want to deposit: ");
        if (scan.hasNextDouble()) {
            // 判断输入的是否是double
            amount = scan.nextDouble();
            // 接收整数
            System.out.println("Deposit amount：" + amount);
			//存钱
            c.deposit(amount);

        } else {
            // 输入错误的信息
            System.out.println("Wrong input info.");
        }

        if (scan.hasNextDouble()) {
            // 判断输入的是否是double
            amount = scan.nextDouble();
            // 接收整数
            System.out.println("Withdraw amount：" + amount);

        } else {
            // 输入错误的信息
            System.out.println("Wrong input info.");
        }
        try {
            c.withdraw(amount);
            System.out.println("Withdraw: " + amount);

        } catch (InsufficientFundsException e) {
            System.out.println("Sorry, insufficient fund in your account." + e.getAmount());
            e.printStackTrace();
        }

        scan.close();
    }
}
```

输出:

```java
333
Account number：333
Please enter the amount you want to deposit:
123
Deposit amount：123.0
22
Withdraw amount：22.0
Withdraw: 22.0
```

