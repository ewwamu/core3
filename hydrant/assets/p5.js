let imgs = []
let img;

function preload() {
  let img1 = loadImage('assets/img/h1.png');
  let img2 = loadImage('assets/img/h2.png');
  let img3 = loadImage('assets/img/h3.png');
  let img4 = loadImage('assets/img/h4.png');
  let img5 = loadImage('assets/img/h5.png');
  let img6 = loadImage('assets/img/h6.png');

imgs = [img1,img2,img3,img4,img5,img6];
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