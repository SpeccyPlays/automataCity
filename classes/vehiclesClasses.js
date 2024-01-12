/*
  Class declarations
  */
  class Vehicle {
    /*
    Any extended class should set maxforce and maxspeed in constructor
    */
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// The "Vehicle" class
    constructor(x, y) {
      let xx = random(0, x);
      let yy = random(0, y);
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(0, 0);
      this.position = createVector(xx, yy);
      this.r = 6;
      this.wandertheta = 0.0;
      this.maxspeed = 2;
      this.maxforce = 0.05;
    }

    run() {
      this.update();
      this.borders();
      this.show();
    }

    // Method to update location
    update() {
      // Update velocity
      this.velocity.add(this.acceleration);
      // Limit speed
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      // Reset accelerationelertion to 0 each cycle
      this.acceleration.mult(0);
    }
    seperate(vehicles) {
      let desiredSeparation = this.r * 6;
      //The desired separation is based on the vehicle’s size.
      let sum = createVector();
      let count = 0;
      let wanderD = this.maxspeed * abs(this.velocity.x * this.velocity.y);
      let circlePos = this.velocity.copy();
      circlePos.normalize();
      circlePos.mult(wanderD);
      circlePos.add(this.position);
      if (debug) this.drawSeperationStuff(circlePos);
      for (let other of vehicles) {
        let crash = p5.Vector.dist(circlePos, other.position);
        let d = p5.Vector.dist(this.position, other.position);
        if (this !== other && crash < desiredSeparation){
          this.slowDown(0.90);
          let diff = p5.Vector.sub(this.position, other.position);
          diff.setMag(1 / d);
          sum.add(diff);
          count++;
        }
      }
      if (count > 0) {
        sum.setMag(this.maxspeed);
        let steer = p5.Vector.sub(sum, this.velocity);
        steer.limit(this.maxforce / 2);
        this.applyForce(steer);
      }
    }
    wander() {
      let wanderR = 1;
      let wanderD = 100;
      let change = 0.1;
      this.wandertheta += random(-change, change);

      let circlePos = this.velocity.copy();
      circlePos.normalize();
      circlePos.mult(wanderD);
      circlePos.add(this.position);

      let h = this.velocity.heading();

      let circleOffSet = createVector(
        wanderR * cos(this.wandertheta + h),
        wanderR * sin(this.wandertheta + h)
      );
      let target = p5.Vector.add(circlePos, circleOffSet);
      this.seek(target);

      //Render wandering circle, etc.
      if (debug) this.drawWanderStuff(this.position, circlePos, target, wanderR);
    }

    applyForce(force) {
      // We could add mass here if we want A = F / M
      this.acceleration.add(force);
    }
    slowDown(reduction){
      this.velocity.mult(reduction);
    }
    // A method that calculates and applies a steering force towards a target
    // STEER = DESIRED MINUS VELOCITY
    seek(target) {
      let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target

      // Normalize desired and scale to maximum speed
      desired.normalize();
      desired.mult(this.maxspeed);

      // Steering = Desired minus Velocity
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxforce); // Limit to maximum steering force
      this.applyForce(steer);
    }

    show() {
      // Draw a triangle rotated in the direction of velocity
      let theta = this.velocity.heading() + PI / 2;
      fill(127);
      stroke(0);
      strokeWeight(2);
      push();
      translate(this.position.x, this.position.y);
      rotate(theta);
      beginShape();
      vertex(0, -this.r * 2);
      vertex(-this.r, this.r * 2);
      vertex(this.r, this.r * 2);
      endShape(CLOSE);
      pop();
    }

    // Wraparound
    borders() {
      if (this.position.x < -this.r) this.position.x = width + this.r;
      if (this.position.y < -this.r) this.position.y = height + this.r;
      if (this.position.x > width + this.r) this.position.x = -this.r;
      if (this.position.y > height + this.r) this.position.y = -this.r;
    }

    // A method just to draw the circle associated with wandering
    drawWanderStuff(location, circlePos, target, rad) {
      stroke(0);
      noFill();
      strokeWeight(1);
      circle(circlePos.x, circlePos.y, rad * 2);
      circle(target.x, target.y, 4);
      line(location.x, location.y, circlePos.x, circlePos.y);
      line(circlePos.x, circlePos.y, target.x, target.y);
    }
    drawSeperationStuff(circlePos){
      stroke(0);
      noFill();
      strokeWeight(1);
      circle(circlePos.x, circlePos.y, this.r * 6);
    }
  }//end vehicle class
  class Car extends Vehicle {
    constructor(x, y){
      super(x,y );
      this.maxspeed = 5;
      this.maxforce = 0.09;
      this.r = 3;
    }
  }//end Car class
  class Truck extends Vehicle {
    constructor(x, y){
      super(x, y);
      this.maxspeed = 2;
      this.maxforce = 0.02;
      this.r = 6;
    }
  } //end Truck class