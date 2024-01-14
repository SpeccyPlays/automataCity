class FlowGrid {
    constructor(width, height, cellSize){
        this.canvasWidth = width;
        this.Canvasheight = height;
        this.cellSize = cellSize;
        this.cols = height / cellSize;
        this.rows = width / cellSize;
        this.grid = [this.rows[this.cols]];
        for (let x = 0; x < this.rows; x++){
            for (let y = 0; y < this.cols; y++){
                this.grid[x[y]] = createVector(1, 1);
            }
        }
    } //end constructor
    lookup(position){
        let col = position.x / this.cellSize;
        let row = position.y / this.cellSize;
        return this.grid[col[row]].copy();
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
                  let v = this.grid[i[j]].copy();
                  v.setMag(w * 0.5);
                  let x = i * w + w / 2;
                  let y = j * h + h / 2;
                  line(x, y, x + v.x, y + v.y);
                }
            }
        }
    }//end draw
}