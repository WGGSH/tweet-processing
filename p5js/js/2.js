//
//
// t=0
// b=900
// draw=f=>{
//   if(!t){
//     createCanvas(b,b)
//   }
//   blendMode(BLEND)
//   background(0,9)
//   blendMode(ADD)
//   translate(b/2,b/2)
//   // scale(5,5)
//   noFill()
//
//   t+=.003
//   i=0
//   while(i++<b){
//     s=sin(t*.27+i)
//     c=cos(t+i)
//     // stroke(b/7,b*(c+.8),b*(s+.8),5)
//     // stroke(b*(s+.8),b/7,b*(c+.8),5)
//     stroke(b*(c+.8),b/7,b*(s+.8),7)
//     a=b*c
//     bezier(
//       b*c,b*s,
//       a*c,a*c,a*s,a,
//       b*s,b*sin(t/10)*c)
//   }
// }

t=0,b=900,draw=(e=>{for(t||createCanvas(b,b),blendMode(BLEND),background(0,9),blendMode(ADD),translate(b/2,b/2),noFill(),t+=.003,i=0;i++<b;)s=sin(.27*t+i),c=cos(t+i),stroke(b*(c+.8),b/7,b*(s+.8),7),a=b*c,bezier(b*c,b*s,a*c,a*c,a*s,a,b*s,b*sin(t/10)*c)});
