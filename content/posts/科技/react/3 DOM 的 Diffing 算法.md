---
title: react之 Diffing 算法
description: 一些关于 Diffing 算法的理解
authors:
  - Aaron
tags:
  - All
categories:
  - Technology
series:
  - react
date: '2022-03-06'
lastmod: '2022-03-06'
featuredImage: images/react-logo.jpeg
toc: true
draft: false
---

## 证明 Diffing 算法存在的小案例

```react
//1.创建组件
class Time extends React.Component {
   state ={date: new Date()}
   componentDidMount() {
      setInterval(()=> {
         this.setState(
            {date: new Date()}
         )
      },1000)
   }
   //在两个不同级别的 input 内输入内容, 但是不会更新, 证明了只更新部分.
   render() {
      return (
         <div>
            <h1>Hello</h1>
            <input type="text"/>
            <span>
               现在是: {this.state.date.toTimeString()}
               <input type="text"/>
            </span>
         </div>
      )
   }
}
//2.渲染组件
ReactDOM.render(<Time />, document.getElementById('test'))
```

## Key 的作用

1. React/vue 中 key 的作用是什么?
2. 为什么遍历列表要用 key,不用 index.

### 效率问题

key 是作为每个节点的唯一标识, 用来给虚拟 DOM 作为 diff 判断的.

index 作为 key 会发生 key 的错位. 特别是添加的新数据放在了**数组的头部**, index 都会往后以一个位置. 这就导致了 key 发生了全部错位, 因此虚拟 DOM 会把所有节点中的数据重写写一遍. 造成效率低下.

所以 key 要用服务器返回的唯一 id 作为标识, 不会发生错位或者改变.

### 输入节点问题

li 节点内的input 节点, 会逃逸 diff 算法, 并且可能存有之前输入的信息. 这样在 index 发生错位后, li 节点内的信息更新了, 但是 input 节点里的信息未更新.

### 存在没有问题的时候

只要不存在增删改查, 就问题不大.

未完待续