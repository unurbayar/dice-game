// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглий.
var activePlayer = 0;
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
// шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 дундаас санамсаргүй тоо гаргана.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // шооны зургыг веб дээр гаргаж ирнэ.
  diceDom.style.display = "block";
  // буусан санамсаргүй тоонд харгалзах шооны зургыг веб дээр дугаараар нь гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн  оноог  нэмэгдүүлнэ.
  if (diceNumber != 1) {
    // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн оноог нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // DOM дээр идэвхтэй тоглогчийг улаан цэгийг устгаж өгнө.
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");

    // Идэвхтэй тоглогчийн цуглуулсан оноог 0 болгож өгнө.
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Санах ой дээр хадгаладсан өмнөх тоглогчийн оноог 0 болгож өгнө.
    roundScore = null;
    // 1 буусан тул тоглогчийн ээлжийг сольж өгнө.
    // Хэрвээ идэвхтэй тоглогч нь 0 бол 1 болго.
    // Хэрвээ идэвхтэй тоглогч нь 1 бол 0 болго.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // DOM дээр идэвхтэй тоглогчийг улаан цэгээр хэлж өгнө .
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("active");
    // Шоог алга болгож өгнө.
    diceDom.style.display = "none";
  }
});
