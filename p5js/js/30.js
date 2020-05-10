t=0

rotateStack=[]

myRotateY=(angle) => {
  rotateY(angle)
  rotateStack.push(angle)
}

rotateYReset = _ => {
  rotateStack.forEach((val) => {
    rotateY(-val)
  })
}

myPop = _ => {
  pop()
  rotateStack.pop()
}

generate = _ => {

  img = []
  colorMode(HSB,360,100,100)
  h1 = random(90)+10
  h2 = random(30)+10
  for(i=0;i<2;i++){
    h = h1 + h2 * i
    img[i] = createImage(IW=256,IH=256)
    img[i].loadPixels()
    for(y=0;y<IH;y++){
      ay = y/IH * 2 -1
      for(x=0;x<IW;x++){
        ax = x/IW * 2 -1
        s = 70
        b = 1/abs(ax)*2-10
        img[i].set(x,y,color(h,s,b))
      }
    }
    img[i].updatePixels()
    }
  seed = Math.floor(random(100))
  L = 130+random(60)
  M=8
  W=500
  FA= random(4,8)
}
drawBinaryTree = (i) => {
  if(i<=0){
    return
  }
  push()
  rotateYReset() // maybe doesn't work good
  texture(img[i<M/2 ? 0 : 1])
  let rl = random(20)-10
  rect(-W/2/M*i,-(L/M+rl)*i,W/M*i,(L/M+rl)*i)
  pop()

  for(let j=0;j<3;j++){
    push()
    translate(0,-(L/M+rl)*i,0)
    myRotateY(TAU/3*j+random(TAU/32)*(sin(t/30)/2+.5))
    rotateX(PI/FA+random(TAU/32)*(sin(t/30)/2+.5))
    drawBinaryTree(i-1)
    myPop()

  }
  return
}

draw=_=>{
  if(!t++){
    createCanvas(w=1200,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    generate()

    frameRate(30)
  }
  rotateStack = []
  randomSeed(seed)

  // orbitControl()
  rotateX(-mouseY/500)
  myRotateY(mouseX/200)


  // clear()
  background(0) // for openprocessing

  /* draw axis */
  // colorMode(RGB)
  // strokeWeight(5)
  // stroke(128,0,0)
  // line(0,0,0,1000,0,0)
  // stroke(0,128,0)
  // line(0,0,0,0,1000,0)
  // stroke(0,0,128)
  // line(0,0,0,0,0,1000)


  blendMode(SCREEN)

  translate(0,L*2,0)
  noStroke()
  noFill()

  /* tex example */
  // texture(img[0])
  // rect(0,0,100,100)
  // texture(img[1])
  // rect(100,0,100,100)

  gl.disable(gl.DEPTH_TEST);
  drawBinaryTree(M)
  gl.enable(gl.DEPTH_TEST);
}

keyPressed = _=> {
  if (key ==='z'){
    generate()
  }
}
