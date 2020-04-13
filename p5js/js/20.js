t=0
draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    m=translate
  }

  clear()
  // background(64)

  m(w,w)

  // blendMode(DIFFERENCE)
  // blendMode(BURN)
  blendMode(MULTIPLY)
  noStroke()
  fill(232)

  R=200
  rotate(-t/200)
  for(i=0;i<R;i++){
    rotate(t/200000000*i*i)
    m(1,1)
    // push()
    // translate(w,0)
    ellipse(0,0,w/R/i/i*1000000*(sin(t/50)+1.5),w/R*i*i/150*(cos(t/80)+1))
    // pop()
  }

}

// t=0,draw=e=>{for(t++||(createCanvas(w=900,w),w/=2,m=translate),clear(),m(w,w),blendMode(MULTIPLY),noStroke(),fill(232),R=200,rotate(-t/200),i=0;i<R;i++)rotate(t/2e8*i*i),m(1,1),ellipse(0,0,w/R/i/i*1e6*(sin(t/50)+1.5),w/R*i*i/150*(cos(t/80)+1))}
