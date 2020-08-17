
t = 0

draw = _ => {
  if(!t++){
    createCanvas(w=900,w)
    colorMode(HSB)
    m=v=>translate(v,v)
    n=noise
  }
  fill(0,0.0)
  rect(0,0,w,w)

  // m=v=>{
  //   translate(v,v)
  // }
  // m(w/2)
  m(w/2)
  rotate(PI/8+sin(n(t/8000)*8))
  m(-w/2)

  strokeWeight(9)
  i=w
  while(i--){
  // for(i=0;i<w;i++){
    stroke(99+i%(sin(t/80)*180),70,99,.08)
    // stroke(120+(t+i)%(120),70,100,.08)
    // stroke(360/w/4*i+200,50,100)
    // stroke(sin(i/20)*128,sin((i+20)/20)*128,sin((i+40)/20)*128)
    point(i,0)
    // point(i,w-1)
  }

  copy(0,0,w,w,7,4,w-14,w-8)

}

// t=0,draw=e=>{for(t++||(createCanvas(w=900,w),colorMode(HSB),m=t=>translate(t,t),n=noise),fill(0,0),rect(0,0,w,w),m(w/2),rotate(PI/8+sin(8*n(t/8e3))),m(-w/2),strokeWeight(12),i=0;i++<w;)stroke(120+i%(150*sin(t/80)),70,100,.08),point(i,0);copy(0,0,w,w,7,4,w-14,w-8)}
