t=0

drawObj=(l,d,d2,r)=>{
  push()
  rotateZ(PI/2)
  tm=10*sin(t/150)
  for(let i=0;i<r;i++){
    beginShape()
    vertex(l*c(TAU/r*i),d,l*s(TAU/r*i),0,0+tm)
    vertex(l*c(TAU/r*(i+1)),d,l*s(TAU/r*(i+1)),IW,tm)
    vertex(l*c(TAU/r*(i+1)),-d,l*s(TAU/r*(i+1)),IW,IH+tm)
    vertex(l*c(TAU/r*i),-d,l*s(TAU/r*i),0,IH+tm)
    endShape(CLOSE)

    for(let j=0;j<2;j++){
      j2=j*2-1
      beginShape()
      vertex(l*c(TAU/r*i),j2*d,l*s(TAU/r*i),tm,0)
      vertex(l*c(TAU/r*(i+1)),j2*d,l*s(TAU/r*(i+1)),IW+tm,0)
      vertex(0,j2*(d+d2),0,0,IH)
      endShape(CLOSE)
    }
  }
  pop()
}

draw=_=>{
  if(!t++){
    createCanvas(w=windowWidth,h=windowHeight,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');
    c=cos
    s=sin
    // constant parameter (not use)
    // R=6
    // L=30
    // S=100
    // S2=150

    img=[]
    for(i=0;i<36;i++){
      img[i]=createImage(IW=256,IH=256)
      colorMode(HSB)
      xoff=random()
      yoff=random()
      img[i].loadPixels()
      for(y=0;y<IH;y++){
        ay = y/IH * 2 -1
        for(x=0;x<IW;x++){
          ax = x/IW * 2 -1
          b=(pow(ax,8)+pow(ay,8))*100
          n = noise(ax*2+xoff,ay*2+yoff)*10

          // color test
          // img[i].set(x,y,color(i*10,min(b,100)-20,120-min(b,100)))
          // img[i].set(x,y,color(i*10,110-min(b,100),min(b,100)+10))
          // img[i].set(x,y,color(i*10,110-min(b,100),min(b,100)+n))
          img[i].set(x,y,color(i*10,300-b*4,b+n*2))
        }
      }
      img[i].updatePixels()
    }

    img2=[]
    for(i=0;i<36;i++){
      img2[i]=createImage(IW=256,IH=256)
      colorMode(HSB)
      img2[i].loadPixels()
      for(y=0;y<IH;y++){
        ay = y/IH * 2 -1
        for(x=0;x<IW;x++){
          ax = x/IW * 2 -1
          b=(pow(ax,8)+pow(ay,8))*100
          n = noise(ax*2+xoff,ay*2+yoff)*10

          img2[i].set(x,y,color(i*10,60,b/2+n*2))
        }
      }
      img2[i].updatePixels()
    }
    seed = Math.floor(random(100))

    reGenerateButton=createButton('Regenerate')
    reGenerateButton.position(19,19)
    reGenerateButton.mousePressed(()=>{
      seed = Math.floor(random(100))
    })

    colorSlider = createSlider(0,36,18)
    colorSlider.position(19,50)
  }
  randomSeed(seed)

  orbitControl()
  push()
  // rotateY(-mouseX/200+t/200)
  
  background(0)

  blendMode(EXCLUSION)

  scale(1,1,1.5)
  translate(0,h/5.5)

  gl.disable(gl.DEPTH_TEST);
  rotateX(-PI/2)
  for(let i=0;i<7;i++){
    push()
    for(let j=0;j<2;j++){
      push()
      rotateZ(TAU/15*j*random())
      rotateY(PI/6*i+random()*0.)
      rotateY(PI/12*j)
      shearX((random()*2-1)*PI/3)
      rnd = random(200)
      translate((150+rnd)*(1+j),0)
      tr = Math.floor(random(0,12)+colorSlider.value())%36
      texture(img[tr])
      blendMode(EXCLUSION)
      l=60+(3.5-abs(i-3))*10
      d=(50+(3.5-abs(i-3))*20)*(1+j/2)
      d2=150-j*50+(3.5-abs(i-3))*30
      r=6
      drawObj(l,d,d2,r)
      blendMode(SCREEN)
      texture(img2[tr])
      drawObj(l,d,d2,r)

      pop()
    }
    pop()
  }
  pop()
  gl.enable(gl.DEPTH_TEST);
}

keyPressed=_=>{
  if(key=='s'){
    save('image.png')
  }
}
