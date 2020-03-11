t=0
draw=_=> {
  if(!t++) {
    createCanvas(w=900,w)
    w/=2
    frameRate(30)
  }
  clear()
  blendMode(SCREEN)
  colorMode(HSB)

  translate(w,w)

  d=drawingContext
  d.shadowBlur = 10
  noFill()
  strokeWeight(.18)
  i=0
  while(i++<400){
    c=color(190+60*-sin(i/70+(i%2)*TAU/2),80,90)
    d.shadowColor= c
    stroke(c)
    scale(1.007)
    rotate(PI/3)
    a=TAU/800*i
    rect(30*cos(a*.5),30*sin(a*2+t/40),2000)
  }
}
