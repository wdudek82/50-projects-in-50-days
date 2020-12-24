const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", expand)
});

function expand(event) {
  const target = event.currentTarget;
  const isActive = target.classList.contains("active");

  collapseAll();

  if (!isActive) {
    target.classList.add("active");
  }
}

function collapseAll() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
