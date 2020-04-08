c=0
draw=_=> {
  if(!c++){
    createCanvas(w=900,w)
    // w/=2
    t=textSize
    s=stroke
  }
  // fill(255)

  t(200)
  
  translate(w/2,w/2)

  s(64)
  h=120
  rect(-h,-h,h*2,h*2)
  line(-h,0,h,0)
  line(0,-h,0,h)
  // noFill()

  s(255)
  push()
  scale(.4,1)
  text('弓',-h*1.8,80)
  pop()
  t(99)
  // i=2
  // while(i--){
  //   text('可',0,90-99*i)
  // }
  text('可',0,90)
  text('可',0,0)
}

// t=0,draw=e=>{for(t++||(createCanvas(w=900,w),w/=2),textSize(200),translate(w,w),stroke(64),h=120,line(-h,0,h,0),line(0,-h,0,h),noFill(),rect(-h,-h,2*h,2*h),stroke(255),push(),scale(.4,1),text("弓",1.8*-h,80),pop(),textSize(99),i=2;i--;)text("可",0,90-99*i)};

// c=0,draw=e=>{for(c++||(createCanvas(w=900,w),w/=2,t=textSize,s=stroke),t(200),translate(w,w),s(64),h=120,rect(-h,-h,2*h,2*h),line(-h,0,h,0),line(0,-h,0,h),s(255),push(),scale(.4,1),text("弓",1.8*-h,80),pop(),t(99),i=2;i--;)text("可",0,90-99*i)}

// c=0,draw=e=>{c++||(createCanvas(w=900,w),w/=2,t=textSize,s=stroke),t(200),translate(w,w),s(64),h=120,rect(-h,-h,2*h,2*h),line(-h,0,h,0),line(0,-h,0,h),s(255),push(),scale(.4,1),text("弓",1.8*-h,80),pop(),t(99),text("可",0,90),text("可",0,0)}

c=0,draw=e=>{c++||(createCanvas(w=900,w),t=textSize,s=stroke),t(200),translate(w/2,w/2),s(64),h=120,rect(-h,-h,2*h,2*h),line(-h,0,h,0),line(0,-h,0,h),s(255),push(),scale(.4,1),text("弓",1.8*-h,80),pop(),t(99),text("可",0,90),text("可",0,0)}


