class Cell {
    constructor(i, j, width) {
        this.i = i;
        this.j = j;
        
        this.x = i * width; // horizontal
        this.y = j * width; // vertical
        this.width = width;
        
        this.isRevealed = false;
        this.neighborCount = 0;

        this.isMine = false;
    }

}

Cell.prototype.show = function () {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.width, this.width);
    
    if (this.isRevealed) {
        fill(127);
        if (this.isMine) {
            ellipse(this.x + this.width * 0.5, this.y + this.width * 0.5, this.width * 0.5)
        } else {
            rect(this.x, this.y, this.width, this.width);
            textAlign(CENTER);
            if (this.neighborCount > 0) {
                fill(0);
                text(this.neighborCount, this.x + this.width * 0.5, this.y + this.width * 0.8);
            }
        }
    }
}

Cell.prototype.countNeighbors = function () {
    if (this.isMine) {
        this.neighborCount = -1;
        return -1;
    } 

    var neighborCount = 0;

    for (var xOffset = -1; xOffset <= 1; xOffset++) {
        for (var yOffset = -1; yOffset <= 1; yOffset++) {
            var i = this.i + xOffset;
            var j = this.j + yOffset;

            if (i > -1 && i < cols && j > -1 && j < rows) {   
                var neighbor = grid[i][j];
                
                if (neighbor.isMine) neighborCount++;
            }
        }
    }
    this.neighborCount = neighborCount;
}

Cell.prototype.reveal = function () {

    this.isRevealed = true;

    if (this.neighborCount === 0) {
        this.floodFill();
    }
}

Cell.prototype.floodFill = function() {
    
    for (var xOffset = -1; xOffset <= 1; xOffset++) {
        for (var yOffset = -1; yOffset <= 1; yOffset++) {
            var i = this.i + xOffset;
            var j = this.j + yOffset;

            if (i > -1 && i < cols && j > -1 && j < rows) {  

                var neighbor = grid[i][j];
                
                if (!neighbor.isMine && !neighbor.isRevealed) neighbor.reveal();
            }
        }
    }
} 