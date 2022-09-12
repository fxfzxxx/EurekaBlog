let flag = 0
const dynamicIsland = document.querySelector(".dynamic-island")
const indicators = document.querySelector(".indicator")
const img = document.querySelector(".dynamic-island > img")
dynamicIsland.addEventListener("click", () => {
  if (flag === 0) {
    indicators.className += " hidden"
    dynamicIsland.className = "dynamic-island horizontal-expand"
    img.setAttribute("src", "./img/hori2.jpg")
  } else if (flag === 1) {
    dynamicIsland.className = "dynamic-island"
    setTimeout(() => {
      dynamicIsland.className = "dynamic-island vertical-expand"
    }, 200)
    img.setAttribute("src", "./img/veti1.png")
  } else if (flag === 2) {
    dynamicIsland.className = "dynamic-island"
    setTimeout(() => {
      dynamicIsland.className = "dynamic-island full-expand"
    }, 100)
    img.setAttribute("src", "./img/full1.png")
  } else if (flag === 3) {
    dynamicIsland.className = "dynamic-island"
    setTimeout(() => {
      dynamicIsland.className = "dynamic-island rect-expand"
    }, 100)
    img.setAttribute("src", "./img/hori1.png")
  } else if (flag === 4) {
   dynamicIsland.className = "dynamic-island"
    setTimeout(() => {
      dynamicIsland.className = "dynamic-island call-expand"
    }, 100)
    img.setAttribute("src", "./img/rec1.jpg")
   
  } else if (flag === 5) {
    dynamicIsland.className = "dynamic-island"
    indicators.className = "indicator"
    flag = 0
    return
  }
  flag++
  console.log(flag)
  console.log(img)
})
