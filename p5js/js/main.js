t=0

drawObj=(l,d,d2,r)=>{
  push()
  rotateZ(PI/2)
  // fill(255)
  for(let i=0;i<r;i++){
    beginShape()
    vertex(l*c(TAU/r*i),d,l*s(TAU/r*i),0,0)
    vertex(l*c(TAU/r*(i+1)),d,l*s(TAU/r*(i+1)),IW,0)
    vertex(l*c(TAU/r*(i+1)),-d,l*s(TAU/r*(i+1)),IW,IH)
    vertex(l*c(TAU/r*i),-d,l*s(TAU/r*i),0,IH)
    endShape(CLOSE)

    for(let j=0;j<2;j++){
      j2=j*2-1
      beginShape()
      vertex(l*c(TAU/r*i),j2*d,l*s(TAU/r*i),0,0)
      vertex(l*c(TAU/r*(i+1)),j2*d,l*s(TAU/r*(i+1)),IW,0)
      vertex(0,j2*(d+d2),0,0,IH)
      endShape(CLOSE)
    }
  }
  pop()
}

draw=_=>{
  if(!t++){
    createCanvas(w=900,w,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');
    c=cos
    s=sin
    R=6
    L=30
    S=100
    S2=150

    img=[]
    for(i=0;i<36;i++){
      img[i]=createImage(IW=256,IH=256)
      colorMode(HSB)
      img[i].loadPixels()
      for(y=0;y<IH;y++){
        ay = y/IH * 2 -1
        for(x=0;x<IW;x++){
          ax = x/IW * 2 -1
          b=(10/(1-abs(ax))+3/(1-abs(ay)))/1
          // img[i].set(x,y,color(i*10,min(b,100)-20,120-min(b,100)))
          img[i].set(x,y,color(i*10,110-min(b,100),min(b,100)+30))
        }
      }
      img[i].updatePixels()
    }
    seed = Math.floor(random(100))
  }
  randomSeed(seed)

  // orbitControl()
  push()
  // blendMode(SUBTRACT)
  // fill(5)
  // rect(-w,-w,w*2,w*2)
  // rotateX(-mouseY/200)
  rotateY(-mouseX/200+t/200)

  clear()
  // background(100,10)
  blendMode(EXCLUSION)

  gl.disable(gl.DEPTH_TEST);
  // rotateY(PI/2)
  // shearX(PI/4)
  // box(300)
  translate(0,w/3.5)
  rotateX(-PI/2)
  for(let i=0;i<1;i++){
    push()
    for(let j=0;j<12;j++){
      push()
      j2=j<3 ? -1 : 1
      rotateZ(TAU/12*j)
      rotateY(PI/8*i+random()*0.3)
      translate((S+S2)*3/3,0)
      texture(img[Math.floor(random(0,36))])
      drawObj(L*1.5,150,50,R)
      // blendMode(SCREEN)
      // drawObj(L*1.5,150,50,R)
      pop()
    }
    pop()
  }
  pop()
  gl.enable(gl.DEPTH_TEST);
}
