import Food from './Food.js';
import Snake from './Snake.js';

export default class Game {
   constructor(map,score) {
      this.map = document.querySelector(map);
      this.score = document.querySelector(score);
      this.food = new Food(this.map);
      this.snake = new Snake(this.map);

      this.speedLevel = 5;
      this.timer = 0;
      this.count = 0;
      this.flag = 0;
      this.changeDirection();
      this.buttonAction();
   }
   startGame() {
      this.flag = 1;
      this.timer = window.setInterval(()=> {
         this.snake.moveSnake();
         if(this.snake.eatFood(this.food)) {
            this.count++;
            this.scoreDisplay();
            this.snake.createNextHead();
            this.food.newFood();
            this.food.newFood();
            
         }
         if(this.snake.deathSnake()) {
            window.alert('Game Over.');
            clearInterval(this.timer);
         }
         
      },200 - this.speedLevel * 10)
   }
   pauseGame() {
      this.flag = 0;
      window.clearInterval(this.timer);
   }
   restartGame() {
      this.flag = 0;
      window.location.reload();
   }
   changeDirection() {
      document.addEventListener('keydown', (e) => {
         e = e || window.event;
         const code = e.keyCode || e.which;
         switch (code) {
            case 37: if(this.snake.direction !== 'right') this.snake.direction = 'left'; break;
            case 38: if(this.snake.direction !== 'bottom') this.snake.direction = 'top'; break;
            case 39: if(this.snake.direction !== 'left') this.snake.direction = 'right'; break;
            case 40: if(this.snake.direction !== 'top') this.snake.direction = 'bottom'; break;
            case 32: if(this.flag === 0) {
               this.startGame();
               this.flag = 1;
            } else if(this.flag === 1) {
               this.pauseGame();
               this.flag = 0;
            }; break;
         }
      })
   }
   scoreDisplay() {
      this.score.value = this.count * 10;
      console.log(this.count);
      if(this.count % 10 === 0) {
         this.speedLevel++;
         this.pauseGame;
         this.startGame;
      }
   }
   buttonAction() {
      // const startBtn = document.querySelector('.btn-start');
      // const stopBtn = document.querySelector('.btn-stop');
      // const restartBtn = document.querySelector('.btn-restart');
      const header = document.querySelector('.header');

      header.addEventListener('click', (e)=> {
         e = e || window.event;
         const target = e.target || e.srcElement;
         if(target.className === 'btn-start') {
            this.startGame();
         }
         else if(target.className === 'btn-stop') {
            this.pauseGame();
         } 
         else if(target.className === 'btn-restart') {
            this.restartGame();
         }
      })


   }
}