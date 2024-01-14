let vehicles = [];
const numOfCars = 20;
let debug = true;
var w = innerWidth * 0.85;
var h = innerHeight * 0.85;
let menu;
let grid;

function setup() {
    createCanvas(w, h);
    menu = new UiMenu(w);
    grid = new FlowGrid(w, h, 32);
    for (var i = 0; i < numOfCars; i++){
      if (i % 2 == 0){
        vehicles.push(new Truck(0, height));
      }
      else {
        vehicles.push(new Car(0, height));
      }  
    }
  }
  function draw() {
    background(255);
    for (let vehicle of vehicles){
      //vehicle.wander();
      vehicle.follow(grid);
      vehicle.seperate(vehicles);
      vehicle.run();
    }
    menu.update();
    grid.draw();
  }
  /*function mousePressed() {
      debug = !debug;
  }*/

  