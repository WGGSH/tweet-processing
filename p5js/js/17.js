t=0
draw=_=> {
  if(!t++){
    createCanvas(CANVAS_SIZE=900,CANVAS_SIZE)
    PARAM_1=13 // 中心 - 端までの分割数
    PARAM_2=38 // 1周の分割数
    PARAM_TIME = 1/100000 * 500 // アニメーション周期
    MAIN_COLOR = color(255,255,80)
    p=[]
    noFill()
    blendMode(ADD)
  }

  i=-1
  ti = sin(t*PARAM_TIME-TAU/8) > 0 ? sin(t*PARAM_TIME-TAU/8) : 0

  while(i++<PARAM_1-1){
    p[i]=[]
    j=-1
    while(j++<PARAM_2-1){
      a=TAU/PARAM_2*j+t/100
      p[i][j]={
        x:(((i*i*i)/50)*PARAM_2+PARAM_2*4*(1-ti))*cos(a),
        y:(((i*i*i)/150)*PARAM_2+PARAM_2*4*(1-ti))*sin(a)-(i*30)*ti+PARAM_1*35*ti
      }
    }
  }

  clear()

  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  
  strokeWeight(5-ti*4.5)
  drawingContext.shadowColor = MAIN_COLOR
  drawingContext.shadowBlur = 30
  drawingContext.shadowOffsetY = -ti*10

  i=-1
  for(i=0;i<PARAM_1-1;i++){
    for(j=0;j<PARAM_2;j++){
      if((i+j) % 2 < 1){
        stroke(MAIN_COLOR)
      }else{
        stroke(0,0)
      }

      beginShape()
      vertex(p[i][j].x,p[i][j].y)
      vertex(p[i+1][j].x,p[i+1][j].y)
      vertex(p[i+1][(j+1)%PARAM_2].x,p[i+1][(j+1)%PARAM_2].y)
      vertex(p[i][(j+1)%PARAM_2].x,p[i][(j+1)%PARAM_2].y)
      endShape()
    }
  }

}
