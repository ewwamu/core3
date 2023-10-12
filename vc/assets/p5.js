let imgs = []
let img;

function preload() {
  let img1 = loadImage('./assets/img/vc.jpg');
  let img2 = loadImage('./assets/img/vc2.jpg');
  let img3 = loadImage('./assets/img/vc3.jpg');
  let img4 = loadImage('./assets/img/vc4.jpg');
  let img5 = loadImage('./assets/img/vc5.jpg');

imgs = [img1,img2,img3,img4,img5];
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