class UiMenu {
    constructor(width){
        let menuItemGap = 30;
        this.width = width + 50;
        this.debugButton = createCheckbox('Debug mode');
        this.debugButton.position(this.width, menuItemGap);
        this.button1 = createButton('Button 1');
        this.button1.position(this.width,menuItemGap * 2);
        this.button2= createButton('Button 2');
        this.button2.position(this.width,menuItemGap * 3);
    }
    update(){
        if (this.debugButton.checked()){
            debug = true;
        } else {
            debug = false;
        };
    }
}