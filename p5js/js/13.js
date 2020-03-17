t=0
S=50
N=17
draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    colorMode(HSB)
  }
  clear()
  // blendMode(ADD)


  translate(-S,-S*12)

  for(x=0;x<N;x++){
    translate(
      0,
      S*2*sin(TAU/6)
    )
    push()
    for(y=0;y<N;y++){
      translate(
        S+S*cos(TAU/6),
        S*sin(TAU/6)
      )
      
      // drawingContext.shadowOffsetX=10*cos(t/20)
      // drawingContext.shadowOffsetY=10*sin(t/20)
      drawingContext.shadowBlur=30
      x2=x-S
      y2=y-S
      fill(75)
      stroke(75)
      drawingContext.shadowColor=color(240+60*sin(x2*x2*y2*y2/900+t/20*1),70,60)
      for(i=0;i<3;i++){
        // drawingContext.shadowOffsetX=3*cos(TAU/3*i+TAU/6+PI)
        // drawingContext.shadowOffsetY=3*sin(TAU/3*i+TAU/6+PI)
        beginShape()
        vertex(0,0)
        for(j=0;j<3;j++){
          vertex(S*cos(TAU/6*(i*2+j)),S*sin(TAU/6*(i*2+j)))
        }
        endShape(CLOSE)
      }
      // for(i=0;i<6;i++){
      //   vertex(S*cos(TAU/6*i),S*sin(TAU/6*i))
      // }
    }
    pop()
  }

}
