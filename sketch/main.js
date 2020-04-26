let toggle = false;

function mousePressed() {
  print("pressed");
  toggle = true;
}

function mouseReleased() {
  print("released");
  toggle = false;
}

let last_postion = [0, 0];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  if (toggle) {
    last_postion[0] = mouseX;
    last_postion[1] = mouseY;
    translate(last_postion[0], last_postion[1]);
  } else {
    translate(last_postion[0], last_postion[1]);
  }
  rect(10, 10, 40, 50);
  rect(100, 100, 10, 10);
  fill(0);
}
