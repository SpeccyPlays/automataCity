class UiMenu {
    constructor(width){
        let menuItemGap = 30;
        let gap = menuItemGap;
        this.width = width + 50;
        this.debugButton = createCheckbox('Debug mode off');
        this.debugButton.position(this.width, gap);
        gap += menuItemGap;
        this.sliderLabel = createDiv('Angle : ');
        this.sliderLabel.position(this.width, gap);
        gap += menuItemGap;

        this.angleSlider = createSlider(0, 315, 180, 45);
        this.angleSlider.position(this.width, gap)
        this.flowAngle = this.angleSlider.value() * PI /180;
        gap += menuItemGap;
        this.addCar = createButton('Add car');
        this.addCar.position(this.width,gap);
        gap += menuItemGap;
        this.addTruck = createButton('Add truck')
        this.addTruck.position(this.width,gap);

    }
    update(){
        this.flowAngle = this.angleSlider.value() * PI /180;
        this.sliderLabel.html('Angle : ' + this.angleSlider.value() + '°');
        if (this.debugButton.checked()){
            debug = false;
        } else {
            debug = true;
        };
    }
}