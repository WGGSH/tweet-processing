t=0
draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
  }

  d = drawingContext
  d.shadowColor='black'

  colorMode(RGB)
  blendMode(BLEND)
  // clear()
  background(0, 40)

  console.log(t)
  if(t<1680){
    blendMode(ADD)
    // stroke(255)
  }else{
    stroke(255)
  }
  colorMode(HSB)

  d.setLineDash([200,100])
  d.shadowBlur=1

  e = t< 600 ? 40 : (22+18*cos(TAU*(t-600)/360))
  strokeWeight(e)

  // stroke(255)
  // line(0,0,mouseX,mouseY)

  L=50
  j=-1
  while(j++<2){
    i=L
    while(i-->0){
      // stroke(360/10*i,50,0)
      if(t<1680){
        d.shadowColor=color(240/(L-1)*i+170,80,5)
      }else{
        d.shadowColor=color(240/(L-1)*i+170,80,0)
      }
      k=i*w/L*2
      r=t*4+i*(w/L*2)
      // R=300
      // while(j++<R){
      // point(k+50*cos(TAU/R*j*5),(t*4+i*30+w/R*j+i)%w)
      // point((t*4+i*30+w/R*j)%w,k+50*cos(TAU/R*j*5))
      // line(k,-r%w,k,-r%w+90)
      // }
      line(k,-r%w,k,w)
      r+=100
      line(-r%w,k,w,k)
    }
    translate(w,w)
    scale(-1,-1)
  }
}
