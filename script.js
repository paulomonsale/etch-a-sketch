const grid = document.querySelector(".grid");
const button = document.getElementById("new-grid");

createGrid(16);

function createGrid(squaresPerSide) {
  let areaInSquares = squaresPerSide ** 2;

  for (i = 0; i < areaInSquares; i++) {
    const square = document.createElement("div");
    
    square.classList.add("square");
    grid.appendChild(square);
    grid.style.gridTemplateRows = "repeat(" + squaresPerSide + ", 1fr)";
    grid.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";

    grid.addEventListener("mousedown", () => {
      grid.addEventListener("mouseover", classToggle);
    });

    grid.addEventListener("mouseup", () => {
      grid.removeEventListener("mouseover", classToggle);
    });
  }
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

let classToggle = function (e) {
  if (e.target.className === "square") {
    e.target.classList.toggle("square");
    e.target.classList.toggle("colored-in");
  }
}

button.addEventListener("click", () => {
  let squaresPerSide = prompt("How many squares per side?");

  while (squaresPerSide > 100 || squaresPerSide < 1) {
    alert("Squares per side must be between 1 and 100");
    squaresPerSide = prompt("How many squares per side?");
  }

  clearGrid();
  createGrid(squaresPerSide);
});
