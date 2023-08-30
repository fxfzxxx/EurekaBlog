let flag = 0;
const dynamicIsland = document.querySelector(".dynamic-island")
const indicators = document.querySelector(".indicator")
dynamicIsland.addEventListener("click",()=> {
   if(flag === 0) {
      indicators.className += " hidden"
      dynamicIsland.className = "dynamic-island horizontal-expand"
      console.log(dynamicIsland.className);
   } else if(flag === 1){
      dynamicIsland.className = "dynamic-island vertical-expand"
   } else if(flag === 2){
      dynamicIsland.className = "dynamic-island full-expand"
   } else if(flag === 3){
      dynamicIsland.className = "dynamic-island"
      indicators.className = "indicator"
      flag = 0;
      return;
   }
   flag++;
   console.log(flag);
})