// global variables
let grid;
let rows;
let cols;
const w = 20;

function setup() {
    createCanvas(200, 200);

    rows = floor(width / w);
    cols = floor(height / w);

    grid = createMatrix(rows, cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Cell(i * w, j * w, w);
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }
}

function createMatrix(rows, cols) {
    let array = new Array(rows);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(cols);
    }
    return array;
}

[
    ['', '', 1, 1],
    [1, 1, 2, 'b'],
    [1, 'b', 2, 1],
    [1, 1, 1, ''],
    ['', '', '', '']
]