let board;
function setup() {
  createCanvas(800, 800);
  board = initBoard();
  board[3][3] = 1;
}

function draw() {
  background(200);
  drawGrid();
  drawBoard(board);
}

function drawBoard(board) {
  const DIM = board.length;
  let w = width / DIM;
  let h = height / DIM;

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      if (board[i][j] == 1) {
        fill(0);
        // stroke(0);
        // strokeWeight(10);
        // circle(j * w, i * h, 60);
        circle(j * w + w / 2, i * h + h / 2, 60);
      }
    }
  }
}

function drawGrid() {
  const DIM = board.length;
  let w = width / DIM;
  let h = height / DIM;

  for (let i = 0; i < DIM; i++) {
    for (let j = 0; j < DIM; j++) {
      if ((i + j) % 2 == 0) {
        fill(150);
      } else {
        fill(255);
      }
      rect(j * w, i * h, w, h);
      noStroke();
    }
  }
}
