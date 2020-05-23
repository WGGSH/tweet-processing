t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    p=[]
  }
  drawingContext.shadowBlur=0
  drawingContext.shadowColor='black'
  colorMode(RGB,255,255,255,100)
  blendMode(BLEND)
  // clear()
  background(0,5)
  blendMode(ADD)
  strokeWeight(10)
  colorMode(HSB,360,100,100,100)

  // translate(w,w)
  // scale(.5,.5)
  // translate(-w*2,-w*2)

  for(i=0;i<p.length;i++){
    a=p[i]
    a.t++
    a.t2++
    sp=a.pos.copy().add(a.vec.copy().mult(Math.max(a.t-60,0)*a.s))
    tp=a.pos.copy().add(a.vec.copy().mult(Math.min(a.t,15)*a.s))
    drawingContext.shadowBlur=30
    drawingContext.shadowColor=color(a.h,50,50,100)
    stroke(a.h,0,100,10)
    line(sp.x,sp.y,tp.x,tp.y)

    // if(!a.r){
    //   if(tp.x<0 || tp.x>w){
    //     p.push({
    //       pos: tp.copy(),
    //       vec: createVector(a.vec.x*-1,a.vec.y),
    //       t: 0,
    //       t2: a.t2,
    //       s: a.s,
    //       r: 1,
    //     })
    //     r=1
    //   }
    // }

    if(a.t==15 && a.t2<150){
      for(j=0;j<2;j++){
        p.push({
          pos: tp.copy(),
          vec: a.vec.copy().rotate(PI/2.5*(j*2-1)+PI/5*random(-1,1)*0),
          h: Math.floor(random(361)),
          s: 10,
          t: 0,
          t2: a.t2,
          r:0
        })
      }
    }
    if(a.t==60|| a.t2 >= 240){
      console.log(a.t,a.t2)
      p.splice(i,1)
    }
  }

}

mouseClicked=_=>{
  p.push({
    pos: createVector(mouseX,mouseY),
    vec: p5.Vector.random2D(),
    h: Math.floor(random(361)),
    s: 10,
    t: 0,
    t2:0,
    r: 0,
    c:[]
  })
}
