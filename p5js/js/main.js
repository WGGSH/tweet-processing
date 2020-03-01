t=0
draw = _ => {
  if(!t){
    createCanvas(w=900,w)
  }
  t+=.01
  blendMode(BLEND)
  background(0,9)
  // clear()

  // blendMode(DIFFERENCE)
  blendMode(ADD)

  translate(w/2,w/2)
  // scale(.5,.5)
  // fill(255)

  i=0
  while(i++<70){
  // for (let i = 0; i < 70; ++i) {
    rotate(.005)
    j=-7
    while(j++<9){
    // for (let j = 0; j < 8; ++j) {
      b=PI/4*j
      fill(8,10,20+15*sin(b))
      s=t-j*.1
      a=b+1*sin(s)
      ellipse(w*cos(a)*sin(s/4),w*sin(a)*sin(s/3),15)
    }
  }

}

t=0,draw=_=>{for(t||createCanvas(w=900,w),t+=.01,blendMode(BLEND),background(0,3),blendMode(ADD),translate(w/2,w/2),i=0;i++<70;)for(rotate(.005),j=-7;j++<9;)b=PI/4*j,fill(8,10,20+15*sin(b)),s=t-.1*j,a=b+2*sin(s),ellipse(w*cos(a)*sin(s/4),w*sin(a)*sin(s/3),15)}

// t=0,draw=_=>{for(t||createCanvas(w=900,w),t+=.01,blendMode(BLEND),background(0,3),blendMode(ADD),translate(w/2,w/2),i=0;i++<70;)for(rotate(.005),j=-7;j++<9;)b=PI/4*j,fill(8,10,20+15*sin(b)),s=t-.1*j,a=b+2*sin(s),ellipse(w*cos(a)*sin(s/4),w*sin(a)*sin(s/3),15)}
