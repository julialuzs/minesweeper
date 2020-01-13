class Cell {
    constructor(x, y, w) {
        this.mine = true;
        this.revealed = false;
        this.x = x;
        this.y = y;
        this.w = w;
    }

}

Cell.prototype.show = function () {
    rect(this.x, this.y, this.w, this.w);
}