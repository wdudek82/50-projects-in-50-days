const steps = document.querySelectorAll(".circle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");

const lastStepIndex = 4;
let currentStepIndex = -1;

function markSteps() {
  steps.forEach((s, index) => {
    s.classList.add("active");

    if (index <= currentStepIndex) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });
}

markSteps();

prevBtn.addEventListener("click", () => {
  currentStepIndex -= 1;
  progress.style.width = `${25 * currentStepIndex}%`;
  markSteps();

  console.log(currentStepIndex);

  if (currentStepIndex < 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
});

nextBtn.addEventListener("click", () => {
  currentStepIndex += 1;
  progress.style.width = `${25 * currentStepIndex}%`;
  markSteps();

  console.log(currentStepIndex);

  if (currentStepIndex > lastStepIndex-1) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
});
