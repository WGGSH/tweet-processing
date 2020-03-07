t=0
b=2600
draw=f=>{
  if(!t){
    createCanvas(w=5120,h=1440)
  }
  blendMode(BLEND)
  background(0,7)
  blendMode(ADD)
  translate(w/2,h/2)
  // scale(5,5)
  noFill()

  t+=.003
  i=0
  while(i++<b){
    s=sin(t*.27+i)
    c=cos(t+i*2)
    // stroke(b/7,b*(c+.8),b*(s+.8),5)
    // stroke(b*(s+.8),b/7,b*(c+.8),5)
    stroke(100*(c+1.5),100/7*9,100*(s+1.8),3)
    a=b*c
    bezier(
      b*c,b*s,
      a*c,a*c,a*s,a*s*s*c,
      b*s,b*sin(t/3)*c)
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    save('image.png')
  }
}

// t=0,b=900,draw=(e=>{for(t||createCanvas(b,b),blendMode(BLEND),background(0,9),blendMode(ADD),translate(b/2,b/2),noFill(),t+=.003,i=0;i++<b;)s=sin(.27*t+i),c=cos(t+i),stroke(b*(c+.8),b/7,b*(s+.8),7),a=b*c,bezier(b*c,b*s,a*c,a*c,a*s,a,b*s,b*sin(t/10)*c)});
