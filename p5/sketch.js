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

    generateRandomMines();

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



function mouseClicked() {

    var x = floor(mouseX / w);
    var y = floor(mouseY / w);

    if (grid[x][y].isMine) {
        return this.gameOver();
    }

    grid[x][y].reveal();

}

function gameOver() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].isRevealed = true;
        }
    }
}

function generateRandomMines() {
    let options = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            options.push([i, j]);
        }
    }

    for (let n = 0; n < totalMines; n++) {
        const index = floor(random(options.length));
        const choice = options[index];
        const i = choice[0];
        const j = choice[1];
        options.splice(index, 1);
        grid[i][j].isMine = true;
    }
}

function createMatrix(rows, cols) {
    let array = new Array(rows);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(cols);
    }
    return array;
}
