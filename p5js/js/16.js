t=0
M=360
R=20
NR=0.4
RI=25
ox=0,oy=0
oc=0
H=100
or=0
function mousePressed(){
  restart()
}

function restart(){
  // console.log('restart')
  p=[]
  j=-1
  ox=random()
  oy=random()
  while(j++<R-1){
    p[j]=[]
    i=-1
    // ox-=0.01
    // oy-=0.01
    or+=0.06
    while(i++<M-1){
      r=TAU/M*i
      bl=j==0 ? -RI/2: p[j-1][i].l
      p[j][i]={l:bl+noise(NR*cos(r+or)+ox,NR*sin(r+or)+oy)*RI
        +RI*noise(NR*cos(r+or)+ox,NR*sin(r+or)+oy),i}
    }
  }
}


draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
    // createCanvas(w=windowWidth,h=windowHeight)
    w/=2
    restart()
    noLoop()
  }
  clear()
  translate(w,w)
  scale(1,0.4)


  // noFill()
  
  

  // C1=color(201,165,73)
  C1=color(232,191,171)
  // C2=color(150,100,50)
  C2=color(110,54,36)
  
  // stroke(255)
  // noStroke()

  // xの最大値，最小値を算出
  leftX=0,rightX=0
  leftXi=-1,rightX=-1
  for(i=0;i<M;i++){
    val = p[R-1][i].l*cos(TAU/M*i)
    if(leftX==0 || leftX > val){
      leftX = val
      leftXi=i
    }
    if(rightX==0 || rightX < val){
      rightX = val
      rightXi =i
    }
  }
  // console.log(leftXi,rightXi)

  startX=rightXi
  offsetX=0
  if(rightXi>leftXi){
    // alert('hoge')
    startX=0
    offsetX = rightXi-M
  }
  // console.log(startX,offsetX)

  // for(i=0;i<M/2-1;i++){
  for(i=startX;i<leftXi-offsetX;i++){
    index=(i+offsetX+M)%M
    nextIndex= (index+1)%M
    // console.log(index)
    px=p[R-1][index].l*cos(TAU/M*index)
    py=p[R-1][index].l*sin(TAU/M*index)
    px2=p[R-1][nextIndex].l*cos(TAU/M*nextIndex)
    py2=p[R-1][nextIndex].l*sin(TAU/M*nextIndex)

    for(j=0;j<H;j++){
      val=150*noise(1/(M/2)*i*8,pow(1/H*j*0.5,2))-75
      // C1=color(232,191,171)
      // C2=color(110,54,36)
      c=color(110+val,54+val,36+val)
      fill(c)
      stroke(c)

      beginShape()
      // line(px,py+w*1.5/100*j,px2,py2+w*1.5/100*j)
      vertex(px,py+w*.5/H*j)
      vertex(px2,py2+w*.5/H*j)
      vertex(px2,py2+w*.5/H*(j+1))
      vertex(px,py+w*.5/H*(j+1))
      // vertex(px,py+w*1.5/10*j,px,py+w*1.5/10*j)
      // vertex(px2,py2+w*1.5/10*j,px2,py2+w*1.5/10*j)
      // vertex(px2,py2+w*1.5/10*(j+1),px2,py2+w*1.5/10*(j+1))
      // vertex(px,py+w*1.5/10*(j+1),px,py+w*1.5/10*(j+1))
      endShape(CLOSE)
    }
    // line(px,py,px,py+w*1.5)
  }
  // return

  strokeJoin(ROUND)
  oc=0
  for(i=0;i<R-1;i++){
    oc+=.5
    // C1=color(232,191,171)
    // C2=color(110,54,36)
    noiseVal=noise(oc)*100-50
    console.log(noiseVal)
    stroke(110+noiseVal,54+noiseVal,36+noiseVal)
    fill(232,191,171)
    drawingContext.shadowOffsetX=cos(TAU*noise(oc))*2
    drawingContext.shadowOffsetY=sin(TAU*noise(oc))*4
    drawingContext.shadowBlur=20
    drawingContext.shadowColor=color(110+noiseVal,54+noiseVal,36+noiseVal)

    beginShape()
    // console.log('start')
    for(k of [1,0]){
      for(j=0;j<M;j++){
        r=TAU/M*(k!=0 ? j : M-j-1)
        // console.log(i+k,k!=0 ? j:M-j-1)
        vertex(p[i+k][k!=0 ? j : M-j-1].l*cos(r),p[i+k][k!=0 ? j : M-j-1].l*sin(r))
        // vertex(p[i+k][j].l*cos(r),p[i+k][j].l*sin(r))
      }
      if(k==1){
        beginContour();
      }
    }
    endContour();
    endShape(CLOSE)
  }

  // for(a of p){
  //   beginShape()
  //   for(b of a){
  //     r=TAU/M*b.i
  //     vertex(b.l*cos(r),b.l*sin(r))
  //   }
  //   endShape(CLOSE)
  // }

}
