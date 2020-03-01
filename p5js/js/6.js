// t=i=0
// draw=_=>{
//   if(!t++){
//     createCanvas(w=900,w)
//     w/=2
//     p=[]
//     for(;i<1200;i++){
//       p[i]={x:0,y:0,i}
//     }
//   }
//   clear()
//   blendMode(DIFFERENCE)
//   translate(w,w)
//   s=t/30
//   rotate(s)
//   for(b of p){
//     if(b.i<t*5){
//       scale(1.01)
//       a=PI/2.5*b.i-s
//       b.x+=2*cos(a)
//       b.y+=2*sin(a);
//       ellipse(b.x,b.y,3+cos(s)/1.2)
//       // [4,1].map(x=> ellipse(b.x,b.y,x))
//     }
//   }
// }


t=i=0,draw=(_=>{if(!t++)for(createCanvas(w=900,w),w/=2,p=[];i<1200;i++)p[i]={x:0,y:0,i};for(b of(clear(),blendMode(DIFFERENCE),translate(w,w),s=t/34,rotate(s),p))b.i<5*t&&(scale(1.01),a=PI/2.5*b.i-s,b.x+=cos(a),b.y+=sin(a),ellipse(b.x,b.y,2+cos(s)/4))})

// t=i=0,draw=(e=>{if(!t++)for(createCanvas(w=900,w),w/=2,p=[];i<1200;i++)p[i]={x:0,y:0,i:i};for(b of(clear(),blendMode(DIFFERENCE),translate(w,w),rotate(t/30),p))b.i<3*t&&(scale(1.01),a=PI/1.5*b.i-t/30,b.x+=2*cos(a),b.y+=2*sin(a),[4,1].map(a=>ellipse(b.x,b.y,a)))});

// t=i=0,draw=(e=>{if(!t++)for(createCanvas(w=900,w),w/=2,p=[];i<1200;i++)p[i]={x:0,y:0,i:i};for(b of(clear(),blendMode(DIFFERENCE),translate(w,w),rotate(-t/26),p))b.i<6*t&&(scale(1.01),a=PI/3*b.i+t/26,b.x+=2*cos(a),b.y+=2*sin(a),ellipse(b.x,b.y,3))})
