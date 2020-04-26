let data = [];

for (let i = 0; i < 50; i++) {
  data.push(parseInt(Math.random() * 400) + 100);
}

setInterval(function () {
  shuffle(data, true);
}, 800);

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  for (let i = 0; i < 50; i++) {
    rect(10 * (i + 1), height - data[i], 10, data[i]);
    fill(0);
  }

  noStroke();
  fill(255);
}
