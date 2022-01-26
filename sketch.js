let _bgWidth;
let _minWidth;
let fr = 30;

function setup() {
  frameRate(fr);
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes("alpha", false);
  _bgWidth = min(width, height);
  _minWidth = _bgWidth * .9;
  colorMode(HSB, 360, 100, 100, 255);
  noStroke();


}

function draw() {
  setShape();
}

function setShape() {
  background(255);

  let numTile = 10;
  let r = _minWidth / numTile;
  let step = _minWidth / numTile;
  let initH = random(360);
  for (let x = 0; x < numTile; x++) {
    for (let y = 0; y < numTile; y++) {
      let centx = -_minWidth / 2 + step * (x + 0.5);
      let centy = -_minWidth / 2 + step * (y + 0.5);
      let ang = PI / 2 * int(random(4)) / frameCount;
      drawShape(30, centx, centy, ang, frameCount);
    }
  }
}

function drawShape(r, centx, centy, ang, initH) {
  let numCorner = frameCount;
  let h = frameCount * random(360);
  push();
  translate(centx, centy);
  rotate(ang);
  beginShape();
  for (let i = 0; i < numCorner; i++) {
    if (i == 0) { fill(initH, 100, 100); }
    if (i != 0) { fill(h, 100, 100, 0); }
    vertex(r * cos(2 * PI / numCorner * i), r * sin(2 * PI / numCorner * i));
  }
  endShape(CLOSE);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}