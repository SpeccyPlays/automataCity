let vehicles = [];
const numOfCars = 20;
let debug = true;
var w = innerWidth * 0.85;
var h = innerHeight * 0.85;
let menu;

function setup() {
    createCanvas(w, h);
    menu = new UiMenu(w);
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
      vehicle.wander();
      vehicle.seperate(vehicles);
      vehicle.run();
    }
    menu.update();
  }
  /*function mousePressed() {
      debug = !debug;
  }*/

  