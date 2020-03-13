t=0
MAX=30
X=4
Y=4
S=20
draw = _ => {
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    p=[]
    // for(x=0;x<X;x++){
    //   for(y=0;y<Y;y++){
    //     p[x*X+y] = {x:x*S,y:y*S}
    //   }
    // }
  }
  
  blendMode(BLEND)
  colorMode(RGB)
  background(0,20)
  colorMode(HSB)
  translate(w,w)
  blendMode(ADD)

  noFill()
  noStroke()
  for(x=0;x<X;x++){
    for(y=0;y<Y;y++){
      i=x*Y+y
      p[i]={
        // x: w*cos(PI/X*x+t/200)*cos(TAU/Y*y),
        // y: w*sin(TAU/Y*y),
        x:w*cos(TAU/X*x*1+mouseX/800),
        y:w*sin(TAU/Y*y*1+mouseY/800)
      }
    }
  }
  for(x=0;x<X;x++){
    for(y=0;y<Y;y++){
      RANGE=200
      col=color(RANGE/2*sin(TAU/X*x+TAU/Y*y+mouseX/900)+RANGE/2+70,90,50)
      drawingContext.shadowColor=col
      drawingContext.shadowBlur=20
      stroke(col)
      strokeWeight(3)
      i=x*Y+y
      dx=(x+1)%X
      dy=(y+1)%Y
      idx=dx*Y+y
      idy=x*Y+dy
      idxy=dx*Y+dy
      for(j=0;j<5;j++){
      drawingContext.shadowOffsetX=(mouseX-pmouseX)*-(1+j)/2
      drawingContext.shadowOffsetY=(mouseY-pmouseY)*-(1+j)/2

      line(p[idx].x,p[idx].y,p[idy].x,p[idy].y)
      }
    }
  }

}
