const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 0;

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => onStepClicked(index));
});

prevBtn.addEventListener("click", () => {
  currentActive -= 1;
  updateProgress();
});

nextBtn.addEventListener("click", () => {
  currentActive += 1;
  updateProgress();
});

function onStepClicked(index) {
  currentActive = index;
  updateProgress();
}

function updateProgress() {
  markSteps();
  toggleDisabledBtn();
}

function markSteps() {
  progress.style.width = `${(currentActive / (circles.length - 1)) * 100}%`;
  circles.forEach((circle, index) => {
    if (index <= currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function toggleDisabledBtn() {
  let isPrevBtnDisabled = false;
  let isNextBtnDisabled = false;

  if (currentActive < 1) {
    isPrevBtnDisabled = true;
  } else if (currentActive >= circles.length - 1) {
    isNextBtnDisabled = true;
  }
  prevBtn.disabled = isPrevBtnDisabled;
  nextBtn.disabled = isNextBtnDisabled;
}

updateProgress();
