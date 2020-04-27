t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    // w/=2

    p=[]
  }

  // clear()
  drawingContext.shadowBlur=0
  drawingContext.shadowColor='black'

  blendMode(BLEND)
  colorMode(RGB)
  background(0,10)
  colorMode(HSB)
  blendMode(ADD)

  // translate(w,w)

  drawingContext.shadowBlur=20
  drawingContext.shadowColor=color(140,50,10)
  fill(140,50,10)
  noStroke()
  for(i=0;i<p.length;i++){
    a=p[i]
    a.c++
    if(a.c<60){
      a.acc=(createVector(w/2,w/2).sub(a.pos)).normalize().mult(.6)
    }else{
      a.acc=createVector()
      a.c=60
    }
    a.vec.add(a.acc)
    a.vec=a.vec.normalize().mult(S)
    a.pos.add(a.vec)
    // a.vx+=a.ax
    // a.vy+=a.ay
    // a.x+=a.vx
    // a.y+=a.vy
    circle(a.pos.x,a.pos.y,30*sin(TAU/120*a.c)+20)

    if(a.pos.x<0||a.pos.x>w || a.pos.y<0||a.pos.y>w){
      p.splice(i--,1)
    }
  }
}

mousePressed=_=>{
  i=8
  S=10
  while(i-->0){
    p.push({
      pos: createVector(mouseX,mouseY),
      vec: createVector(S,0).rotate(TAU/8*i),
      acc: createVector(),
      c:0,
      // x:mouseX,
      // y:mouseY,
      // vx: cos(TAU/8*i)*S,
      // vy: sin(TAU/8*i)*S,
      // ax: 0,
      // ay: 0
    })
  }
}
