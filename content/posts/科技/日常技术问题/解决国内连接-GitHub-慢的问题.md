---
title: 解决国内连接 GitHub 慢的问题
description: 亲测有效.
toc: true
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - 技术小问题
date: '2021-12-05'
lastmod: '2021-12-05'
featuredImage: images/cats2.jpeg
draft: false
---

在没有科学上网的情况下, 经常会遇到 GitHub 连接失败的情况. 经查发现, 可以通过配置 `/private/etc/hosts` 可以达到不搭梯子仍可快速访问 GitHub 的效果.

### 步骤 1 查询IP地址

首先到 https://websites.ipaddress.com/ 下查询 GitHub 及其子域名的最新 ip 地址.

### 步骤 2 编辑 host 文件

在文件内的下方输入以下内容.

注意: 其中的 ip 地址是通过第一步得来的, ip 地址会经常更新. 为了确保此方法有用, 要经常查看 ip 地址是否发生改变.

```sh
# Github
199.232.68.249 global.ssl.fastly.net
199.232.69.194 github.global.ssl.fastly.net 
140.82.114.4 github.com
140.82.113.4 www.github.com
185.199.109.153 assets-cdn.github.com 
185.199.110.153 assets-cdn.github.com 
185.199.111.153 assets-cdn.github.com 
140.82.113.9 codeload.Github.com
185.199.108.153 documentcloud.github.com 
192.30.253.118 gist.github.com
185.199.108.153 help.github.com 
192.30.253.120 nodeload.github.com 
151.101.112.133 raw.github.com 
23.21.63.56 status.github.com 
192.30.253.1668 training.github.com 
151.101.12.133 avatars0.githubusercontent.com 
151.101.112.133 avatars1.githubusercontent.com
```

### 步骤 3 刷新 DNS

打开命令行输入以下命令:

```sh
dscacheutil -flushcache
```

---

以上三个步骤基本能够保证 github 的下载和上传.😎