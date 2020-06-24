


t = 0
tf=true

preload=_=>{
  sh = loadShader('shader/shader.vert', 'shader/shader.frag')
}

windowResized=_=>{
  resizeCanvas(w=windowWidth,h=windowHeight)
}

restart =_=>{
  seed=random()*99
  t=1
  CURRENT_POLYGON_MAX=POLYGON_MAX
  CURRENT_POLYGON_MIN=POLYGON_MIN
  CURRENT_COLOR=COLOR
}

draw = _ => {
  if(!t++){
    createCanvas(w=windowWidth,h=windowHeight,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    shTex= createGraphics(256,256,WEBGL)
    shTex.noStroke()
    blendMode(SCREEN)
    seed=random()*99

    restartButton = createButton('restart')
    restartButton.position(20,20)
    restartButton.mousePressed(restart)

    CURRENT_POLYGON_MAX=8
    POLYGON_MAX=CURRENT_POLYGON_MAX
    polygonMaxSlider=createSlider(3,8,POLYGON_MAX)
    polygonMaxSlider.position(20,50)

    CURRENT_POLYGON_MIN=3
    POLYGON_MIN=CURRENT_POLYGON_MIN
    polygonMinSlider=createSlider(3,8,POLYGON_MIN)
    polygonMinSlider.position(20,80)

    CURRENT_COLOR=.5
    COLOR=CURRENT_COLOR
    colorSlider=createSlider(0,1,COLOR,.01)
    colorSlider.position(20,110)

    R=80
  }

  POLYGON_MAX=polygonMaxSlider.value()
  POLYGON_MIN=polygonMinSlider.value()
  COLOR=colorSlider.value()
  randomSeed(seed)
  if(tf==false){
    t--
  }
  clear()
  // rotateX(-mouseY/80)
  // rotateY(mouseX/80)
  // translate(mouseX-w/2,mouseY-h/2)

  gl.disable(gl.DEPTH_TEST);

  shTex.shader(sh)
  // sh.setUniform('t',t/60)
  sh.setUniform('r', [shTex.width,shTex.height])
  // sh.setUniform('param',15)
  // sh.setUniform('range',-1)
  // sh.setUniform('hue',(t/60)%1)

  // shTex.rect(0,0,sh.width,sh.height)
  // shTex.quad(-1,-1,1,-1,1,1,-1,1)
  // texture(shTex)

  noStroke()


  drawRegularPolygon=(num)=>{
    for(let i=0;i<num;i++){
      r = R / (2 * sin(PI/num))

      // fill(255)
      // noStroke()
      // circle(0,0,10)
      // stroke(255)
      // strokeWeight(5)
      // line(0,0,r,0)
      // push()
      // rotate(PI/num)
      // line(0,0,r*cos(PI/num),0)
      // pop()

      texture(shTex)
      beginShape()
      vertex(0,0,256,256)
      for(let j=0;j<2;j++){
        let x=r*1.95*cos(TAU/num*(i+j))
        let y=r*1.95*sin(TAU/num*(i+j))
        vertex(x,y,0,256*j)
      }
      endShape()
    }
  }

  drawCell=(num,next,flag)=>{
    translate(R/(2*sin(PI/num))*cos(PI/num),0)
    rotate(PI-PI/num)
    if(flag){
      drawRegularPolygon(num)
    }
    rotate(PI/num+TAU/num*(next+1))
    translate(R/(2*sin(PI/num))*cos(PI/num),0)
  }

  MAX=20
  FRAME=12
  OFFSET=Math.floor(t/8)
  COUNT=(Math.floor(t/FRAME))+1
  for(i=0;i<COUNT;i++){
    n=Math.floor(random(CURRENT_POLYGON_MIN,CURRENT_POLYGON_MAX+1))
    a=Math.floor(random(0,n-1))

    let time
    // 増加フェーズ
    if(i*FRAME < t && t <= (i+1)*FRAME){
      time=t-i*FRAME
    }
    // 停止フレーズ
    else if ((i+1)*FRAME < t && t <= (i+MAX-1)*FRAME){
      time=FRAME
    }
    // 減少フレーズ
    else if ((i+MAX-1)*FRAME < t && t <= (i+MAX)*FRAME){
      time=1+i*FRAME-t+(MAX)*FRAME
    }
    sh.setUniform('t',time/FRAME)
    sh.setUniform('param',20)
    sh.setUniform('hue',(CURRENT_COLOR+random(-1,1)*.2)%1)
    shTex.quad(-1,-1,1,-1,1,1,-1,1)
    texture(shTex)

    drawCell(n,a,i>COUNT-MAX-1)
  }

}

// keyPressed=_=>{
//   save()
// }

// mouseClicked=_=>{
//   tf=!tf
// }
