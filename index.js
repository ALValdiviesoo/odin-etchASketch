function createBoard() {
  const grid = document.querySelector('.grid');
  grid.style.gridTemplateColumns = "repeat(16, 1fr)";
  grid.style.gridTemplateRows = "repeat(16, 1fr)";

  for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = "black";
    })
    square.style.border = "1px solid black";
    grid.appendChild(square);
  }
}

createBoard();