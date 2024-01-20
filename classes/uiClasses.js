class UiMenu {
    constructor(width, startHeight){
        this.menuItemGap = 30;
        let gap = this.menuItemGap;
        this.width = width + 50;
        this.arrow = loadImage('./images/arrow.png');
        gap += this.menuItemGap;
        this.angleSlider = createSlider(0, 315, 0, 45);
        this.angleSlider.position(this.width, startHeight + gap)
        this.flowAngle = this.angleSlider.value() * PI /180;
        gap += this.menuItemGap;
        this.debugButton = createCheckbox('Debug mode off');
        this.debugButton.position(this.width, startHeight + gap);
    }
    update(){
        this.flowAngle = this.angleSlider.value() * PI /180;
        push(); // Save the current transformation state
        translate((width - this.width) / 2 + this.width , this.menuItemGap + 60);
        rotate(this.flowAngle + 1.5708); //this adds 90 so image is correctly rotated according to the slider
        imageMode(CENTER);
        image(this.arrow, 0, 0);
        pop(); // Restore the previous transformation state*/
        debug = !this.debugButton.checked();
    }
}