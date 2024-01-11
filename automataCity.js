let vehicles = [];
const numOfCars = 10;
let debug = true;
var w = innerWidth - 20;
var h = innerHeight - 20;

function setup() {
    createCanvas(w, h);
    for (var i = 0; i < numOfCars; i++){
      if (i % 2 == 0){
        vehicles[i] = new Truck(width, height);
      }
      else {
        vehicles[i] = new Car(width, height);
      }
      
    }
  }
  function draw() {
    background(255);
    for (var i = 0; i < vehicles.length; i++){
      vehicles[i].wander();
      vehicles[i].run();
    }
  }
  function mousePressed() {
      debug = !debug;
  }

  