t=0
S=120
X=0
Y=0
function mouseClicked() {
  restart()
}
function restart(){
    p=[]
    i=-1
    baseColor=random(360)
    while(i++<X*Y-1){
      p[i]={x:(i%X)*S+r(60)-30,y:Math.floor(i/X)*S+r(60)-30,c:(random(120)+baseColor)%360}
    }

}


draw=_=> {
  r=random
  if(!t++){
    // createCanvas(w=900,w)
    createCanvas(w=windowWidth,h=windowHeight)
    X=Math.floor(w/S)+2
    Y=Math.floor(h/S)+2
    // w/=2
    restart()
  }
  blendMode(BLEND)
  colorMode(RGB)
  background(243)
  colorMode(HSB)
  blendMode(BURN)
  // blendMode(ADD)

  // for(a of p){
  //   circle(a.x*90,a.y*90,20)
  // }
  // v=vertex
  // v=((f)=>{
  //   vertex(f.x,f.y)
  // })

  // scale(1.1)
  translate(-30,-30)
  i=-1
  strokeWeight(10)
  while(i++<X*Y-X-1){
    if(i%X==X-1)continue
    beginShape()
    // v(p[i].x,p[i].y)
    // v(p[i+1].x,p[i+1].y)
    // v(p[i+10].x,p[i+10].y)
    // v(p[i+9].x,p[i+9].y)

    // v(p[i])
    // v(p[i+1])
    // v(p[i+10])
    // v(p[i+9])

    // v=((f)=>{
    //   vertex(p[f].x,p[f].y)
    // })
    // v(i)
    // v(i+1)
    // v(i+10)
    // v(i+9)
    for(a of [0,1,X+1,X]){
      // v(i+a)
      vertex(p[i+a].x,p[i+a].y)
    }
    // fill(p[i].c,40,99)
    strokeJoin(ROUND)
    drawingContext.shadowBlur=10
    drawingContext.shadowOffsetX=(w-mouseX-p[i].x)/50
    drawingContext.shadowOffsetY=(w-mouseY-p[i].y)/50
    val=(pow((mouseX-p[i].x),2)+pow((mouseY-p[i].y),2))/1000
    fill(p[i].c,60-val,min(max(100-val,5),15))
    drawingContext.shadowColor=color(p[i].c,max(val*5,30),max(100+val,20))
    stroke(min(100-val*2,50))
    endShape(CLOSE)
  }
}
