---
title: 静态博客搭建 - 进阶教程 - 基于 academic 主题
description: 如何定制主页和内容管理.
toc: true
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - 博客搭建
date: '2021-12-02'
lastmod: '2021-12-02'
featuredImage: images/hugo.jpeg
draft: false
---

进阶的一些列操作, 基本都是根据 `config.toml` 内的提示来的. 而不同的主题, 会有不同的 `config.toml` 文件. 当选择好心仪的主题后, 首先要把主题的示范页和 `config.toml` 文件拿到主文件夹中.

经过一番研究发现, 目前 hugo 比价流行的主题是 academic , 所以进阶的教程就会基于这个主题来展开. 其他主题的教程其实都差不多.

最后并没有用这个主题, 主要是因为自由度太高, 反而影响了我继续深挖的心情. 这玩儿搞这么复杂, 配置的时间都赶上我自己弄一套 vue 了.

## 基于 academic 主题的博客的初始化

### 方法 一:

#### 1. 安装 academic 主题

到 hugo 官网主题页面, 找到 academic 主题中的下载选项. 此时会直接跳转到 academic 主题的官方 GitHub 仓库, 点击 `use the template`. 此时会直接将这个仓库克隆到自己仓库中去,并命名为 `hugo-academic`. 到自己的仓库, 复制 clone 的 SSH 代码. 在本地想要存储博客文件的目录下打开命令行, 输入 `git clone git@github.com:fxfzxxx/hugo-academic.git` . clone 后面的代码就是之前复制的 SSH 代码. 现在就会把这个主题的所有所需文件克隆到该目录下的 `hugo-academic` 文件夹内, 其与 GitHub 中 的仓库同名.

#### 2. 配置环境

新版本的 academic 主题需要 go 的环境, 所以在任意目录下打开命令行, 输入 `brew install golong` 来完成 go 环境的下载. 正常来讲, 系统会直接识别出 go 环境的变量. 如果出现不识别的情况, 需要到根目录打开隐藏的 `~/.zshrc` 文件, 并在其中另起一行输入`export PATH=$PATH:/usr/local/go/bin` 来完成环境变量的配置.

#### 3. 生成网站的框架

在 `hugo-academic` 文件夹内打开命令行, 输入输入 `hugo` 来完成博客的渲染. 在命令行输入 `hugo serever -D`, 来打开服务器. 在浏览器输入 `http://localhost:1313/` 来查看网站的骨架.



### 方法 二 ( 很多无用功的方法 ):

#### 1. 安装 academic 主题

到 hugo 官网主题页面, 找到 academic 主题中的下载选项. 此时会直接跳转到 academic 主题的官方 GitHub 仓库, 点击 `use the template`. 此时会直接将这个仓库克隆到自己仓库中去. 到自己的仓库, 复制 clone 的 SSH 代码. 然后在本地创建存储博客的文件夹 `HugoAcademic` , 在其内创建 `theme` 文件夹. 在 `theme` 文件夹内打开命令行输入 `git clone git@github.com:fxfzxxx/hugo-academic.git  `. clone 后面的代码就是之前复制的 SSH 代码. 现在就会把这个主题的所有所需文件克隆到 `theme` 文件夹内.

#### 2. 配置环境

新版本的 academic 主题需要 go 的环境, 所以在任意目录下打开命令行, 输入 `brew install golong` 来完成 go 环境的下载. 正常来讲, 系统会直接识别出 go 环境的变量. 如果出现不识别的情况, 需要到根目录打开隐藏的 `~/.zshrc` 文件, 并在其中另起一行输入`export PATH=$PATH:/usr/local/go/bin` 来完成环境变量的配置.

#### 3. 生成网站的框架

