import p5 from "p5";

t = 0
tf=true

let previewStart
preload=_=>{
  sh = loadShader('shader/shader.vert', 'shader/shader.frag')
}

windowResized=_=>{
  resizeCanvas(w=windowWidth,h=windowHeight)
}

addBall=(x,y,s)=>{
  // balls.push(matter.makeBall(random(0,width),height/2,200))
  balls.push(matter.makeBall(x,y,s))
  balls.slice(-1)[0].hue=random()
}

draw = _ => {
  if(!t++){
    createCanvas(w=windowWidth,h=windowHeight,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    shTex= createGraphics(256,256,WEBGL)
    shTex.noStroke()
    blendMode(SCREEN)

    matter.init()
    matter.invertedGravity()
    rectMode(CENTER)
    balls = []
    barriers=[]

    // for(i=0;i<30;i++){
    //   addBall(10)
    // }
    S=76
    for(x=0;x<width;x+=S){
      for(y=0;y<height;y+=S){
        addBall(x,y,S-40+random(80))
      }
    }
    // setInterval(addBall,30)

    barrier = matter.makeBarrier(width/2, 0, width, 50, {
      angle: 0
    });
    barriers.push(barrier);
    barrier = matter.makeBarrier(width/2, height, width, 50, {
      angle: 0
    });
    barriers.push(barrier);
    barrier = matter.makeBarrier(0, height/2, height, 50, {
      angle: PI/2
    });
    barriers.push(barrier);
    barrier = matter.makeBarrier(width, height/2, height, 50, {
      angle: PI/2
    });
    barriers.push(barrier);
  }


  // clear()
  background(0)
  translate(-width/2,-height/2)
  // stroke(0);
  // strokeWeight(5);
  // line(0, 0, width, 0);
  // line(0, height, width, height);
  // line(0, 0, 0, height);

  // gl.disable(gl.DEPTH_TEST);

  shTex.shader(sh)
  sh.setUniform('t',0)
  sh.setUniform('r', [shTex.width,shTex.height])
  sh.setUniform('param',200)
  sh.setUniform('hue',0)
  shTex.quad(-1,-1,1,-1,1,1,-1,1)
  texture(shTex)
  noStroke()
  // stroke(255,0,0)

  // drawingContext.shadowBlur=2
  // drawingContext.shadowColor='blue'

  // fill(50,0,0)

  for (var j = balls.length - 1; j >= 0; j--) {
    var ball = balls[j];
    sh.setUniform('hue',ball.hue)
    shTex.quad(-1,-1,1,-1,1,1,-1,1)
    push()
    size=2.5
    scale(size,size)
    translate(-ball.getX()/1.5,-ball.getY()/1.5)
    // translate(ball.getX(),ball.getY())
    ball.show();
    pop()
    if (ball.isOffCanvas()) {
      matter.forget(ball);
    }
  }

  // for (var i = 0; i < barriers.length; i++) {
  //   barriers[i].show();
  // }

}

// keyPressed=_=>{
//   save()
// }

// mouseClicked=_=>{
//   tf=!tf
// }

function mouseDragged(){
  matter.changeGravity((mouseX-pmouseX)/20,(mouseY-pmouseY)/20)
}

// function mousePressed() {
//   previewStart = createVector(mouseX, mouseY);
// }
//
// function mouseReleased() {
//   var x = (previewStart.x + mouseX) / 2;
//   var y = (previewStart.y + mouseY) / 2;
//   var length = dist(previewStart.x, previewStart.y, mouseX, mouseY);
//   var theta = atan2(mouseY - previewStart.y, mouseX - previewStart.x);
//   var barrier = matter.makeBarrier(x, y, length, 10, {
//     angle: theta
//   });
//   barriers.push(barrier);
// }
