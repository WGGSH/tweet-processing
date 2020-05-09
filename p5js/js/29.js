t=0

draw=_=>{
  if(!t++){
    createCanvas(w=1200,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    // generate bullet images
    colorMode(HSB)
    CM = 36
    img = []
    for(i=0;i<CM;i++){
      img[i] = createImage(IW=128,IH=128)
      img[i].loadPixels()
      for(y=0;y<IH;y++){
        cy=y-IH/2
        for(x=0;x<IW;x++){
          cx=x-IW/2
          img[i].set(x,y,color(i*360/CM,(cx*cx+cy*cy)/20,125-(cx*cx+cy*cy)/40),0)
        }
      }
      img[i].updatePixels()
    }
    imageMode(CENTER)

    p=[]
    frameRate(30)
  }
  push()
  // orbitControl()
  rotateX(-mouseY/200)
  rotateY(-mouseX/200)
  
  clear()

  blendMode(SCREEN)

  // draw axis
  colorMode(RGB)
  strokeWeight(5)
  stroke(128,0,0)
  line(0,0,0,1000,0,0)
  stroke(0,128,0)
  line(0,0,0,0,1000,0)
  stroke(0,0,128)
  line(0,0,0,0,0,1000)
  

  // control bullets
  gl.disable(gl.DEPTH_TEST);
  push()
  scale(.4,.4,.4)
  for(i=p.length-1;i>=0;i--){
    a=p[i]
    a.vec.add(a.acc)
    a.pos.add(a.vec)

    push()
    translate(a.pos.x,a.pos.y,a.pos.z)
    push()
    rotateY(mouseX/200)
    rotateX(mouseY/200)
    image(img[a.c],0,0)
    pop()
    pop()

    L=5000
    if(a.pos.x<-L || a.pos.x>L || a.pos.y<-L || a.pos.y>L || a.pos.z<-L || a.pos.z>L){
      p.splice(i,1)
    }
  }
  pop()
  gl.enable(gl.DEPTH_TEST);

  // generate bullets
  if(t<=450){
    // 1st step
    if(t%180==30){
      C1_1 = 16
      C1_2 = 32
      col = Math.floor(random(CM))
      for(x=0;x<C1_1;x++){
        for(y=0;y<C1_2;y++){
          a1=PI/C1_1*x
          a2=TAU/C1_2*(y)
          p.push({
            pos: createVector(),
            vec: createVector(
              40*cos(a1)*cos(a2),
              40*sin(a2),
              40*sin(a1)*cos(a2)
            ),
            c: Math.floor(col+CM + 5*sin(TAU/C1_1*x))%CM
          })
        }
      }
    }

  } else if (t< 900){
    // 2nd step
    C2_1 = 3
    C2_2 = 3
    C2_3 = 40
    C2_4 = 50
    if(t%3==0){
      for(x=0;x<C2_1;x++){
        for(y=0;y<C2_2;y++){
          a1=TAU/C2_1*x+t/C2_4
          a2=TAU/C2_2*y
          p.push({
            pos: createVector(),
            vec: createVector(
              cos(a1)*cos(a2),
              sin(a2),
              sin(a1)*cos(a2)
            ).mult(C2_3),
            c: (x*10+y*8)%36
          })
        }
      }
    }
  } else if (t<1350){
    // step3
    C3 = .5
    if(t%3==0){
      for(x=0;x<C2_1;x++){
        for(y=0;y<C2_2;y++){
          a1=TAU/C2_1*x+t/C2_4
          a2=TAU/C2_2*y
          p.push({
            pos: createVector(),
            vec: createVector(
              cos(a1)*cos(a2),
              sin(a2),
              sin(a1)*cos(a2)
            ).mult(C2_3),
            acc: createVector(
              -cos(a1)*cos(a2),
              -sin(a2),
              -sin(a1)*cos(a2)
            ).mult(C3),
            c: (x*10+y*8)%36
          })
        }
      }
    }
  } else if (t>1500&& t< 2400){
    // step4
    C4_S = 1500
    if(t%1==0){
      for(x=0;x<6;x++){
        for(y=0;y<1;y++){
          a1=TAU/6*x+(t-1500)*(t-1500)/C4_S
          a2=TAU/3*y
          p.push({
            pos: createVector(),
            vec: createVector(
              cos(a1)*cos(a2),
              sin(a2),
              sin(a1)*cos(a2)
            ).mult(C2_3),
            // c: Math.floor((x*2+10+t/50))%CM
            c: Math.floor((6*sin(TAU/6*x)+16+t/50))%CM
          })
        }
      }
    }

  }

}

