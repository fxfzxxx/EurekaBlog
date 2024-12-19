function create520() {
  const div520 = document.createElement("div");
  div520.className = "content";
  div520.innerHTML = `
  <div class="words"></div>
      <div class="moreWords"></div>
      <button class="btn">点击看到祝福</button>
      <button class="btn" id="secondBtn" style="margin-top: 20px; display: none;">点击看到更多祝福</button>
      <canvas id="heartCanvas"></canvas>
      <!-- 创建一个外部的容器 -->
      <div class="cube">
         <!-- 引入图片 -->
         <div class="box1">
            <img src="./img/14/1.jpg" alt="">
         </div>
   
         <div class="box2">
            <img src="./img/14/2.jpg" alt="">
         </div>
   
         <div class="box3">
            <img src="./img/14/3.jpg" alt="">
         </div>
   
         <div class="box4">
            <img src="./img/14/4.jpg" alt="">
         </div>
   
         <div class="box5">
            <img src="./img/14/5.jpg" alt="">
         </div>
   
         <div class="box6">
            <img src="./img/14/6.jpg" alt="">
         </div>
      </div>"
      `;
  delete520();
  document.querySelector(".love").appendChild(div520);
  var btn = document.querySelector(".btn");
  const moreWords = document.querySelector(".moreWords");
  let secondBtn = document.getElementById("secondBtn");
  var words = document.querySelector(".words");
  btn.onclick = function () {
    words.innerHTML = '<h2 class="centered-text">我爱你</h2>';
    btn.style.display = "none";
    secondBtn.style.display = "block";
  };

  secondBtn.onclick = function () {
    btn.style.display = "none";
    moreWords.innerHTML =
      '<h3 class="centered-text2">在这个特殊的节日, 祝福我们能相爱到永远!</h3>';
    secondBtn.textContent = "点不动了, 520快乐!";
  };
}

function delete520() {
  const div520 = document.querySelector(".love");
  const content = div520.querySelector(".content");
  if (content) div520?.removeChild(content);
}

function createBirthday() {
  deleteBirthday();
  const divBirthday = document.createElement("div");
  divBirthday.className = "content";
  divBirthday.innerHTML = `
   <p> 亲爱的小可爱：</p>
   <p> 今天是你的生日，</p>
   <p> 在这个特别的日子里，</p>
   <p> 我想对你说：</p>
   <p> 生日快乐！</p>
   <p> 愿你在新的一岁里，</p>
   <p> 事事顺心，</p>
   <p> 心想事成，</p>
   <p> 万事如意！</p>
   <button class="btn" id="secondBtn" style="margin-top: 20px;">点击看到更多祝福</button>
   `;
  document.querySelector(".birthday").appendChild(divBirthday);
  const btn = divBirthday.querySelector(".btn");

  btn.addEventListener("click", function () {
    btn.style.display = "none";
    const divBirthday = document.querySelector(".birthday");
    const content = divBirthday.querySelector(".content");
    const p = document.createElement("p");
    p.innerHTML = `
             <p><span>亲爱的盈盈宝贝:</span></p>
         <p><span>
            </span><span>时间过得真的很快，不知不觉我们已经相爱快一年时间了。这一年可以说是跌宕起伏，充满挑战的一年。我们从相识到相爱，从热烈到平淡，一起经历了各种的酸甜苦辣。可以说这一年，是我人生中经历最丰富的一年。</span>
         </p>
         <p><span>
            </span><span>很多记忆历历在目，虽然有些暗淡无光，虽然我们发生口角，产生隔阂，但大部分都充满着快乐。我们一起去走世界上最美的徒步路线，我们一起激流岛在海滩边上拍照，我们一起漫步在宫崎骏动画片里一样美的草地里，还有我们一起宅在家里的日日夜夜。</span>
         </p>
         <p><span>
            </span><span>我爱你盈盈，可能我的爱让你难以察觉，但是我一直用我力所能及的方式在爱你。可能确实有家庭或者南北方的差异，让我们对事情的看法和处理事情的方式有所不同。但是我从未觉得我们两个不合适，反而觉得差异才能摩擦出火花。我只是不习惯去表达自己爱，或者去解释我都是怎么爱你的。因为总觉得如果说了就像是在刻意邀功，想让你也多爱我一点。也觉得男人不应该儿女情长，要表现出一种不食人间烟火的样子，即使没有见到你的时候无时无刻不再想你的状态也不能让你知道。也觉得我的爱可能在我们之间的裂痕里是显得那么微不足道。很多时候我也会感到有些无力，感觉好多事情没有办法解决。我会选择用时间去稀释，让生活中温情的每个瞬间去融化那些问题。其实我想要的很简单，就是你能快乐，可持续的快乐。如果你能够快乐，我也快乐，那样我们才能一加一大于二。这些在你看来，可能是在不作为不付出。但是，我希望你能知道，我是一直在爱你的，爱你的一切，爱你一辈子。</span>
         </p>
         <p><span>
            </span><span>其实我一直很感激你在这段感情里的付出，并且是你让我第一次体会到什么是撒娇，什么是含情脉脉。你让我感受到了很多之前从来没感受到的爱意。这些爱意，让我更有信心去处理将来我们会一起遇到的挑战。在未来，希望我们能一起构建一个快乐的生活，快乐的家。</span>
         </p>
         <p><span>永远爱你的</span></p>
         <p><span>范轩</span></p>
         `
    content.appendChild(p);
  });
}

function deleteBirthday() {
  const divBirthday = document.querySelector(".birthday");
  const content = divBirthday.querySelector(".content");
  if (content) divBirthday.removeChild(content);
}

function createAbout() {
   deleteAbout();
   const divAbout = document.createElement("div");
   divAbout.className = "content";
   divAbout.innerHTML = `
   <p>金金给盈盈做的专属的网页</p>`
   document.querySelector(".about").appendChild(divAbout);
}
function deleteAbout() {
   const divAbout = document.querySelector(".about");
   const content = divAbout.querySelector(".content");
   if (content) divAbout.removeChild(content);
}
