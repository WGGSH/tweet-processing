t=0
draw=_=> {
  if(!t){
    createCanvas(w=900,w)
    w/=2
  }
  t+=.005
  background(0,10)
  noFill()

  translate(w,w)
  j=0
  rotate(t)
  while(j++<9){
    rotate(PI/5)
    i=0
    stroke(30,170,j*30,90)
    while(i++<99){
      rotate(i/w*sin(t/9))
      x=i*2+w*cos(t*4)
      y=i*2+w*sin(t*3)
      ellipse(x,y,i,i*3)
    }
  }
}

// t=0,draw=(a=>{for(t||(createCanvas(w=900,w),w/=2),t+=.003,background(0,10),noFill(),translate(w,w),j=0,rotate(t);j++<9;)for(rotate(PI/5),i=0,stroke(30,170,30*j,90);i++<99;)rotate(i/w*sin(t/9)),x=2*i+w*cos(4*t),y=2*i+w*sin(3*t),ellipse(x,y,i,3*i)});
