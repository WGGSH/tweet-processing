setup=f=>{
  createCanvas(w=300,w,WEBGL)
  // for(i=0;i<16;i++){
  //   console.log(i%2,i&1)
    // console.log(i%8<4,i&4)
  // }
}
t=0
draw=f=>{
  background(10)
  stroke(255)
  rotateY(t+=.01)
  scale(96,28,9)
  for(i=0;i<16;i++){
    for(j=i;j<16;j++){
      // a=i^j
      // if(!(a==1||a==2||a==4||a==8))continue
      // if(a!=1&&a!=2&&a!=4&&a!=8)continue
      if(![1,2,4,8].includes(i^j))continue
      line(
        i%2+(i&4)*sin(t),(i&2)+(i&4)*cos(t),i&8,
        j%2+(j&4)*sin(t),(j&2)+(j&4)*cos(t),j&8)
    }
  }
}
