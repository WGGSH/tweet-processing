t=0
MAX=30
draw = _ => {
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    p=[]
    for(i=0;i<MAX;i++){
      p[i]=createVector()
    }
    console.log(p)
    colorMode(HSB)
    frameRate(30)
  }
  if(t%60==0){
    console.log(frameRate())
  }
  blendMode(BLEND)
  background(0,1)
  blendMode(ADD)

  translate(w,w)
  strokeWeight(0.1)

  for(i=0;i<MAX;i++){
    p[i].x=w*cos(TAU/MAX*i*2.2+(t+mouseX)/200)
    p[i].y=w*sin(TAU/MAX*i*2.8+(t+mouseY)/200)
  }


  for(i=0;i<MAX;i++){
    h=((150+t)+100*sin(i/30))%360
    s=80
    b=70

    drawingContext.shadowColor=color(h,s,b,100)
    drawingContext.shadowBlur=30
    noFill()
    fill(h,0,b,0.03)
    stroke(h,s,b,0)
    // stroke(360/MAX*i,40,100,0.05)
    // circle(p[i].x,p[i].y,10)
    for(j=i+1;j<MAX;j++){
      for(k=j+1;k<MAX;k++){
        ij=p5.Vector.dist(p[i],p[j])
        jk=p5.Vector.dist(p[j],p[k])
        ki=p5.Vector.dist(p[k],p[i])
        if(ij*ij+jk*jk+ki*ki < w*w*2.3){
          triangle(
            p[i].x,p[i].y,
            p[j].x,p[j].y,
            p[k].x,p[k].y
          )
        }
      }
    }
  }
}
