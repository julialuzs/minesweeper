// global variables
let grid;
let rows;
let cols;
const w = 20;
const totalMines = 10;

function setup() {
    createCanvas(201, 201);

    rows = floor(width / w);
    cols = floor(height / w);

    grid = createMatrix(rows, cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    let options = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            options.push([i, j]);   
        }
    }

    for (let n = 0; n < totalMines; n++) {
        const index = floor(random(options.length));
        let choice = options[index];
        let i = choice[0];
        let j = choice[1];
        options.splice(index, 1);
        grid[i][j].isMine = true;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].countNeighbors();
        }
    }
}

function draw() {
    background(255);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show();
        }
    }
}

function gameOver() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].isRevealed = true;
        }
    }
}

function mousePressed() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {

                if (grid[i][j].isMine) {
                    return this.gameOver();
                }

                grid[i][j].reveal();
            }
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
