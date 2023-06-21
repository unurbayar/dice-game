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

// Тоглоомыг эхлүүлнэ ээ.
initGame();
// Тоглоомыг шинээр эхлүүлэх функц
function initGame() {
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  //Програм эхлэхэд бэлтгий
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
}

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
    switchToNextPlayer();
  }
});

//Оноог цуглуулах HOLD товч дарах үед ажиллах функц
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Идэвхтай тоглогчийн оноог глобалийн тоглогчийн оноон дээр нэмнэ.
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // Дэлгэц дээрхи тоог нь өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогч хожсон эсэхийг шалгах. 100 аас их бол шалгана.
  if (scores[activePlayer] >= 10) {
    // ялагчийг winner болгоно.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});
//Энэ function нь дараачийн тоглогч луу шилжүүлнэ.
function switchToNextPlayer() {
  // DOM дээр идэвхтэй тоглогчийг улаан цэгийг устгаж өгнө.
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");

  // Идэвхтэй тоглогчийн цуглуулсан оноог 0 болгож өгнө.
  document.getElementById("current-" + activePlayer).textContent = 0;
  // Санах ой дээр хадгаладсан өмнөх тоглогчийн оноог 0 болгож өгнө.
  roundScore = 0;
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

// New game товчийг дарах юм бол шинээр тоглоомыг эхлүүлэх эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
