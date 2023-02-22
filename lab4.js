function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawTriangle(30, 70, 50, 20, 80, 70, 100, 200, 40);
  drawEllipse(300, 50, 50, 50, 300, 50, 20);
  drawHeart(100, 100, 200, 150, 300, 100, 200, 100, 140, 60, 100);
  drawSprite("purple",300, 300, 50, 275, 250, 50,"white", 300, 300, 20);
}
function drawTriangle(
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  redchannel,
  greenchannel,
  bluechannel
) {
  fill(redchannel, greenchannel, bluechannel);
  triangle(x1, y1, x2, y2, x3, y3, redchannel, greenchannel, bluechannel);
}
function drawEllipse(
  x,
  y,
  ellipseWidth,
  ellipseHeight,
  redchannel,
  greenchannel,
  bluechannel
) {
  fill(redchannel, greenchannel, bluechannel);
  ellipse(
    x,
    y,
    ellipseWidth,
    ellipseHeight,
    redchannel,
    greenchannel,
    bluechannel
  );
}
function drawHeart(
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  x4,
  y4,
  redchannel,
  greenchannel,
  bluechannel
) {
  fill(redchannel, greenchannel, bluechannel);
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2), vertex(x3, y3);
  vertex(x4, y4);
  endShape(CLOSE);
}
function drawSprite(
  color1,
  ellipseX,
  ellipseY,
  ellipseSize,
  rectX,
  rectY,
  rectSize,
   color2,
  ellipseX2,
  ellipseY2,
  ellipseSize2) 

 { if (mouseIsPressed){
   fill(color1);
  ellipse(ellipseX, ellipseY, ellipseSize);
  rect(rectX, rectY, rectSize);
  fill(color2);
  ellipse(ellipseX2, ellipseY2, ellipseSize2);}
  else{
    ellipse(ellipseX+10,ellipseY+10,ellipseSize+10);
    rect(rectX+10, rectY+10, rectSize+10);
    fill(color2);
    ellipse(ellipseX2+10, ellipseY2+10, ellipseSize2+10);
  }
}
