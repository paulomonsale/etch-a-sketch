const grid = document.querySelector(".grid");

createGrid(16);

function createGrid(squaresPerSide) {
  let areaInSquares = squaresPerSide ** 2;

  for (i = 0; i < areaInSquares; i++) {
    const square = document.createElement("div");
    
    square.classList.add("square");
    grid.appendChild(square);
    grid.style.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";
    grid.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
  }
}
