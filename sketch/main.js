let angle = 0;
let w = 24;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  rectMode(CENTER);

  let offset = 0;

  for (let i = 0; i < width; i += 24) {
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 100);
    fill(255);
    rect(i - width / 2, 0, w, h);

    offset += 0.134;
  }

  angle += 0.1;
}
