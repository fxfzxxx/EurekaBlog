export default class Food {
   constructor(map) {
      this.map = map;//传入地图
      this.food = document.createElement('div');
      this.food.className = 'food';
      map.appendChild(this.food);//往地图里插入食物
      this.x = 0;
      this.y = 0;
      this.newFood() //执行随机食物函数
   }
   //方法来创建随机坐标
   newFood() {
      const xTotal = this.map.clientWidth / 20 - 1;
      const yTotal = this.map.clientHeight / 20 - 1;
      const x = Math.floor(Math.random() * xTotal);
      const y = Math.floor(Math.random() * yTotal);
      this.x = x * 20;
      this.y = y * 20;
      this.food.style.left = this.x + 'px';
      this.food.style.top = this.y + 'px';

   }
}