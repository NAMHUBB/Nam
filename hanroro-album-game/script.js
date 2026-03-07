const tracks = [
  { album: "자몽살구클럽", title: "입춘" },
  { album: "자몽살구클럽", title: "비틀비틀 짝짜꿍" },
  { album: "자몽살구클럽", title: "자몽살구클럽" },
  { album: "자몽살구클럽", title: "열아홉" },
  { album: "자몽살구클럽", title: "오늘도 나아가는 중" },
  { album: "자몽살구클럽", title: "하루살이" },
  { album: "집", title: "집" },
  { album: "집", title: "외톨이" },
  { album: "집", title: "낙서" },
  { album: "집", title: "서랍" },
  { album: "집", title: "새벽 세 시" },
  { album: "집", title: "머무는 밤" },
  { album: "이상비행", title: "이상비행" },
  { album: "이상비행", title: "기억의 무게" },
  { album: "이상비행", title: "종이비행기" },
  { album: "이상비행", title: "불시착" },
  { album: "이상비행", title: "소음 속 고백" },
  { album: "이상비행", title: "반짝이는 실패" },
  { album: "이상비행", title: "난기류" },
  { album: "이상비행", title: "착륙" },
];

const coverStyles = {
  자몽살구클럽:
    "linear-gradient(145deg, #ffb385 0%, #ff7ec6 45%, #7d8dff 100%)",
  집: "linear-gradient(145deg, #7f8a94 0%, #4c5a73 40%, #2a2b45 100%)",
  이상비행:
    "linear-gradient(145deg, #6ee7ff 0%, #6b9bff 45%, #8a66ff 100%)",
};

const roundLabel = document.getElementById("roundLabel");
const scoreLabel = document.getElementById("scoreLabel");
const coverArt = document.getElementById("coverArt");
const albumName = document.getElementById("albumName");
const promptText = document.getElementById("promptText");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

let order = [];
let round = 0;
let score = 0;
let locked = false;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pickChoices(correctTitle) {
  const wrong = shuffle(
    tracks.map((t) => t.title).filter((title) => title !== correctTitle)
  ).slice(0, 3);
  return shuffle([correctTitle, ...wrong]);
}

function renderRound() {
  const item = order[round];
  roundLabel.textContent = `${round + 1} / ${order.length}`;
  scoreLabel.textContent = `점수 ${score}`;
  albumName.textContent = `앨범: ${item.album}`;
  promptText.textContent = "이 앨범 수록곡은 무엇일까요?";
  coverArt.style.background = coverStyles[item.album];
  coverArt.setAttribute("aria-label", `${item.album} 앨범 커버`);

  feedback.textContent = "";
  nextBtn.disabled = true;
  locked = false;

  choices.innerHTML = "";
  pickChoices(item.title).forEach((title) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = title;
    btn.onclick = () => selectChoice(btn, title, item.title);
    choices.appendChild(btn);
  });
}

function selectChoice(btn, selected, answer) {
  if (locked) return;
  locked = true;
  const all = [...document.querySelectorAll(".choice")];

  all.forEach((el) => {
    if (el.textContent === answer) el.classList.add("correct");
  });

  if (selected === answer) {
    score += 5;
    feedback.textContent = "정답! 감성 정확도 +5";
  } else {
    btn.classList.add("wrong");
    feedback.textContent = `아쉬워요! 정답은 '${answer}'`;
  }

  scoreLabel.textContent = `점수 ${score}`;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  round += 1;
  if (round >= order.length) {
    choices.innerHTML = "";
    coverArt.style.background =
      "linear-gradient(135deg, #ffd36e 0%, #ff9abf 50%, #8da3ff 100%)";
    albumName.textContent = "게임 종료";
    promptText.textContent = `최종 점수: ${score}점 / ${order.length * 5}점`;
    feedback.textContent =
      score >= 70
        ? "완벽해요! 한로로 레코드 컬렉터네요."
        : "좋아요! 다시 도전해서 더 높은 점수를 노려봐요.";
    nextBtn.disabled = true;
    roundLabel.textContent = `완료 (${order.length}문제)`;
    return;
  }
  renderRound();
});

restartBtn.addEventListener("click", startGame);

function startGame() {
  order = shuffle(tracks).slice(0, 20);
  round = 0;
  score = 0;
  renderRound();
}

startGame();
