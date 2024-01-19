class UiMenu {
    constructor(width, startHeight){
        this.menuItemGap = 30;
        let gap = this.menuItemGap;
        this.width = width + 50;
        this.arrow = createImg('./images/arrow.png', 'flowAngle');
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
        this.arrow.position(this.width, this.menuItemGap);
        push(); // Save the current transformation state
        translate(this.width, this.menuItemGap + 25);
        rotate(this.flowAngle + 1.5708); //this adds 90 so image is correctly rotated according to the slider
        imageMode(CENTER);
        image(this.arrow, 0, 0);
        pop(); // Restore the previous transformation state*/
        debug = !this.debugButton.checked();
    }
}