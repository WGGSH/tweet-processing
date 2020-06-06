t=0

recursiveDraw=(x,z,w,h,n,c)=>{
  if(n==1){
    // rect(x,y,w,h,n)
    if(w<MINW || h<MINW)return
    push()
    let tall=random(1)+(z/5)
    translate(x+w/2,tall/2,z+h/2)
    scale(w,tall,h)
    texture(img[0])
    box(1)
    pop()

    push()
    translate(x+w/2,(tall+3)/2,z+h/2)
    scale(w,tall+3,h)
    beginShape()
    // rotateY(PI/4)
    // texture(img2)
    // vertex(-.5,.5,-.5,IW/2,-IH/2)
    // vertex(.5,.5,-.5,IW+IW/2,IH/2)
    // vertex(.5,.5,.5,IW/2,IH+IH/2)
    // vertex(-.5,.5,.5,-IW/2,IH/2)
    // endShape(CLOSE)
    pop()
  }

  n--

  if(n>=0){
    if(w>=h){
      let randomW=random(w*.1,w*.9)
      recursiveDraw(x+W, z, randomW-W,h,n,c)
      recursiveDraw(x+randomW+W, z, w-randomW-W,h,n,c)
    }else {
      let randomH = random(h*.1,h*.9)
      recursiveDraw(x,z+W,w,randomH-W,n,c)
      recursiveDraw(x,z+randomH+W,w,h-randomH-W,n,c)
    }
  }
}

draw=_=>{
  if(!t++){
    createCanvas(w=windowWidth,h=windowHeight,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');
    c=cos
    s=sin
    W=40
    MINW=50
    w=1000
    h=w*1.5
    HEIGHT=w*1.5

    img=[]
    for(i=0;i<1;i++){
      img[i]=createImage(IW=256,IH=256)
      colorMode(HSB)
      img[i].loadPixels()
      for(y=0;y<IH;y++){
        ay = y/IH * 2 -1
        for(x=0;x<IW;x++){
          ax = x/IW * 2 -1
          b=(pow(ax,18)+pow(ay,18))*100

          // img[i].set(x,y,color(i*10,300-b*3,b))
          img[i].set(x,y,color(120,130-b,b+10))
        }
      }
      img[i].updatePixels()
    }

    img2=createImage(IW,IH)
    img2.loadPixels()
    for(y=0;y<IH;y++){
      ay = y/IH * 2 -1
      for(x=0;x<IW;x++){
        ax = x/IW * 2 -1
        // b=(pow(ax,18)+pow(ay,18))*100
        // b=pow(abs(abs(ax)-abs(ay)),1)*100
        b=(pow(ax-ay,1)-pow(ay-ax,1))*100

        // img[i].set(x,y,color(i*10,300-b*3,b))
        img2.set(x,y,color(120,130-b,b))
      }
    }
    img2.updatePixels()

    seed = Math.floor(random(100))
    reGenerateButton=createButton('Regenerate')
    reGenerateButton.position(19,19)
    reGenerateButton.mousePressed(()=>{
      seed = Math.floor(random(100))
    })

    background(0)
    seed=1
    perspective(PI / 3.0, width / height, 0.1, 5000);
  }
  randomSeed(seed)

  clear()
  // gl.disable(gl.DEPTH_TEST);
  // blendMode(SUBTRACT)
  // fill(100)
  // rect(-w,-h,w*2,h*2)

  blendMode(BLEND)

  orbitControl()

  texture(img[0])
  // texture(img2)
  noStroke()

  // noLoop()


  gl.enable(gl.DEPTH_TEST);
  // box(200)
  // rotateX(-PI/3*2)

  spd=10
  translate(0,50,t*spd)
  scale(1,-1,1)

  // cnt=Math.floor((t/60)/(h/spd/60))
  cnt=Math.floor(t*spd/(HEIGHT+W))
  for(i=0;i<cnt+3;i++){
    randomSeed(i+seed)

    push()
    translate(0,0,i*(-HEIGHT-W))

    if(i>=cnt-1){
    // if(true){

      push()
      translate(-w-W,0)
      recursiveDraw(0,0,w,HEIGHT,6,i)
      pop()

      push()
      translate(w+W,0)
      scale(-1,1)
      recursiveDraw(0,0,w,HEIGHT,6,i)
      pop()
    }
    pop()

    // translate(0,0,-h-W*3)

  }
}

