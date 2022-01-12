# Java数组

#### 创建数组

Java语言使用 **new **操作符来创建数组，语法如下:

```java
arrayRefVar = new dataType[arraySize];
```

上面的语法语句做了两件事：

- 使用 `dataType[arraySize]` 创建了一个数组。
- 把新创建的数组的引用赋值给变量 `arrayRefVar`。

数组变量的声明，和创建数组可以用一条语句完成:

```java
dataType[] arrayRefVar = new dataType[arraySize]
dataType[] arrayRefVar = {value0, value1, ..., valuek};
```

数组索引从 0 开始，所以索引值从 0 到  `arrayRefVar.length` -1。

#### For-Each 循环

JDK 1.5 引进了一种新的循环类型，被称为 For-Each 循环或者加强型循环，它能在不使用下标的情况下遍历数组。

语法格式如下：

```java
for(type element: array)
{
    System.out.println(element);
}
```

#### 多维数组

多维数组可以看成是数组的数组，比如二维数组就是一个特殊的一维数组，其每一个元素都是一个一维数组，例如：

`int a[][] = new int[2][2];`二维数组 a 可以看成一个两行三列的数组。



#### 数组排序的代码

```java
public class TestArray {
    public static void main(String[] args) {
        int[] testList = new int[10];
        for(int i=9; i>0; i--) {
            testList[i] = i;
        }
        System.out.println("The original array is：");
        for(int i:testList) {
            System.out.println( i +" ");
        }

        /** Reverse array */ 
        testList = reverse(testList);
        /** Bubble Sort ascending*/
        testList = bubbleSort(testList);
        /** Selection sort descending*/
        testList = selectionSort(testList);
    }

    /**  倒序 reverse */
    public static int[] reverse(int[] arr) {
        int[] result = new int[arr.length];
        for(int i=0, j=result.length-1;i<arr.length;i++,j--){
            result[j]= arr[i];
        }
        System.out.println("The result of reverse array is：");
        for(int i:result){
            System.out.println(i+" ");
        }
        return result;
    } 
    /** 冒泡排序 Bubble Sorting */
    public static int[] bubbleSort(int[] arr){
        for(int i=0;i<arr.length;i++){
            //遍历数组里除最后一个的其他所有数，因为最后的对象没有与之可以相比较的数
            for(int j=0; j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }           
            }
        }
        System.out.println("The result of bubble sort is：");
        for(int i:arr){
            System.out.println(i+" ");
        }
        return arr;
    }
	/** 选择排序 Selection Sort */
    public static int[] selectionSort(int[] arr) {
        for(int i=0;i<arr.length-1;i++){
            for(int j = i+1;j<arr.length;j++){
                if(arr[j]>arr[i]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("The result of selection sort is：");
        for(int i:arr){
            System.out.println(i+" ");
        }
        return arr;
    }
}

```

---

#### Array 类

`java.util.Arrays  `  类能方便地操作数组，它提供的所有方法都是静态的。具有以下功能：

-  给数组赋值：通过fill方法。
-  对数组排序：通过sort方法,按升序。
-  比较数组：通过equals方法比较数组中元素值是否相等。
-  查找数组元素：通过 `binarySearch` 方法能对排序好的数组进行二分查找法操作。

```java
import java.util.Arrays;

public class TestArrays {
    public static void output(int[] array) {
        if (array != null) {
            for (int i = 0; i < array.length; i++) {
                System.out.print(array[i] + " ");
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] array = new int[5];
        // 填充数组
        Arrays.fill(array, 5);
        System.out.println("填充数组：Arrays.fill(array, 5)：");
        TestArrays.output(array);
        // 将数组的第2和第3个元素赋值为8
        Arrays.fill(array, 2, 4, 8);
        System.out.println("将数组的第2和第3个元素赋值为8：Arrays.fill(array, 2, 4, 8)：");
        TestArrays.output(array);
        int[] array1 = { 7, 8, 3, 2, 12, 6, 3, 5, 4 };
        // 对数组的第2个到第6个进行排序进行排序
        Arrays.sort(array1, 2, 7);
        System.out.println("对数组的第2个到第6个元素进行排序进行排序：Arrays.sort(array,2,7)：");
        TestArrays.output(array1);
        // 对整个数组进行排序
        Arrays.sort(array1);
        System.out.println("对整个数组进行排序：Arrays.sort(array1)：");
        TestArrays.output(array1);
        // 比较数组元素是否相等
        System.out.println("比较数组元素是否相等:Arrays.equals(array, array1):" + "\n" + Arrays.equals(array, array1));
        int[] array2 = array1.clone();
        System.out.println("克隆后数组元素是否相等:Arrays.equals(array1, array2):" + "\n" + Arrays.equals(array1, array2));
        // 使用二分搜索算法查找指定元素所在的下标（必须是排序好的，否则结果不正确）
        Arrays.sort(array1);
        System.out.println("元素3在array1中的位置：Arrays.binarySearch(array1, 3)：" + "\n" + Arrays.binarySearch(array1, 3));
        // 如果不存在就返回负数
        System.out.println("元素9在array1中的位置：Arrays.binarySearch(array1, 9)：" + "\n" + Arrays.binarySearch(array1, 9));
    }
}
```

输出结果：

```shell
填充数组：Arrays.fill(array, 5)：
5 5 5 5 5 
将数组的第2和第3个元素赋值为8：Arrays.fill(array, 2, 4, 8)：
5 5 8 8 5 
对数组的第2个到第6个元素进行排序进行排序：Arrays.sort(array,2,7)：
7 8 2 3 3 6 12 5 4 
对整个数组进行排序：Arrays.sort(array1)：
2 3 3 4 5 6 7 8 12 
比较数组元素是否相等:Arrays.equals(array, array1):
false
克隆后数组元素是否相等:Arrays.equals(array1, array2):
true
元素3在array1中的位置：Arrays.binarySearch(array1, 3)：
1
元素9在array1中的位置：Arrays.binarySearch(array1, 9)：
-9
```



