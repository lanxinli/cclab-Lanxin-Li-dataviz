let data;

function preload() {
  data = loadJSON("pose.json");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data.bodypoints);
}

function draw() {
  background(205, 183, 181);
  translate(width/2, height/2);
  for (let a = 0; a < 10; a ++) {
    drawSkeleton();
    rotate(PI/5);
  }
}
  function drawSkeleton(){
  noStroke();
  for (let i = 0; i < data.bodypoints.length; i++){
    fill (193, 205, 193);
    circle(data.bodypoints[i].x, data.bodypoints[i].y, 30);
    stroke(238, 224, 229);
    strokeWeight(10);
  }
  noFill();
  beginShape();
  vertex(data.bodypoints[0].x, data.bodypoints[0].y);
  vertex(data.bodypoints[1].x, data.bodypoints[1].y);
  vertex(data.bodypoints[3].x, data.bodypoints[3].y);
  vertex(data.bodypoints[5].x, data.bodypoints[5].y);
  vertex(data.bodypoints[7].x, data.bodypoints[7].y);
  vertex(data.bodypoints[9].x, data.bodypoints[9].y);
  endShape();
  beginShape();
  vertex(data.bodypoints[5].x, data.bodypoints[5].y);
  vertex(data.bodypoints[11].x, data.bodypoints[11].y);
  vertex(data.bodypoints[13].x, data.bodypoints[13].y);
  vertex(data.bodypoints[15].x, data.bodypoints[15].y);
  endShape();
  beginShape();
  vertex(data.bodypoints[2].x, data.bodypoints[2].y);
  vertex(data.bodypoints[4].x, data.bodypoints[4].y);
  vertex(data.bodypoints[6].x, data.bodypoints[6].y);
  vertex(data.bodypoints[8].x, data.bodypoints[8].y);
  vertex(data.bodypoints[10].x, data.bodypoints[10].y);
  endShape();
  beginShape();
  vertex(data.bodypoints[6].x, data.bodypoints[6].y);
  vertex(data.bodypoints[12].x, data.bodypoints[12].y);
  vertex(data.bodypoints[14].x, data.bodypoints[14].y);
  vertex(data.bodypoints[16].x, data.bodypoints[16].y);
  endShape();
  beginShape();
  vertex(data.bodypoints[5].x, data.bodypoints[5].y);
  vertex(data.bodypoints[6].x, data.bodypoints[6].y);
  endShape();
  beginShape();
  vertex(data.bodypoints[11].x, data.bodypoints[11].y);
  vertex(data.bodypoints[12].x, data.bodypoints[12].y);
  endShape();
}


