t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=99,w)
    p=[]
    // f=Math.floor
    i=C=w*w
    // while(i-->0)p[i]=f(random(2))
    while(i-->0)p[i]=i%7<2
    // frameRate(15)
    g=(f,c,g,d)=>{g=[];e=[c+1,c,c-1,1];for(b=c*c;b--;g[b]=3==d||f[b]&&2==d,d=0)for(h in e)d+=f[b+e[h]]+f[b-e[h]];return g}
  }
  p=g(p,w)
  i=C
  while(i-->0){
    stroke(p[i]*255)
    // point(i%w,f(i/w))
    point(i%w,Math.floor(i/w))
  }
  // q=p.slice()
  // i=C
  // while(i-->0){
  //   v=0
  //   for(a of [-1,0,1])
  //     for(b of [-w,0,w])
  //       if(i+a+b>=0 && i+a+b<w*w && a+b!=0) v+=p[i+a+b]
  //   
  //   if(!p[i]&&v==3)q[i]=1
  //   if(p[i]&&(v<2||v>3))q[i]=0
  //   stroke(q[i]*255)
  //   point(i%w,f(i/w))
  // }
  // p=q
  // g(p,w,w)
}

t=0,draw=(r=>{if(!t++){for(createCanvas(w=99,w),p=[],i=C=w*w;i-- >0;)p[i]=i%7<2;g=((i,r,o,w)=>{for(o=[],e=[r+1,r,r-1,1],b=r*r;b--;o[b]=3==w||i[b]&&2==w,w=0)for(h in e)w+=i[b+e[h]]+i[b-e[h]];return o})}for(p=g(p,w),i=C;i-- >0;)stroke(255*p[i]),point(i%w,Math.floor(i/w))})
