let cars = [];
const numOfCars = 100;
var w = 600;
var h = 600;
function setup() {
    createCanvas(w, h);
    for (var i = 0; i < numOfCars; i++){
      cars[i] = new Vehicle(width, height);
    }
  }
  function draw() {
    background(0);
    let mousePos = createVector(mouseX, mouseY);
    for (var i = 0; i < cars.length; i++){
      cars[i].seek(mousePos);
      cars[i].update();
      cars[i].show();
    }
    
  }

  /*
  Class declarations
  */
  class Vehicle {
    constructor(width, height) {
      this.position = createVector(random(0, width), random(0, height));
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.r = 6.0;
      this.maxforce = 8;
      this.maxspeed = random(5, 10);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    applyForce(force) {
      this.acceleration.add(force);
    }
    seek(target) {
      let desired = p5.Vector.sub(target, this.position);
      desired.setMag(this.maxspeed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
    show() {
      let angle = this.velocity.heading();
      fill(127);
      stroke(0);
      push();
      translate(this.position.x, this.position.y);
      rotate(angle);
      beginShape();
      vertex(this.r * 2, 0);
      vertex(-this.r * 2, -this.r);
      vertex(-this.r * 2, this.r);
      endShape(CLOSE);
      pop();
    }
  }