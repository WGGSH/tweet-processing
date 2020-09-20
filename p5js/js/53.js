import p5 from "p5";


t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,w,WEBGL)

    tex=createGraphics(w,w,WEBGL)
    angleMode(DEGREES)
    tex.angleMode(DEGREES)
  }

  angleX=(w/2-mouseY)
  angleY=(w/2-mouseX)
  angleX2=(angleX+3600)%360
  angleY2=(angleY+3600)%360
  isFrontX=angleX2 <= 90 || angleX2 >= 270
  isFrontY=angleY2 <= 90 || angleY2 >= 270
  xCnt=Math.floor((angleX+90)/360)
  yCnt=Math.floor((angleY+90)/360)
  // angleX=0
  // angleY=t/60

  tex.push()

  // console.log(isFrontY,isFrontX)
  console.log(yCnt,xCnt)

  tex.rotateX(angleX2*(isFrontX*2-1))
  tex.rotateY(angleY2*(isFrontY*2-1))
  tex.clear()
  tex.noFill()
  tex.stroke(255)
  tex.strokeWeight(5)
  tex.translate(0,0,-400*5/2*(isFrontY*2-1)*(isFrontX*2-1))
  tex.rotateY(t)
  tex.rotateZ(t/1.5)
  // tex.scale(1,1,5)
  // tex.box(400)


  switch(isFrontX*2+isFrontY){
    case 0:
      tex.torus(400,200,12+xCnt*3,12+yCnt*3)
      break;
    case 1:
      tex.cylinder(400,400,12+xCnt*3,12+yCnt*3)
      break;
    case 2:
      tex.cone(400,600,12+xCnt*3,12+yCnt*3)
      break;
    case 3:
      tex.sphere(400,12+xCnt*3,12+yCnt*3)
      break;
  }

  tex.pop()

  clear()

  // orbitControl()

  rotateX(angleX)
  rotateY(angleY)

  texture(tex)
  circle(0,0,600)
  fill(0)
  // push()
  // translate(0,0,-1)
  // circle(0,0,600)
  // pop()
  noFill()
  for(i=0;i<128;i++){
    stroke(255-i*2)
    circle(0,0,600+i)
  }
}
