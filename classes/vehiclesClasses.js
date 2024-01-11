/*
  Class declarations
  */
  class Vehicle {
    /*
    Any extended class should set maxforce and maxspeed in constructor
    */
    constructor(width, height) {
      this.position = createVector(random(0, width), random(0, height));
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.r = 6.0;
      this.maxforce = 8;
      this.maxspeed = random(5, 10);
      this.debugOn = true;
      this.color;
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
      if (this.debugOn){
        stroke(this.color);
        strokeWeight(5);
        line(desired.x, desired.y, this.position.x, this.position.y);
      }
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
  } //end vehicle class
  class Car extends Vehicle {
    constructor(){
      super();
      this.maxforce = 8;
      this.maxspeed = random(5, 10);
      this.color = color(255, 0, 0);
    }
  }//end Car class
  class Truck extends Vehicle {
    constructor(){
      super();
      this.maxforce = 1;
      this.maxspeed = random(3, 5);
      this.color = color(0, 255, 0);
    }
  } //end Truck class