t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');


    img = createImage(iw=128,iw)
    // img.loadPixels()
    // colorMode(HSB)
    // for(y=0;y<iw;y++){
    //   ay = y/iw * 2 -1
    //   for(x=0;x<iw;x++){
    //     ax = x/iw * 2 -1
    //     img.set(x,y,color(120,10,100-5/(abs(ax)+abs(ay))*10))
    //   }
    // }
    // img.updatePixels()
  }
  img.loadPixels()
  colorMode(HSB,360,100,100)
  for(y=0;y<iw;y++){
    ay = y/iw * 2 -1
    for(x=0;x<iw;x++){
      ax = x/iw * 2 -1
      h = sin(t/80)*50+180
      s = 100*(sin(t/150)/2+.5)
      b = 100-4/(abs(pow(ax,4))+abs(pow(ay,4)))*20*(sin(t/150)/2+.5)
      // b = 100
      img.set(x,y,color(h,s,b))
    }
  }
  img.updatePixels()

  // clear()

  blendMode(SCREEN)

  // orbitControl()
  push()
  rotateX(t/200)
  rotateY(t/600)
  // translate(0,0,t*20)
  //
  // translate(0,0,0)
  gl.disable(gl.DEPTH_TEST);

  // noFill()
  // scale(1,1,4/300)

  texture(img)
  box(300)
  rotateX(t/500)
  rotateY(t/200)
  box(200)
  pop()

  blendMode(BLEND)

  // gl.enable(gl.DEPTH_TEST);
  // noStroke()
  fill(0,.05)
  rect(-w/2,-w/2,w,w)
}
