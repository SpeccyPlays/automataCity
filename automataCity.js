let vehicles = [];
const numOfCars = 20;
let debug = true;
var w = innerWidth * 0.85;
var h = innerHeight * 0.85;
let menu;
let grid;
let saveButton;

function setup() {
    createCanvas(innerWidth - 20, innerHeight - 20);//-20 to stop scrollbars
    menu = new UiMenu(w, 20);
    grid = new FlowGrid(w, h, 32);
    for (var i = 0; i < numOfCars; i++){
      let hh = random(0, h);
      let ww = random(0, w);
      if (i % 2 == 0){
        vehicles.push(new Truck(ww, hh));
      }
      else {
        vehicles.push(new Car(ww, hh));
      }  
    }
    saveButton = createButton('Save flow map');
    saveButton.position(w + 50,  20);
    saveButton.mousePressed(() => {
      saveFlowMap();
    });
  }
  function draw() {
    background(255);
    menu.update();
    grid.draw();
    for (let vehicle of vehicles){
      //vehicle.wander();
      vehicle.follow(grid);
      vehicle.seperate(vehicles);
      vehicle.run();
    }

  }
  function mousePressed() {
    cellFlowUpdate();
  }
  function mouseDragged(){
    cellFlowUpdate();
  }
  function cellFlowUpdate(){
    let mousePos = createVector(mouseX, mouseY);
    grid.updateCell(mousePos, menu.flowAngle);
  }
  function saveFlowMap(){
    try {
      let jsonGrid = JSON.stringify(grid.grid);
      saveJSON(jsonGrid, 'flowmap.json');
    }
    catch(e){
      console.log(e);
    }
  }
