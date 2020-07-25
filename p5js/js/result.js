
t = 0

draw = _ => {
  if(!t++){
    createCanvas(w=900,w)
    seed=random(2000)
    STEP=40
    BP = [
      [w/8*4, w/8*1],
      [w/8*1, w/8*3],
      [w/8*7, w/8*5],
      [w/8*4, w/8*7],
  ]
    // BP = [
    //   [w/8*1,w/8*4],
    //   [w/8*3,w/8*1],
    //   [w/8*5,w/8*7],
    //   [w/8*7,w/8*4],
    // ]
    R = 3
  }
  randomSeed(seed)

  drawingContext.shadowBlur=0
  drawingContext.shadowColor='black'
  blendMode(BLEND)
  // clear()
  background(0,10)
  blendMode(ADD)

  noFill()
  fill(255)
  // stroke(255)
  noStroke()

  // bezier(w/8,w/2,w/8*3,w/8*3,w/8*5,w/8*5,w/8*7,w/2)

  let bpos =[]
  for(i=0;i<STEP;i++){
    step = i/STEP
    bpos[i] = createVector(
      bezierPoint(BP[0][0],BP[1][0],BP[2][0],BP[3][0],step),
      bezierPoint(BP[0][1],BP[1][1],BP[2][1],BP[3][1],step)
    )
    // x[i] = bezierPoint(BP[0][0],BP[1][0],BP[2][0],BP[3][0],step)
    // y[i] = bezierPoint(BP[0][1],BP[1][1],BP[2][1],BP[3][1],step)

    // circle(x,y,10)

  }

  bvvec = []
  bvvec[0] = createVector()
  bvvec[STEP-1] = createVector()
  for(i=1;i<STEP-1;i++){
    bvvec[i] = (bpos[i+1].copy().sub(bpos[i-1])).normalize().rotate(-PI/2)
  }

  for(i=1;i<STEP;i++){
    // strokeWeight((sin(TAU*2/STEP*(i-t/3))+1)*5)
    // line(bpos[i-1].x,bpos[i-1].y,bpos[i].x,bpos[i].y)
    npos = bpos[i].copy().add(bvvec[i])
    // line(bpos[i].x,bpos[i].y,npos.x,npos.y)
  }

  beginShape()

  wf=i=>{
    let m = t%STEP
    let b = bezierPoint(
      1,
      1/24*23,
      0,
      0,
      (abs(t-i/2)/STEP)%1
    )
    // let val = lerp(0,R,Math.min(3/abs(i-t),1))
    let val = lerp(0,R,b)
    if(val<R/4*3)val=0
    return val
    // return lerp(0,20,Math.min(3/abs(i*2-t/3),1))
    // return sin(TAU/STEP*Math.min(i+t/30,STEP/2))*10
  }

  nv=[]

  drawingContext.shadowBlur=10
  drawingContext.shadowColor=color(58,20,250)
  for(i=0;i<STEP;i++){
    W=wf(i)
    nv[i]=random(40)-20
    pos=bvvec[i].copy().mult(W+nv[i]).add(bpos[i])
    vertex(pos.x,pos.y)
  }
  for(i=STEP-1;i>=0;--i){
    W=wf(i)
    pos=bvvec[i].copy().mult(-W+nv[i]).add(bpos[i])
    vertex(pos.x,pos.y)
  }
  endShape()


  if(t%STEP==0){
    randomSeed(new Date().getTime())
    BP = [
      [w/8*(random(4)+2), w/8*1],
      [w/8*random(8), w/8*3],
      [w/8*random(8), w/8*5],
      [w/8*(random(4)+2), w/8*7],
    ]
  }

}
