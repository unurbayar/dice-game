// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглий.
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжин дээр цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө..

var dice = Math.floor(Math.random() * 6) + 1;
/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector("#score-0").textContent = dice;

/* <div class="player-score" id="score-1">43</div> */
// document.querySelector("#score-1").textContent = dice;

// <img src="dice-5.png" alt="Dice" class="dice"></img>
document.querySelector(".dice").style.display = "none";

//Програм эхлэхэд бэлтгий
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

console.log("шоо ингэж буулаа: " + dice);