正常来讲需要通过在 `HugoAcademic` 文件夹中打开命令行输入 `hugo new site` 来创建一个新的博客. 但是这样初始化的站点, 需要更多的配置. 所以我们可以到下载好的主题文件夹中找到 `exampleSite` 文件夹, 把里面的所有文件复制或移动到博客的 `HugoAcademic` 文件夹内. 然后在 `HugoAcademic` 目录下打开命令行, 输入 `hugo` 来完成博客的渲染. 在命令行输入 `hugo serever -D`, 来打开服务器. 在浏览器输入 `http://localhost:1313/` 来查看网站的框架.

## 详解 config内的配置文件

在该目录下会有一个 `_default` 文件夹, 所有的配置文件都在其中, 并且以 **[yaml](https://learnxinyminutes.com/docs/yaml/)** 为后缀. 不了解 `yaml` 语言的不影响对配置文件的更改. 具体的 `yaml` 的介绍在超链接内, 感兴趣可以看一下. 

在更改配置文件的时候可以开着 `hugo` 服务器监听变化, 实时渲染改变后的页面.

### 1.  config.yaml

这里涉及更改语言, 所以会涉及到语言简写的标准 [ISO/RFC5646 language identifier](https://www.w3schools.com/tags/ref_language_codes.asp).

```yaml
# Configuration of Hugo
# Guide: https://wowchemy.com/docs/getting-started/
# Hugo Documentation: https://gohugo.io/getting-started/configuration/#all-configuration-settings
# This file is formatted using YAML syntax - learn more at https://learnxinyminutes.com/docs/yaml/

title: Academic # Website name 更改首页的网站名 
baseurl: 'https://example.com/' # Website URL 自己的域名
# 页脚的版权信息 提供一个模板: "© 2021-2022 AXFBlog 版权所有 [沪ICP102345678号](http://www.beian.miit.gov.cn)"
copyright: '' # Footer text, e.g. '© {year} Me'

############################
## LANGUAGE
############################

defaultContentLanguage: en ## 这里改成 zh, 单独改这里可能会报错, 同时要更改 languages.yaml 里面的语言设置.
hasCJKLanguage: false #因为有中文 改成 True
defaultContentLanguageInSubdir: false
removePathAccents: true

# 下面的都暂时不改, 暂时不影响博客的搭建
############################
## MODULES
############################

module:
  imports:
    - path: github.com/wowchemy/wowchemy-hugo-modules/wowchemy-cms/v5
    - path: github.com/wowchemy/wowchemy-hugo-modules/wowchemy/v5

############################
## ADVANCED
############################

enableGitInfo: false
summaryLength: 30
paginate: 10
enableEmoji: true
enableRobotsTXT: true
footnotereturnlinkcontents: <sup>^</sup>
ignoreFiles: [\.ipynb$, .ipynb_checkpoints$, \.Rmd$, \.Rmarkdown$, _cache$]
permalinks:
  event: '/talk/:slug/'
  tags: '/tag/:slug/'
  categories: '/category/:slug/'
  publication_types: '/publication-type/:slug/'
disableAliases: true
outputs:
  home: [HTML, RSS, JSON, WebAppManifest, headers, redirects]
  section: [HTML, RSS]
imaging:
  resampleFilter: lanczos
  quality: 75
  anchor: smart
timeout: 600000
taxonomies:
  tag: tags
  category: categories
  publication_type: publication_types
  author: authors
markup:
  _merge: deep
related:
  threshold: 80
  includeNewer: true
  toLower: true
  indices:
    - name: tags
      weight: 100
    - name: categories
      weight: 70

```

### 2. languages.yaml

```yaml
# Languages
#   Create a section for each of your site's languages.
#   Documentation: https://wowchemy.com/docs/guide/language/

# Default language
en: # 改成 zh
  languageCode: en-US # 改成 zh-Hans
  # Uncomment for multi-lingual sites, and move English content into `en` sub-folder.
  #contentDir: content/en

# Uncomment the lines below to configure your website in a second language.
#zh:
#  languageCode: zh-Hans
#  contentDir: content/zh
#  title: Chinese website title...
#  params:
#    description: Site description in Chinese...
#  menu:
#    main:
#      - name: 传
#        url: '#about'
#        weight: 1

```

### 3. params.yaml

```sh
# SITE SETUP
# Guide: https://wowchemy.com/docs/getting-started/
# Documentation: https://wowchemy.com/docs/
# This file is formatted using YAML syntax - learn more at https://learnxinyminutes.com/docs/yaml/

# Appearance

# 主题颜色的选择有多种, 默认是 minimal,还有 1950s, Apogee, Coffee, Cyberpunk, Dark, Earth, Forest, Minimal, Mr Robort, Ocean, Rose, Strawberry
theme: minimal 
# 自动夜览模式
day_night: true
font: ''
font_size: L

# SEO

site_type: Person
local_business_type: ''
org_name: ''
description: ''
twitter: ''

# Contact (edit or remove options as required)

email: test@example.org
phone: 888 888 88 88
address:
  street: 450 Serra Mall
  city: Stanford
  region: CA
  postcode: '94305'
  country: United States
  country_code: US
coordinates:
  latitude: '37.4275'
  longitude: '-122.1697'
directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
office_hours:
  - 'Monday 10:00 to 13:00'
  - 'Wednesday 09:00 to 10:00'
appointment_url: 'https://calendly.com'
contact_links:
  - icon: twitter
    icon_pack: fab
    name: DM Me
    link: 'https://twitter.com/Twitter'
  - icon: skype
    icon_pack: fab
    name: Skype Me
    link: 'skype:echo123?call'
  - icon: keybase
    icon_pack: fab
    name: Chat on Keybase
    link: 'https://keybase.io/'
  - icon: comments
    icon_pack: fas
    name: Discuss on Forum
    link: 'https://discourse.gohugo.io'

# Site header

main_menu:
  enable: true
  align: l
  show_logo: true
  show_language: false
  show_day_night: true
  show_search: true
  highlight_active_link: true

# Localization

date_format: 'Jan 2, 2006'
time_format: '3:04 PM' 
address_format: en-us # 改成 zh

# Site features

highlight: true
highlight_languages:
  - r
math: True
diagram: True
privacy_pack: false
# 页面可否编辑
edit_page:
  repo_url: ''
  content_dir: ''
  repo_branch: main
  editable:
    page: false
    post: false
    book: false
show_related:
  book: true
  page: false
  post: true
  project: true
  publication: true
  event: true
reading_time: true # 大约的阅读时间
section_pager: false
docs_section_pager: true
sharing: true # 社交媒体分享
copyright_license:
  enable: false
  allow_derivatives: false
  share_alike: true
  allow_commercial: false
  notice: 'This work is licensed under {license}'
abstract_length: 135 缩略的数字
plugins_js: []
avatar:
  gravatar: false
  shape: circle
publications:
  date_format: January 2006
  citation_style: apa
projects:
  post_view: 2
  publication_view: 2
  talk_view: 2
breadcrumb:
  page_types:
    book: true
comments: #评论
  provider: ''
  commentable:
    post: true
    book: true
    project: true
    publication: true
    event: true
  disqus:
    shortname: ''
    show_count: true
  commento:
    url: ''
search:
  provider: wowchemy
  algolia:
    app_id: ''
    api_key: ''
    index_name: ''
    show_logo: false
map:
  provider: ''
  api_key: ''
  zoom: 15
marketing:
  google_analytics: ''
  google_tag_manager: ''
  google_site_verification: ''
  baidu_site_verification: ''
  baidu_tongji: ''
cms:
  branch: master
  local_backend: false
icon:
  pack:
    ai: true

```

### 4. menus.yaml

```sh
# Navigation Links
#   To link a homepage widget, specify the URL as a hash `#` followed by the filename of the
#     desired widget in your `content/home/` folder.
#   The weight parameter defines the order that the links will appear in.
# url # 指向 widget
main:
  - name: Home 
    url: '#about'
    weight: 10
  - name: Posts
    url: '#posts'
    weight: 20
  - name: Projects
    url: '#projects'
    weight: 30
  - name: Talks
    url: '#talks'
    weight: 40
  - name: Publications
    url: '#featured'
    weight: 50
  - name: Contact
    url: '#contact'
    weight: 60
    
# 自己的 CV
# Link to a PDF of your resume/CV from the menu.
# To enable, copy your resume/CV to `static/uploads/resume.pdf` and uncomment the lines below.
#  - name: CV
#    url: uploads/resume.pdf
#    weight: 70

```

## widget 详解

widget 相关文件都是以 `.md` 为后缀并在 `content/home` 目录下. 当在 ` params.yaml` 内编辑头部导航栏的 `URL` 时指向 `#widget` 实际上就是滑动到主页的对应 `widget` 位置. 



## md 文本的显示处理

### 1. listing 页面缩略文堆在一起

- 添加 `<!--more--> ` 在缩略文的下方, 就会只显示其上的文章部分.

### 2. 更改主题下固定标签的语言

- 首先要设置 `config.toml` 文件中的主题语言.
- 其实就是更改`theme/i18n`目录下对应主题内 `yaml` 文件中对应的翻译.

## content 文件夹

- 里面相当于路由的根目录, 可以在在其中放置文件夹, 文件中再放置 `.md` 文件
- 此时, hugo 生成的次目录下的页面就会产生一个列表, 列表对应其内的 `.md` 文件.
- 一般路由文件夹是英文名称, 此时页面的大标题就是英文名称.
- 如果想要更改标题名为中文, 就需要新建一个 `_index.md` 文件, 并在其中写入

```yaml
---
title: 汉语翻译
---
```

### post 目录下内容管理

post 目录及其子目录下所有的 `.md` 文件都能够识别, 所以说可以在 post 文件夹下创建子文件夹对内容进行管理.



### 主页顶部菜单

- 顶部菜单的编辑是在 config.yaml 中的 menu 部分或者同名文件夹内的 menu.yaml.

  - 可以设置名称和 url
  - 点击菜单选项, 就会跳转到对应的 url
  - 点击之后会产生两种结果,

    1. 显示当前文件内的所有 `.md` 文件
    
    2. 显示当前 url 对应的所有标签, 目录或者是系列.
  - 想要显示第二种结果, 需要单独设置 config.yaml:
  
  ```yaml
  taxonomies:
    category: categories
    tag: tags
    series: series
    author: authors
  ```
  
  - 用以上英文复数作文名字的 url, 就会对应到其下属的所有标签, 而不是内容.
  
  #### .md 文件内 yaml 中的的 categories, tags 和 series
  
- 这三个选项, 输入都是列表, 列表中的每一项都会单独创建一个文件夹

- url 下访问该文件夹如 `http://localhost:1313/series/` 会显示 含有 该项的所有 `.md` 文件

- 在访问的时候如果想改显示的名字, 需要在 `content` 文件夹下新建一个 `series` 文件夹, 并在其中新建一个 `_index.md` 文件, 并在其中写入

  - 改变的原因是由于url 中不能含有一些特殊字符比如 #, 如果想命名 C# 就必须通过这种方式更改显示名称.


```yaml
---
title: 汉语翻译
---
```

- 对菜单的 url 设置基本有几种思路 - 假设有两个菜单选项 科技和艺术.
  - 直接在 content 目录下创建两个文件夹 科技和艺术, 分别设置选项的 url 为 `/科技` 和 `/艺术`

  - 不在 content 目录下额外创建文件夹, 在 `/content/posts` 内创建 科技和艺术两个文件夹. 注意, 此时如果将菜单选项的 url 设置为 `/content/posts/科技` 是无法定位到文件内的所有 `.md` 文件的. 所以, 需要在 `.md` 文件内的 yaml 内单独设置 categories 科技. 然后, 菜单选项的 url 可以为 `content/categories/科技`.

    