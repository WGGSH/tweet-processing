import p5 from "p5";

t = 0

draw = _ => {
  if(!t++){
    createCanvas(w=windowWidth,h=windowHeight)

    C=cos
    S=sin

    p=[0,0,0]
    n=[0,0,0]

    R=100
    T=10
    // drawingContext.shadowColor=color(255,0,0)
    // drawingContext.shadowBlur=100
  }
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'black';
  translate(w/2,h/2)
  // clear()
  blendMode(BLEND)
  background(0,3)

  blendMode(ADD)
  // fill(255)

  M=P=>{
    a=PI/3
    return [
      P[0]*C(a)+P[1]*C(a*3)+P[2]*C(a*5),
      P[0]*S(a)+P[1]*S(a*3)+P[2]*S(a*5),
    ]
  }

  N=(p,n)=>{
    return [
      p[0]+n[0],
      p[1]+n[1],
      p[2]+n[2],
    ]
  }
  stroke(50,50,255)
  strokeWeight(10)
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color(50,50,255);

  l=(t%T)*R/(T-1)
  pp=[R*M(p)[0],R*M(p)[1]]
  nv=[M(n)[0]*l,M(n)[1]*l]
  // np=[pp[0]+M(N(p,n))[0]*l,pp[1]+M(N(p,n))[1]*l]
  // circle(pp[0],pp[1],20)

  line(pp[0],pp[1],pp[0]+nv[0],pp[1]+nv[1])

  if(t%T==1){
    let flag=true
    p=N(p,n)
    while(flag){
      flag=true
      r=Math.floor(random(6))
      n=[
        r==0 ? 1 : r==1 ? -1 : 0,
        r==2 ? 1 : r==3 ? -1 : 0,
        r==4 ? 1 : r==5 ? -1 : 0,
      ]
      if(
        abs(p[0]+n[0])<4 &&
        abs(p[1]+n[1])<4 &&
        abs(p[2]+n[2])<4
      )flag=false
    }
  }

}
