// create chess board
const DIM = 8;

function initBoard() {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i][j] = 0;
    }
  }

  return board;
}

function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    console.log("---------------------------------");
    console.log(
      `| ${board[i][0]} | ${board[i][1]} | ${board[i][2]} | ${board[i][3]} | ${board[i][4]} | ${board[i][5]} | ${board[i][6]} | ${board[i][7]} |`
    );
  }
  console.log("---------------------------------");
}

function getAvailableMoves(pos) {
  //pos = [i, j] (row, col)
  //traverse in L shape
  const dirs = [
    [-1, -2], // 2 left 1 up
    [1, -2], // 2 left 1 down
    [-1, 2], // 2 right 1 up
    [1, 2], // 2 right 1 down
    [-2, 1], // 2 up 1 right
    [-2, -1], // 2 up 1 left
    [2, 1], // 2 down 1 right
    [2, -1], // 2 down 1 left
  ];

  const moves = [];

  dirs.forEach((dir, ind) => {
    let i = pos[0] + dir[0];
    let j = pos[1] + dir[1];

    if (i >= 0 && i < DIM && j >= 0 && j < DIM) {
      moves.push([i, j]);
    }
  });

  return moves;
}

function knightMoves(start, end) {
  // bfs traversal for knight
  // assumes fully connected graph

  const queue = [];
  let path = [];
  const visited = new Set();

  queue.push([start]);

  while (queue.length > 0) {
    path = queue.shift();
    curr = path[path.length - 1];

    visited.add(curr.toString());

    if (curr[0] == end[0] && curr[1] == end[1]) {
      return path;
    }

    let moves = getAvailableMoves(curr);

    moves.forEach((pos, ind) => {
      if (!visited.has(pos.toString())) {
        let newpath = [...path];
        newpath.push(pos);
        queue.push(newpath);
      }
    });
  }

  return [];
}
