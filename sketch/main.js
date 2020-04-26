function setup() {
  createCanvas(500, 400);
}

let a = 0;

function draw() {
  background(255);
  let h = map(sin(a), -1, 1, 0, 255);
  a += 0.05;

  rect(0, 0, h, h);
  fill(color(h, 0, 0)); // red

  rect(0, height, h, -h);
  fill(color(0, h, 0)); // green

  rect(width, 0, -h, h);
  fill(color(0, 0, h)); // blue

  rect(width, height, -h, -h);
  fill(color(h, h, h)); // white

  noStroke();
}
