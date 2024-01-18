let vehicles = [];
const numOfCars = 20;
let debug = true;
var w = innerWidth * 0.85;
var h = innerHeight * 0.85;
let menu;
let grid;
//let arrow;

function setup() {
    createCanvas(w, h);
    menu = new UiMenu(w);
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
    let mousePos = createVector(mouseX, mouseY);
    grid.updateCell(mousePos, menu.flowAngle);
  }
  function mouseDragged(){
    let mousePos = createVector(mouseX, mouseY);
    grid.updateCell(mousePos, menu.flowAngle);
  }

  