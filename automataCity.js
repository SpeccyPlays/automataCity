let car;
function setup() {
    var w = 600;
    var h = 600;
    createCanvas(w, h);
    car = new Vehicle(w/2, h/2);
  }
  class Vehicle {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.r = 6.0;
      this.maxforce = 8;
      this.maxspeed = 5;
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
  
  function draw() {
    background(0);
    let mousePos = createVector(mouseX, mouseY);
    car.seek(mousePos);
    car.update();
    car.show();
  }