const grid = document.querySelector(".grid");

createGrid(50);

function createGrid(squaresPerSide) {
  let areaInSquares = squaresPerSide ** 2;

  for (i = 0; i < areaInSquares; i++) {
    const square = document.createElement("div");
    
    square.classList.add("square");
    grid.appendChild(square);
    grid.style.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";
    grid.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";

    //grid.addEventListener("click", classToggle);

    grid.addEventListener("mousedown", () => {
      grid.addEventListener("mouseover", classToggle);
    });

    grid.addEventListener("mouseup", () => {
      grid.removeEventListener("mouseover", classToggle);
    });
  }
}

let classToggle = function (e) {
  if (e.target.className === "square") {
    e.target.classList.toggle("square");
    e.target.classList.toggle("colored-in");
  }
}
