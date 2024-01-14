class BoxInfo {
    //contains info for each box in a grid
    constructor(){
        this.angle = 0;
    }
    
}//end box info

class CanvasGrid {
    constructor(width, height, boxSize){
        this.canvasWidth = width;
        this.Canvasheight = height;
        this.boxSize = boxSize;
        this.cols = height / boxSize;
        this.rows = width / boxSize;
        this.grid = [this.rows[this.cols]];
        for (let x = 0; x < this.rows; x++){
            for (let y = 0; y < this.cols; y++){
                this.grid[x[y]] = new BoxInfo();
            }
        }
    } //end constructor
    draw() {
        if (debug){
            stroke(0);
            noFill();
            strokeWeight(1);
            for (let x = 0; x < this.canvasWidth; x += this.boxSize){
                line(x, 0, x, this.Canvasheight);
            }
            for (let y = 0; y < this.Canvasheight; y += this.boxSize){
                line(0, y, this.canvasWidth, y);
            }
        }
    }//end draw
}