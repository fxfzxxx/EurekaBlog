# Java String 类

String 类是不可改变的解析，例如：

```java
String s = "Google";
System.out.println("s = " + s);

s = "Runoob";
System.out.println("s = " + s);
```

输出结果为：

```java
Google
Runoob
```

从结果上看是改变了，但为什么门说String对象是不可变的呢？

原因在于实例中的 **s** 只是一个 **String** 对象的引用，并不是对象本身，当执行 **s = "Runoob";** 创建了一个新的对象 "Runoob"，而原来的 "Google" 还存在于内存中。

---

```java
public class Main {
    public static void main(String[] args) {
            String str1 = "hello world";
            String str2 = new String("hello world");
            String str3 = "hello world";
            String str4 = new String("hello world");
            System.out.println(str1==str2);
            System.out.println(str1==str3);
            System.out.println(str2==str4);
    }
}
```

执行结果为：

```java
false
true
false
```

**解析：**

**String str1 = "hello world";** 和 **String str3 = "hello world";** 都在编译期间生成了字面常量和符号引用，运行期间字面常量 **"hello world"** 被存储在运行时常量池（当然只保存了一份）。通过这种方式来将 **String** 对象跟引用绑定的话，JVM 执行引擎会先在运行时常量池查找是否存在相同的字面常量，如果存在，则直接将引用指向已经存在的字面常量；否则在运行时常量池开辟一个空间来存储该字面常量，并将引用指向该字面常量。　

众所周知，通过 **new** 关键字来生成对象是在堆区进行的，而在堆区进行对象生成的过程是不会去检测该对象是否已经存在的。因此通过 **new** 来创建对象，创建出的一定是不同的对象，即使字符串的内容是相同的。