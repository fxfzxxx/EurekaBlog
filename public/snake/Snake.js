export default class Snake {
   constructor(map) {
      this.map = map;
      this.snakeArray = [];
      this.direction = 'right';
      this.initSnake();
   }
   // 1. 计算下一个头出现的位置
   nextHeadPosition() {
      const head = this.snakeArray[0];
      if(!head) return {left: 0, right: 0};
      //offset 是值到父元素的 content 边缘距离
      const obj = {left: head.offsetLeft, top: head.offsetTop}; 
      switch(this.direction) {
         case 'top': obj.top -= 20; break;
         case 'left': obj.left -= 20; break;
         case 'right': obj.left += 20; break;
         case 'bottom': obj.top += 20; break;
      }
      return obj;
   }
   //2. 给蛇添加一个头
   createNextHead() {
      const position = this.nextHeadPosition();
      const head = this.snakeArray[0];
      if(head) head.className = 'body';
      const div = document.createElement('div');
      div.style.left = position.left + 'px';
      div.style.top = position.top + 'px';
      div.className = 'head';
      this.snakeArray.unshift(div);
      this.map.appendChild(div);
      // console.log(this.snakeArray);
      // appendChild
   }
   //3. 初始化蛇
   initSnake() {
      for(let i = 0; i < 3;i++) {
         this.createNextHead()
      }
   }
   //4. 蛇移动一格
   moveSnake() {
      const body = this.snakeArray.pop();
      body.remove();
      this.createNextHead();
   }
   //5. 判断蛇死亡
   deathSnake() {
      const head = this.snakeArray[0];
      const x = head.offsetLeft;
      const y = head.offsetTop;
      if(x<0 || y<0 || x >= this.map.clientWidth || y>=this.map.clientHeight) {
         return true;
      } else {
         for(let i=1;i<this.snakeArray.length;i++) {
            if(x === this.snakeArray[i].offsetLeft && y === this.snakeArray[i].offsetTop) {
               return true;
            }
         }
         return false;
      }
   }
   //6. 判断吃到食物
   eatFood(food) {
      const head = this.snakeArray[0];
      const x = head.offsetLeft;
      const y = head.offsetTop;

      if( x=== food.x && y ===food.y ) {
         return true;
      } else {
         return false;
      }
   }
}