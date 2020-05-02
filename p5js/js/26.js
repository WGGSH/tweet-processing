t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    frameRate(30)

    p=[]

    img=[]
    for(j=0;j<360;j++){
      img[j] = createGraphics(50,50)
      img[j].colorMode(HSB)
      img[j].noStroke()
      for(i=0;i<50;i++){
        // img.fill(120,60,i*i/15-30)
        // img[j].fill(j,70,i*i*i/1800)
        img[j].fill(j,80,i-30)
        img[j].circle(img[j].width/2,img[j].height/2,50-i)
      }

    }

    imageMode(CENTER)
  }
  drawingContext.shadowBlur=0
  drawingContext.shadowColor='black'

  blendMode(BLEND)
  colorMode(RGB)
  background(0,10)
  colorMode(HSB)
  blendMode(ADD)
  // clear()
  
  noStroke()
  noFill()
  strokeWeight(1)
  for(i=0;i<p.length;i++){
    a=p[i]
    a.t++
    if(a.t<a.mt){
      if(a.t>20){
        a.acc=(createVector(w/2,w/2).sub(a.pos)).normalize().mult(.9).rotate(TAU)
      }
    }else{
      a.acc=createVector()
      a.t=a.mt
    }
    a.vec.add(a.acc)
    a.vec=a.vec.normalize().mult(S).rotate(0.015*cos(TAU/R*a.i*5))
    a.pos.add(a.vec)
    // image(img[a.c],a.pos.x,a.pos.y)
    // stroke(a.c,80,100)
    stroke(5)
    drawingContext.shadowBlur=5
    drawingContext.shadowColor=color(a.c,80,30)
    // point(a.pos.x,a.pos.y)
    if(a.pos.dist(a.prev.pos)<240){
      line(a.pos.x,a.pos.y,a.prev.pos.x,a.prev.pos.y)
    }

    if(a.pos.x<0||a.pos.x>w || a.pos.y<0||a.pos.y>w){
      if(a.t==a.mt){
        p.splice(i--,1)
      }
    }
  }
}

mousePressed=_=>{
  R=400
  i=R
  S=12
  r=Math.floor(random(0,360))
  // mt=Math.floor(random(360,600))
  mt = 420
  let prev
  firstIndex=p.length
  while(i-->0){
    current={
      pos: createVector(mouseX,mouseY),
      vec: createVector(S,0).rotate(TAU/R*i),
      acc: createVector(),
      t:0,
      mt,
      i,
      c:Math.floor((r+60*cos(TAU/R*i)+360))%360,
      prev: !!prev ? prev : undefined
    }
    p.push(current)
    prev=current
    // p.push({
    //   pos: createVector(mouseX,mouseY),
    //   vec: createVector(S,0).rotate(TAU/R*i),
    //   acc: createVector(),
    //   t:0,
    //   mt,
    //   i,
    //   c:Math.floor((r+60*cos(TAU/R*i)+360))%360
    // })
  }
  p[firstIndex].prev = prev
}
