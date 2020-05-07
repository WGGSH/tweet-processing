t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    // noLoop()
    R=20
    frameRate(30)
  }

  // clear()
  // drawingContext.shadowBlur=0
  // drawingContext.shadowColor='black'
  // blendMode(BLEND)
  // background(0,30)
  blendMode(ADD)
  clear()
  translate(w,w*4/3)
  rotate(-PI/2)

  stroke(255)

  f=c=>{
    strokeWeight(c)
    // console.log(c)
    // circle(0,0,20)
    for(let i=0;i<2;i++){
      nc=c
      push()
      rotate(TAU/6*(i-.5+t/40))
      // drawingContext.shadowBlur=1
      // drawingContext.shadowColor=color(255,0,0)
      stroke(200)
      line(0,0,R*c,0)
      push()
      translate(R*c+5*c,0)
      rotate(t/10/c*(i*2-1))
      if(nc>0){
        f(c-1)
      }
      pop()
      pop()
    }
  }
  
  f(9)

}

