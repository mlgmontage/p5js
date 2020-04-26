let height_slider;
let width_slider;
let divElem;
let colorPicker;
let rect_width = 30;
let rect_height = 30;

function setup() {
  createCanvas(300, 400);
  colorPicker = createColorPicker("#000000");

  divElem = createDiv("-");
  width_slider = createSlider(0, width, 50);

  height_slider = createSlider(0, height, 50);
}

function draw() {
  background(255);

  rect(10, 10, width_slider.value(), height_slider.value());
  fill(colorPicker.color());
  noStroke();
}
