t = 0

generate = _ => {
  p = []
  x = W
  r1 = Math.floor(random(30,40))
  r2 = Math.floor(random(8,12))
  while(x-->0){
    p[x]=[]
    y = W
    while(y-->0){
      p[x][y] = []
      z = W
      while(z-->0){
        // p[x][y][z] = random(60)<5
        ax = x-W/2
        ay = y-W/2
        az = z-W/2
        p[x][y][z] = ((abs(ax*ay*az))%r1)<r2
      }
    }
  }
}
draw = _ => {
  if(!t++){
    createCanvas(w=900,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    R=30
    W = 17
    generate()

    colorMode(HSB,360,100,100)
    img = []
    for(i=0;i<36;i++){
      // h = h1 + h2 * i
      img[i] = createImage(IW=256,IH=IW)
      img[i].loadPixels()
      for(y=0;y<IH;y++){
        ay = y/IH * 2 -1
        for(x=0;x<IW;x++){
          ax = x/IW * 2 -1
          h = 360 / 36 * i
          s = 100-1/abs(ax*ax+ay*ay)/5
          // b = 1/abs(ax*ax+ay*ay)
          b = 1/abs(ax*ax+ay*ay)
          // b=60
          // if(b>100)b=100
          b/=1.2
          // if(b<5)b=0
          // if(b<10){b=0}
          img[i].set(x,y,color(h,s,b))
        }
      }
      img[i].updatePixels()
    }
  }

  clear()
  // orbitControl()
  rotateX(-mouseY/300)
  rotateY(mouseX/300)

  blendMode(SCREEN)


  q = []
  x = W
  if(t%10===0){

    while(x-->0){
      q[x]=[]
      y = W
      while(y-->0){
        q[x][y] = []
        z = W
        while(z-->0){
          q[x][y][z] = p[x][y][z]
        }
      }
    }
    for(x=0;x<W;x++){
      for(y=0;y<W;y++){
        for(z=0;z<W;z++){
          v=0
          for(x2 of [-1,0,1]){
            for(y2 of [-1,0,1]){
              for(z2 of [-1,0,1]){
                x3 = x+x2
                y3 = y+y2
                z3 = z+z2
                // if(x3<0 || x3>=W || y3<0 || y3>=W || z3<0 || z3>=W)continue
                if(x3<0)x3+=W
                if(y3<0)y3+=W
                if(z3<0)z3+=W
                if(x3>=W)x3-=W
                if(y3>=W)y3-=W
                if(z3>=W)z3-=W
                if(x2==0 && y2 ==0 && z2==0)continue
                v+=p[x3][y3][z3]
              }
            }
          }
          // if(p[x][y][z] &&(v>=5 ||v<=8))q[x][y][z] = 1
          if(!p[x][y][z] && v==7)q[x][y][z] = 1
          if(p[x][y][z] && (v<=3 || v>=9))q[x][y][z] = 0
        }
      }
    }
    p = q
  }

  // colorMode(RGB)
  // strokeWeight(5)
  // stroke(128,0,0)
  // line(0,0,0,1000,0,0)
  // stroke(0,128,0)
  // line(0,0,0,0,1000,0)
  // stroke(0,0,128)
  // line(0,0,0,0,0,1000)


  colorMode(HSB,360,100,100)
  imageMode(CENTER)
  noStroke()

  gl.disable(gl.DEPTH_TEST);
  translate(-R*W/2,-R*W/2,-R*W/2)
  p.forEach((square, index_1) => {
    square.forEach((line, index_2) => {
      line.forEach((cell, index_3) => {
        push()
        translate(index_1*R,index_2*R,index_3*R)
        rotateY(-mouseX/300)
        rotateX(mouseY/300)
        ax = (index_1 - W/2)/W*2
        ay = (index_2 - W/2)/W*2
        az = (index_3 - W/2)/W*2
        if(cell){
          // fill((ax*ax+ay*ay+az*az)*120,50,100,.5)
          // rect(0,0,R,R)
          // texture(img[])
          M = 36
          // h = Math.floor((ax*ax+ay*ay+az*az)*12)%36
          h = Math.floor((abs(ax)+abs(ay)+abs(az))*24)%36
          image(img[h],0,0,R*6,R*6)
        }
        pop()
      })
    })
  })
}

mouseClicked = _ => {
  generate()
}
