function setup() {
  canvas = createCanvas(1000,500);
  background('yellow');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('yellow');
  ellipse(300,200,100);
  
  // witte rechthoek met rode rand
  
  stroke('red');
  fill('white');
  strokeWeight(10);
  rect(650,100,250,300);
}
