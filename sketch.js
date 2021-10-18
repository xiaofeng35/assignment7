let thermos
let spacing = 100;
let distances =[]

function preload() {
  thermos = loadModel('thermos.obj', true);
}




function setup() {
  createCanvas(800, 800,WEBGL);
}

function draw() {
  background(0);
  angleMode(DEGREES)
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 5000);
  //
  //
  //
  // fill(255);
  // rect(50,50,50,50);
  // ellipse(0,0,20);
  // sphere(40);
  //
  //
  // push();
  // translate(300,0);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // rotateZ(frameCount * 0.01);
  // box(60);
  // pop();

  normalMaterial();

    // let locX = mouseX - width /3;
    // let locY = mouseY - height / 3;
    // // to set the light position,
    // // think of the world's coordinate as:
    // // -width/2,-height/2 -------- width/2,-height/2
    // //                |            |
    // //                |     0,0    |
    // //                |            |
    // // -width/2,height/2--------width/2,height/2
    // pointLight(250, 250, 250, locX, locY, 50);
    //
    // ambientMaterial(70, 130, 230);
rotateX(frameCount*0.2)
rotateY(frameCount*0.3)

for ( x=0; x <= width ; x += spacing) {
  distances[x]=[];
  for ( y=0; y <= height ; y += spacing) {
      distances[x][y]= dist(x,y,mouseX,mouseY);
  push();
  translate(-400 + x,-400+ y)
  noStroke();
  scale(0.7);

  rotateX(frameCount*distances[x][y] * 0.0002);
  rotateY(frameCount*distances[x][y] * 0.0001);
  rotateZ(frameCount * 0.01*y/4);
  model(thermos);
  pop();
}
}




}
