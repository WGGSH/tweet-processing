// t = 0
//
// draw = _ => {
//   if(!t++){
//     createCanvas(w=900,w)
//     w/=2
//
//     blendMode(DIFFERENCE)
//     m=translate
//   }
//   clear()
//
//   m(w,w)
//
//   f=(i)=>{
//     if(i--<1)return
//
//     // push()
//     // rotate(t/70)
//     // circle(0,0,50)
//     // translate(100,0)
//     let j=3
//     while(j-->0){
//       push()
//       rotate(TAU/3*j+t/800)
//       m(40000/t+t*t/2000,0)
//       circle(0,0,t+200)
//       // rect(-t/2,-t/2,t,t)
//       f(i)
//       pop()
//     }
//
//     // pop()
//   }
//
//   f(3)
// }
//
t=0,draw=e=>{t++||(createCanvas(w=900,w),w/=2,blendMode(DIFFERENCE),m=translate),clear(),m(w,w),f=e=>{if(e--<1)return;let r=3;for(;r-- >0;)push(),rotate(TAU/3*r+t/800),m(4e4/t+t*t/2e3,0),circle(0,0,t+200),f(e),pop()},f(3)}
