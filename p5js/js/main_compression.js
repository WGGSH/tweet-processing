function recursiveDraw(recursiveCount) {
  recursiveCount--
  if(recursiveCount<=-1){
    return
  }

  for(let i=0;i<3;i++){
    push()
    rotate(PI*2/3*i+frameCount/800)
    translate(40000/frameCount+frameCount*frameCount/2000,0)
    ellipse(0,0,frameCount+200,frameCount+200)
    recursiveDraw(recursiveCount)
    pop()
  }
}

function setup() {
  createCanvas(900,900)
}

function draw() {
  blendMode(BLEND)
  background(0)
  blendMode(DIFFERENCE)
  translate(width/2,height/2)

  recursiveDraw(3)
}

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
//   }
//
//   f(3)
// }

// t=0,draw=e=>{t++||(createCanvas(w=900,w),w/=2,blendMode(DIFFERENCE),m=translate),clear(),m(w,w),f=e=>{if(e--<1)return;let r=3;for(;r-- >0;)push(),rotate(TAU/3*r+t/800),m(4e4/t+t*t/2e3,0),circle(0,0,t+200),f(e),pop()},f(3)}
