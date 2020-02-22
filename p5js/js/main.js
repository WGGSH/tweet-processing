t=0
draw=_=>{
  if (!t){
    createCanvas(w=900,w)
  }
  for(a of [BLEND,ADD]){
    blendMode(a)
    background(0,20)
  }
  t++
  fill(255,255,0)

  ellipse(mouseX,mouseY,100,100)
}
