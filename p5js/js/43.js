import p5 from "p5";

t=0

draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    // w/=2
    // blendMode(DIFFERENCE)
    // drawingContext.shadowBlur=1
    // drawingContext.shadowColor=color(10,0,0)
    // noLoop()
    // background(255)
    blendMode(DIFFERENCE)
    // noFill()
    // stroke(0)
    // strokeWeight(100)
    // rectMode(CENTER)
  }
  // if(t==2){
  // alert('')
  //
  // }
  // clear()
  // translate(w,w)
  // rotate(t/20)
  // translate(-w,-w)
  // stroke(2,3,0)
  circle(mouseX,mouseY,w/3)
  // rect(w/2,w/2,w*sin(PI/80*t),w*sin(PI/90*t))
  // line (w/2, w/2, w/2+w*sin(PI/80*t),w/2+w*cos(PI/80*t))
  // circle(w,w,tan(PI/180*t)*2)
  // line(w,w,w+sin(t*t/30),w)
  // copy(0,0,w*2,w*2,sin(t/10)*1,cos(t/10)*1,w*2.00,w*2.00)
  // copy(0,0,w*2,w*2,5,5,w*2.00,w*2.00)
  // i=4
  // while(i-->0){
  // }
  S=50*cos(t/90)
  copy(0,0,w,w,-S,-S,w+S*2,w+S*2)
  // copy(0,0,w,w,10,10,w-20,w-20)
  // copy(w/4,w/4,w/2,w/2,w/4-20,w/4-20,w/2+40,w/2+40)
  // copy(0,0,w*2,w*2,0,0,w*2.00,w*1.90)
  // copy(0,0,w*2,w*2,0,0,w*2.00,w*2.10)
  // copy(0,0,w*2,w*2,0,0,w*1.90,w*2.00)
  // copy(0,0,w*2,w*2,0,0,w*2.10,w*2.00)
}

// t=0,draw=e=>{t++||(createCanvas(w=900,w),w/=2,blendMode(DIFFERENCE)),2==t&&alert(""),noFill(),stroke(255),strokeWeight(5),rectMode(CENTER),rect(w,w,2*w*sin(PI/80*t),2*w*sin(PI/90*t))}

t=0
draw=_=>{
  if(!t++){
    createCanvas(w=900,w)
    blendMode(DIFFERENCE)
  }
  circle(mouseX,mouseY,w/3)
  S=50*cos(t/90)
  copy(0,0,w,w,-S,-S,w+S*2,w+S*2)
}
