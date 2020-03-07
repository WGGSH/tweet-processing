t=0
draw = _ => {
  if(!t){
    createCanvas(w=900,w)
    w/=2
    p=[]
  }
  t+=.01
  clear()

  translate(w,w)
  
  i=-1
  while(i++<1000){
    p[i]={x: i*cos(i/200+(i%300)/30+t),y: i*sin(i/200+(i%300)/30+t)}
    ellipse(p[i].x,p[i].y,10)
  }

}
