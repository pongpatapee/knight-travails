let board;
let w;
let h;
let knight;
let goal;
let mode;
let path;
let solveBtn;
let modeBtn;
let resetBtn;

function setup() {
  createCanvas(800, 800);
  board = initBoard();
  w = width / DIM;
  h = height / DIM;
  knight = [0, 0];
  goal = [7, 7];
  path = [];

  mode = 0; // 0: knight, 1: goal

  solveBtn = createButton("solve");
  solveBtn.mousePressed(solve);

  modeBtn = createButton("place goal");
  modeBtn.mousePressed(() => {
    mode = 1;
  });
  resetBtn = createButton("reset");
  resetBtn.mousePressed(() => {
    knight = [0, 0];
    path = [];
    loop();
  });
}

function draw() {
  background(200);
  strokeWeight(0);
  drawGrid();
  drawGoal();
  drawKnight();
  drawPath();
}

function mousePressed() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    if (mode == 0) {
      knight[0] = floor(mouseY / h);
      knight[1] = floor(mouseX / w);
    } else {
      goal[0] = floor(mouseY / h);
      goal[1] = floor(mouseX / w);
      mode = 0;
    }
  }
}

function drawPath() {
  stroke("blue");
  strokeWeight(10);
  for (let i = 0; i < path.length - 1; i++) {
    let x = path[i + 1][1] - path[i][1];
    let y = path[i + 1][0] - path[i][0];
    circle(path[i][1] * w + w / 2, path[i][0] * h + h / 2, 30);
    line(
      path[i][1] * h + h / 2,
      path[i][0] * w + w / 2,
      path[i + 1][1] * h + h / 2,
      path[i + 1][0] * w + w / 2
    );
  }
  // point(path[path.length - 1][1], path[path.length - 1][0]);
}

function drawKnight() {
  fill(0);
  circle(knight[1] * w + w / 2, knight[0] * h + h / 2, 60);
}

function drawGoal() {
  fill("red");
  rect(goal[1] * w, goal[0] * h, w, h);
}

function solve() {
  console.log("Knight Travails!");
  let moves = knightMoves(knight, goal);

  knight = moves[moves.length - 1];
  console.log(`knight is at ${knight}`);

  path = moves;
  noLoop();
  // return moves;
}

function drawGrid() {
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
