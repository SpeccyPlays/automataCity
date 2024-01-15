class FlowGrid {
    constructor(width, height, cellSize){
        this.cellSize = cellSize;
        this.cols = ceil(width/ cellSize);
        this.rows = ceil(height / cellSize);
        //this.grid = [this.cols[this.rows]];
        this.grid = [this.cols]
        for (let x = 0; x < this.cols; x++){
            this.grid[x] = [];
            for (let y = 0; y < this.rows; y++){
                this.grid[x][y] = p5.Vector.random2D();
            }
        }
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
                  let w = width / this.cols;
                  let h = height / this.rows;
                  let v = this.grid[i][j].copy();
                  v.setMag(w * 0.5);
                  let x = i * w + w / 2;
                  let y = j * h + h / 2;
                  line(x, y, x + v.x, y + v.y);
                }
            }
        }
    }//end draw
    updateCell(position, angleInRads){
        let col = floor(position.x / this.cellSize);
        let row = floor(position.y / this.cellSize);
        if ((col >= 0 && col < this.cols) && (row >= 0 && row < this.rows)){
            this.grid[col][row] = p5.Vector.fromAngle(angleInRads);
        }

    }//end update cell
}