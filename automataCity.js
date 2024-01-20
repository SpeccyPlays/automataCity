let vehicles = [];
const numOfCars = 20;
let debug = true;
var w = innerWidth * 0.85;
var h = innerHeight * 0.85;
let menu;
let grid;
let loadButton;
let saveButton;
let loadedFile;

function setup() {
    createCanvas(innerWidth - 20, innerHeight - 20);//-20 to stop scrollbars
    menu = new UiMenu(w, 60);
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
    loadButton = createFileInput(handleFileLoad);
    loadButton.position(w + 50,  20);
    saveButton = createButton('Save flow map');
    saveButton.position(w + 50,  50);
    saveButton.mousePressed(() => {
        saveFlowMap();
    });
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
    cellFlowUpdate();
  }
  function mouseDragged(){
    cellFlowUpdate();
  }
  function cellFlowUpdate(){
    let mousePos = createVector(mouseX, mouseY);
    grid.updateCell(mousePos, menu.flowAngle);
  }
  function handleFileLoad(file){
    if (file){
      try {
        
        grid.grid = loadJSON(file.data);
      }
      catch(e){ 
        console.log('Error loading file' + e);
      }
    }
  }
  function saveFlowMap(){
    try {
      let saveFile = grid.grid;
      save(saveFile, 'flowmap.txt');
    }
    catch(e){
      console.log('Error saving file' +   e);
    }
  }

