

// glenable=false
// dc=true
t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,w)
    // w/=2

    B=blendMode
    S=sin
    C=cos
    N=130
  }
  B(BLEND)
  background(0,8)
  B(ADD)

  translate(w/2,w/2)


  noFill()
  i=N
  while(i--){
  // for(i=0;i<N;i++){
    // stroke(10,N-i*i,i)
    // stroke(10,N*2-i*4,i)
    stroke(N*2-i*4,40,i)
    a=t/N*5+i/N+mouseX/N
    b=t/N*8+i/N+mouseY/N
    x=w*C(a)
    y=w*S(b)
    // bezier(-w*C(a),-w*S(a),mouseX,mouseY,w/2*S(a),w/2*C(a),w*C(b),w*S(b))
    bezier(-x,-y,0,0,y/2,x/2,x,y)
    // a=t/6*3+i/99
    // b=t/6*2+i/99
    // bezier(w*cos(a+PI),w*sin(a+PI),100,100,100,100,w*cos(b+PI),w*sin(b+PI))
  }


}

// t=0,draw=(e=>{for(t++||(createCanvas(w=900,w),p=[],B=blendMode,S=sin,C=cos,N=99),B(BLEND),background(0,8),B(ADD),translate(w/2,w/2),noFill(),i=0;i<N;i++)stroke(N-i,20,i),a=t/N*7+i/N,b=t/N*8+i/N,bezier(-w*C(a),-w*S(a),mouseX,mouseY,w/2*S(a),w/2*C(a),w*C(b),w*S(b))})

// t=0,draw=(e=>{for(t++||(createCanvas(w=900,w),B=blendMode,S=sin,C=cos,N=99),B(BLEND),background(0,8),B(ADD),translate(w/2,w/2),noFill(),i=N;i--;)stroke(10,2*N-4*i,i),a=t/N*7+i/N,b=t/N*8+i/N,x=w*C(a),y=w*S(a),bezier(-x,-y,mouseX,mouseY,y/2,x/2,x,y)});


// t=0,draw=(e=>{for(t++||(createCanvas(w=900,w),B=blendMode,S=sin,C=cos,N=130),B(BLEND),background(0,8),B(ADD),translate(w/2,w/2),noFill(),i=N;i--;)stroke(2*N-4*i,40,i),a=t/N*5+i/N+mouseX/N,b=t/N*8+i/N+mouseY/N,x=w*C(a),y=w*S(b),bezier(-x,-y,0,0,y/2,x/2,x,y)})
