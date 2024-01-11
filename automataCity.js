let vehicles = [];
const numOfCars = 50;
var w = 600;
var h = 600;

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
    background(0);
    let mousePos = createVector(mouseX, mouseY);
    for (var i = 0; i < vehicles.length; i++){
      vehicles[i].seek(mousePos);
      vehicles[i].update();
      vehicles[i].show();
    }
    
  }

  