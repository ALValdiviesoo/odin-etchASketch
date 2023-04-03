let color = "black";

function createBoard(size) {
  const grid = document.querySelector('.grid');
  let squares = grid.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.border = "1px solid black";
    grid.appendChild(square);
  }
}

function resetBoard() {
  const grid = document.querySelector('.grid');
  let squares = grid.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = "white");
}

function changeColor(choice) {
  color = choice;
}

function colorSquare() {
  if(color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeGrid(size) {
  if(size >= 2 && size <= 100) {
    createBoard(size);
  } else {
    alert("INVALID SIZE");
  }
}

createBoard(16);
