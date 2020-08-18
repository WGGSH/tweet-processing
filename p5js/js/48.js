import p5 from "p5";


glenable=false
dc=false
t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,h=900,P2D)
    // gl = document.getElementById('defaultCanvas0').getContext('webgl');
    g = createGraphics(w,h,WEBGL)

    // gl = g.getContext('webgl');


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
  s=0
  for(y=0;y<iw;y++){
    ay = y/iw * 2 -1
    for(x=0;x<iw;x++){
      ax = x/iw * 2 -1
      h = sin(t/80)*50+180
      s = 100*(sin(s/150)/2+.5)
      b = 100-4/(abs(pow(ax,4))+abs(pow(ay,4)))*20*(sin(s/150)/2+.5)
      // b = 100
      img.set(x,y,color(h,s,b))
    }
  }
  img.updatePixels()

  clear()

  g.blendMode(SCREEN)

  g.clear()

  // orbitControl()
  g.push()
  g.rotateX(t/200)
  g.rotateY(t/600)
  // translate(0,0,t*20)
  //
  // translate(0,0,0)
  if(glenable){
    gl.disable(gl.DEPTH_TEST);
  }

  // g.noFill()
  // scale(1,1,4/300)

  g.texture(img)
  g.box(300)
  g.rotateX(t/500)
  g.rotateY(t/200)
  g.box(200)
  g.pop()

  g.blendMode(BLEND)

  if(glenable){
    gl.enable(gl.DEPTH_TEST);
  }
  g.noStroke()
  g.fill(0,.05)
  g.rect(-w/2,-w/2,w,w)

  if(dc){
    drawingContext.shadowBlur=100
    drawingContext.shadowColor=color(h,s,b)
  }

  image(g,0,0)
}

mouseClicked=_=>{
  if(mouseButton==LEFT){
    glenable=!glenable

    if(glenable){
      gl = document.getElementById('glgraphics').getContext('webgl');
    }
  }
}

keyPressed=_=>{
  if(key=='z'){
    dc=!dc
    if(!dc){
      drawingContext.shadowBlur=0
      drawingContext.shadowColor='black'
    }
  }
}
