# Java环境配置

### Windows下的环境配置

1. https://www.oracle.com/technetwork/java/javase/overview/index.html 到此网站下载对应的 JDK。 
2. 安装完成后，右击"我的电脑"，点击"属性"，选择"高级系统设置"；
3. .选择"高级"选项卡，点击"环境变量"；
4. 选择 Path 并编辑；
5. 右侧新建，浏览或者输入地址 **C:\Program Files\Java\jdk-11.0.1\bin** ，jdk 后面跟正确版本号，末尾  
   是 \bin 。
6. 最后，打开 Command Prompt (cmd.exe)  输入 `java -version` 查看是否设置成功。

### 如果不搭建环境的话

需要在 **C:\Program Files\Java\jdk-11.0.1\bin** 路径下才能运行 `java` , `javac` 等命令。而配置完环境后，
任何路径下都可以使用。前面不必再添加冗长的 JDK 安装路径，更方便工作。

