t=0
off=0
draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    p=[]
    for(i=0;i<1000;i++){
      off=off+.5
      p.push({x: noise(off)*200-100,y:100})
    }
  }
  // clear()
  colorMode(RGB)
  blendMode(BLEND)
  background(0,40)
  blendMode(ADD)
  
  colorMode(HSB)

  translate(w,0)

  for(i=0;i<151;i++){
    off=off+.5
    p.push({x: noise(off)*200-100,y:100})
  }

  strokeJoin(MITER)
  strokeWeight(5)
  noFill()
  drawingContext.shadowBlur=30
  beginShape()
  c=color(244,60,50)
  x=0,y=0
  stroke(1,0.9)
  // for(a of p){
  for(i=0;i<p.length;i++){
    drawingContext.shadowColor=color(254,60,23)
    if(i===1000){
      for(j=0;j<10;j++){
        p.shift()
      }
      break
    }
    a=p[i]
    off=off-0.1
    p[i].x+=pow(noise(off)*5-2.5,3)
    x+=a.x
    y+=a.y
    if(y>w*2){
      x=0
      y=0
      endShape()
      beginShape()
      // p=[]
      // p.push({x: random(300)-150,y:0})
    }
    vertex(x,y)
  }
  endShape()
}
