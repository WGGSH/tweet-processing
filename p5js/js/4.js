t=0
draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
  }
  background(0)

  translate(w/2,w/2)
  scale(1-t/10000)
  noStroke()
  fill(0,0,130)
  rect(-w,-w,w*2,w*1)
  fill(40,0,0)
  rect(-w,0,w*2,w*1)
  noFill()
  stroke(255)
  for (let i = 20; i < w; i+=3) {
    rotate(t/5000000)
    rect(-i*2,-i,i*4,i*2)
  }
}
