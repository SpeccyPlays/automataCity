class FlowGrid {
    //due to the way the x/y axis are orientated, a class variable is required to make sure images
    //are turned to match
    static imgRotateAngle = 1.5708; //90 degrees in radians

    constructor(width, height, cellSize){
        this.width = width;
        this.height =height;
        this.cellSize = cellSize;
        this.cols = ceil(width/ cellSize);
        this.rows = ceil(height / cellSize);
        //this.grid = [this.cols[this.rows]];
        this.grid = [this.cols]
        for (let x = 0; x < this.cols; x++){
            this.grid[x] = [];
            for (let y = 0; y < this.rows; y++){
                this.grid[x][y] = p5.Vector.fromAngle(0);
            }
        }
        this.arrow = loadImage('./images/arrow.png');
    } //end constructor
    lookup(position){
        let col = floor(position.x / this.cellSize);
        let row = floor(position.y / this.cellSize);
        return this.grid[col][row].copy();
    }
    draw() {
        if (debug){
            stroke(0);
            noFill();
            strokeWeight(1);
            //draw the flow direction
            for (let i = 0; i < this.cols; i++) {
                for (let j = 0; j < this.rows; j++) {
                    push(); // Save the current transformation state
                    translate(i * this.cellSize + this.cellSize / 2, j * this.cellSize + this.cellSize / 2);
                    rotate(this.grid[i][j].heading() + FlowGrid.imgRotateAngle);
                    imageMode(CENTER);
                    image(this.arrow, 0, 0);
                    pop(); // Restore the previous transformation state
                }
            }
            for (let col = 0; col < this.width; col += this.cellSize){
                line(col, 0, col, this.height);
            }
            for (let row = 0; row < this.height; row += this.cellSize){
                line(0, row, this.width, row)
            }
        }
    }//end draw
    updateCell(position, angleInRads){
        let col = floor(position.x / this.cellSize);
        let row = floor(position.y / this.cellSize);
        if ((col >= 0 && col < this.cols) && (row >= 0 && row < this.rows)){
            this.grid[col][row] = p5.Vector.fromAngle(angleInRads);
            push(); // Save the current transformation state
            translate(col * this.cellSize + this.cellSize / 2, row * this.cellSize + this.cellSize / 2);
            rotate(this.grid[col][row].heading() + FlowGrid.imgRotateAngle);
            imageMode(CENTER);
            image(this.arrow, 0, 0);
            pop(); // Restore the previous transformation state
        }

    }//end update cell
}