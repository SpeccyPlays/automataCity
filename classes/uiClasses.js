class UiMenu {
    constructor(width){
        let menuItemGap = 30;
        this.width = width + 50;
        this.debugButton = createCheckbox('Debug mode');
        this.debugButton.position(this.width, menuItemGap);
        this.addCar = createButton('Add car');
        this.addCar.position(this.width,menuItemGap * 2);
        this.addTruck = createButton('Add truck')
        this.addTruck.position(this.width,menuItemGap * 3);
    }
    update(){
        if (this.debugButton.checked()){
            debug = true;
        } else {
            debug = false;
        };
    }
}