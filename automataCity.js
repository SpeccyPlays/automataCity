let vehicles = [];
const numOfCars = 20;
let debug = true;
var w = innerWidth - 20;
var h = innerHeight - 20;

function setup() {
    createCanvas(w, h);
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
  }
  function mousePressed() {
      debug = !debug;
  }

  