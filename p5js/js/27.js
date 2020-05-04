t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    w/=2

    xStart=random(10)
    xNoise = xStart
    yNoise = random(10)
    yStart = yNoise
    // noLoop()
    xtNoise=random(10)
    ytNoise=random(10)
  }
  drawingContext.shadowBlur=0
  drawingContext.shadowColor='black'
  colorMode(RGB)
  background(0,10)
  colorMode(HSB)

  yNoise=yStart+noise(ytNoise)
  ytNoise+=.01
  xtNoise+=.01
  for(y=0;y<height;y+=30){
    yNoise+=.1
    xNoise=xStart+noise(xtNoise)
    for(x=0;x<width;x+=30){
      xNoise+=.1
      alph=noise(xNoise,yNoise)*255
      drawPoint(x,y,noise(xNoise,yNoise))
      // stroke(0,alph)
      // point(x,y)
      // line(x,y,x+1,y+1)
    }
  }
}

drawPoint=(x,y,noiseFactor)=>{
  push()
  translate(x,y)
  rotate(noiseFactor*radians(360))
  drawingContext.shadowBlur=40
  drawingContext.shadowColor=color(noiseFactor*360,100,100)
  strokeWeight(1)
  stroke(noiseFactor*360,100,100)
  line(0,0,40,0)
  pop()
}
