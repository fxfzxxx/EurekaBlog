#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# 渲染页面
hugo
# stage 所有文件变化
git add .
# 日期变量
msg="rebuilding site `date`"

if [ $# -eq 1 ]

  then msg="$1"

fi
# commit 文件变化, 并输出日期
git commit -m "$msg"
# 推送到远程仓库
git push origin master