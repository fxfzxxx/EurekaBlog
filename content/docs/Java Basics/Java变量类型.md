# 变量类型

Java 语言支持的变量类型有:

- 类变量：独立于方法之外的变量，用 static 修饰。 *(静态变量)*
- 实例变量：独立于方法之外的变量，不过没有 static 修饰。*(成员变量)*
- 局部变量：类的方法中的变量。

```java
public class Varibles{
    static int lv1;  //类变量
    int lv2;  //实例变量
    public void method{
        int lv3; //局部变量
    }
}
```

> static 关键字，是一个修饰符，用于修饰成员(成员变量和成员函数)。
>
> 特点：
>
> - 想要实现对象中的共性数据的对象共享。可以将这个数据进行静态修饰。
>
> - 被静态修饰的成员，可以直接被类名所调用。也就是说，静态的成员多了一种调用方式。类名.静态方式。
>
> - 静态随着类的加载而加载。而且优先于对象存在。
>
> - **Sometimes, you want to have variables that are common to all objects. This is accomplished with the static modifier. Fields that have the static modifier in their declaration are called static fields or class variables. They are associated with the class, rather than with any object.**

---

## Java 局部变量

- 局部变量声明在方法、构造方法或者语句块中；
- 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁；
- 访问修饰符不能用于局部变量；
- 局部变量只在声明它的方法、构造方法或者语句块中可见；
- 局部变量是在**栈**上分配的。
- 局部变量 ***没有默认值***，所以局部变量被声明后，***必须经过初始化***，才可以使用。

---

## Java 实例变量

- 实例变量声明**在一个类**中，但在方法、构造方法和语句块之外；
- 当一个对象被实例化之后，每个实例变量的值就跟着确定；
- 实例变量在对象创建的时候创建，在对象被销毁的时候销毁；
- 实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息；
- 实例变量可以声明在使用前或者使用后；
- 访问修饰符可以修饰实例变量；
- 实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见；
- 实例变量**具有默认值**。数值型变量的默认值是0，布尔型变量的默认值是false，引用类型变量的默认值是null。变量的值可以在声明时指定，也可以在构造方法中指定；
- 实例变量可以直接通过变量名访问。但在**静态方法**以及**其他类中**，就应该使用完全限定名：`ObejectReference.VariableName`。
- java 实例变量在整个类内部是可访问的，而不管实例变量声明在类的哪个位置.  *(可以在方法之后).*

---

## Java 类变量（静态变量）

- 类变量也称为静态变量，在类中以 **static 关键字**声明，但必须在方法之外。
- 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。
- 静态变量除了被声明为常量外很少使用，静态变量是指声明为 public/private，final 和 static 类型的变量。静态变量初始化后不可改变。
- 静态变量储存在静态存储区。经常被**声明为常量**，很少单独使用 static 声明变量。
- 静态变量在第一次被访问时创建，在**程序结束时销毁**。
- 与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。
- **默认值和实例变量相似**。数值型变量默认值是 0，布尔型默认值是 false，引用类型默认值是 null。变量的值可以在声明的时候指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。
- 静态变量可以通过：`ClassName.VariableName` 的方式访问。
- 类变量被声明为 public static final 类型时，类变量名称一般建议使用**大写字母**。如果静态变量不是 public 和 final 类型，其命名方式与实例变量以及局部变量的命名方式一致。