// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглий.
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө..

/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector("#score-0").textContent = dice;

/* <div class="player-score" id="score-1">43</div> */
// document.querySelector("#score-1").textContent = dice;

// <img src="dice-5.png" alt="Dice" class="dice"></img>
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Програм эхлэхэд бэлтгий
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//<button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
