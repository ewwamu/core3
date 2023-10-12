let imgs = []
let img;

function preload() {
  let img1 = loadImage('assets/img/stoop.jpg');
  let img2 = loadImage('assets/img/stoop2.jpg');
  let img3 = loadImage('assets/img/stoop3.jpg');
  let img4 = loadImage('assets/img/stoop4.jpg');

imgs = [img1,img2,img3,img4];
}

//let img;
var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background("#f1f1f1");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  //c.position(0, 0);
  //canvas.parent('article');
}

function mouseClicked(){
  image(random(imgs), mouseX, mouseY);
  }