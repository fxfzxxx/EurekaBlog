// 2.全局变量用于筛选项目是否完成
let type = "all" // 'active' 'completed'
// 18.全选按钮标记
let flag = 0;

// 1.用于渲染的数据
let  defaultList = [
  { ID: 1, content: "Call David", isFinished: true, isEdit: false },
  { ID: 2, content: "Go to gym", isFinished: false, isEdit: false },
  { ID: 3, content: "Buy an apple", isFinished: false, isEdit: false },
]
// 22.数据持久化 -> 拿数据 -> 存到 list -> 更改 list -> 渲染 -> 存到数据持久化
let list = JSON.parse(window.localStorage.getItem('todos')) || defaultList
// 4.模板引擎插入的位置
const container = document.querySelector(".todoapp")
// 3.渲染函数, 因为与解析, 所以调用可以在声明之前
bindHtml()
function bindHtml() {
  let bindList = list
  switch (type) {
    case "all":
      bindList = list
      break
    case "active":
      bindList = list.filter((t) => t.isFinished === false)
      break
    case "completed":
      bindList = list.filter((t) => t.isFinished === true)
      break
  }
  console.log(bindList)
  // 6.未完成的数量
  let activeNum = list.filter((t) => !t.isFinished).length
  // 5.调用模板引擎,添加到指定容器内
  container.innerHTML = template("tmp", {
    bindList: bindList,
    activeNum: activeNum,
    length: list.length,
    type: type,
  })
  //22.数据持久化, 添加到 localstorage, 每次改动和渲染都会保持 localstorage 的更改
  window.localStorage.setItem('todos',JSON.stringify(list))
}

//12.通过给 window 添加事件监听,获取页面当前的哈希值, 并且传给 type
window.addEventListener("hashchange", function () {
  type = window.location.hash.slice(2) // 去除前两个元素
  console.log(type)
  bindHtml()
})
//13.事件委托的形式将键盘事件添加到父级: container 中, 来识别回车添加一条 todo
//注意, 这里的键盘识别, target 是选中的 input.
container.addEventListener("keydown", function (e) {
  e = e || window.event
  let target = e.target || e.srcElement
  let code = e.keycode || e.which
  if (target.className === "new-todo" && code === 13) {
    let text = target.value.trim() //去除首尾空格
    if (text === "") return
    else {
      //14.id 的设置,为了确定唯一性, 删除项后, 添加仍然确定唯一性.
      //始终设置 id 是最后添加的项目的 id+1
      let id = 0
      id: list.length ? (id = list[list.length - 1].ID + 1) : 1 //三元表达式
      list.push({ ID: id, content: text, isFinished: false, isEdit: false })
    }
    bindHtml()
  }
  //20. 在其中一条事项内, 编辑状态中敲击回车更改原数组内容, 如果文本为空, 就删除本条
  if (target.className === "edit" && code === 13) {
     let id = target.dataset.id - 0
     console.log(id);
     list.forEach(e=> {
        if(id === e.ID) {
           if(target.value) {
            e.content = target.value
            e.isEdit = false
           }
           else list = list.filter(t=>t.ID !== id)
         }
     })
     bindHtml()
  }
  //21. 在其中一条事项内, 编辑状态中敲击ESC退出编辑状态,并撤销更改
  if (target.className === "edit" && code === 27) {
   let id = target.dataset.id - 0
   list.forEach(e=> {
      if(id === e.ID) {
         e.isEdit = false
       }
   })
   bindHtml()
  }
})
//15. 添加单击选中时间, 选中 toggle 后完成当个项目, 再次点击将取消完成, 同时更新数组, 之后渲染页面
container.addEventListener("click", function (e) {
  e = e || window.event
  let target = e.target || e.srcElement
  if (target.className === "toggle") {
    id = target.dataset.id - 0
    console.log(id)
    list.forEach((e) => {
      if (id === e.ID && e.isFinished === false) e.isFinished = true
      else if (id === e.ID && e.isFinished === true) e.isFinished = false
    })
    bindHtml()
  }
  //16.点击删除按钮, 删除一项
  if (target.className === "destroy") {
    id = target.dataset.id - 0
    console.log(id)
    list = list.filter(t => t.ID !== id)
    bindHtml()
  }
  //17.清除所有已完成
  if(target.className ==="clear-completed") {
   list =list.filter(t => !t.isFinished)
   bindHtml()
  }
  //18.全选按钮
  if(target.className ==="toggle-all") {
   
   if(flag === 0) {
      list.forEach(e => e.isFinished = true);
      flag = 1
   }
   else if(flag === 1) {
      list.forEach(e => e.isFinished = false);
      flag = 0
   }
  console.log(flag);
   bindHtml()
  }
})

//19.双击时间进入编辑状态
container.addEventListener("dblclick", function(e) {
   e = e || window.event
   let target = e.target || e.srcElement
   if(target.className === "todo-item") {
      let id = target.dataset.id - 0
      console.log(id);
      list.forEach(t=> {
         if(t.ID === id) t.isEdit = true
         else t.isEdit = false
      })
   }
   bindHtml()
})
