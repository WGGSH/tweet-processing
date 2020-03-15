// t=0
p=0
draw = _ => {
  if(!p){
    createCanvas(w=900,w)
    p=[]
    // w/=2
  }
  clear()
  blendMode(ADD)
  r=random
  p.push({x:0,y:w/4,a:r(6)-3,b:r(5)+4})
  
  // noStroke()
  translate(w/2,w/2)
  for(f of p){
    f.x+=f.a
    f.y-=f.b
    // fill(max(205-f.y,40),min(-f.y/3+200,99),max(f.y*2-200,70),15)
    fill(245-f.y,-f.y/7+90,max(f.y*2,70),15)
    i=0
    while(i++<15){
      circle(f.x,f.y,max(i*9+f.y/5,0))
    }
    // for(i=0;i<15;i++){
    // }
  }
  // filter(BLUR,1)
}
// p=0,draw=a=>{for(f of(p||(createCanvas(w=900,w),p=[]),clear(),blendMode(ADD),r=random,p.push({x:0,y:w/4,a:r(6)-3,b:r(5)+4}),translate(w/2,w/2),p))for(f.x+=f.a,f.y-=f.b,fill(245-f.y,-f.y/7+90,max(2*f.y,70),15),i=0;i++<15;)circle(f.x,f.y,max(9*i+f.y/5,0))}
