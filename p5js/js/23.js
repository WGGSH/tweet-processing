t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    n=60
    // r=random
    p=[]
    // b=blendMode
    // c=colorMode
  }

  if(!n--){
    n=Math.floor(random(1,60))

    p.push({
      x:w/2*cos(t/5),
      y:w/2*sin(t/5),
      // x:r(0,w),
      // y:r(0,w*2),
      t,
      // h:r(90,180)
    })
  }

  translate(w,w)
  // rotate(-t/90)

  // b(BLEND)
  // c(RGB)
  // background(0,50)
  // b(ADD)
  // c(HSB)

  clear()
  // c(HSB)
  blendMode(DIFFERENCE)

  scale(1,.7)
  // noFill()

  // p.forEach(i=>{
  //   stroke(i.h,0,100)
  //   ellipse(i.x,i.y,(t-i.t)*t/20)
  // })
  for(i of p){
    // stroke(i.h,50,99)
    // stroke(i.h,0,100)
    ellipse(i.x,i.y,(t-i.t-30)*15)
  }

}

t=0,draw=a=>{for(i of(t++||(createCanvas(w=900,w),w/=2,n=60,p=[]),n--||(n=Math.floor(random(1,60)),p.push({x:w/2*cos(t/5),y:w/2*sin(t/5),t:t})),translate(w,w),clear(),blendMode(DIFFERENCE),scale(1,.7),p))ellipse(i.x,i.y,15*(t-i.t-30))}

