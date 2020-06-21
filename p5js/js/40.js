


t = 0
tf=true

preload=_=>{
  sh = loadShader('shader/shader.vert', 'shader/shader.frag')
}

windowResized=_=>{
  resizeCanvas(w=windowWidth,h=windowHeight)
}

draw = _ => {
  if(!t++){
    c = createCanvas(w=windowWidth,h=windowHeight,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    // theShader=loadShader('shader/shader.vert', 'shader/shader.frag')
    shTex= createGraphics(256,256,WEBGL)
    shTex.noStroke()
    // shader(sh)
    // textureMode(IMAGE)
    blendMode(SCREEN)
    seed=random()*99
  }
  randomSeed(seed)
  if(tf==false){
    t--
  }
  clear()
  rotateX(-mouseY/80)
  rotateY(mouseX/80)
  gl.disable(gl.DEPTH_TEST);
  shTex.shader(sh)
  sh.setUniform('t',t/60)
  sh.setUniform('r', [shTex.width,shTex.height])
  sh.setUniform('param',30)
  sh.setUniform('range',1)
  sh.setUniform('hue',1)

  // shTex.rect(0,0,sh.width,sh.height)
  shTex.quad(-1,-1,1,-1,1,1,-1,1)
  texture(shTex)

  noStroke()
  // shader(sh)
  // quad(-1, -1, 1, -1, 1, 1, -1, 1);
  // fill(255)
  // rect(800,0,500,500)

  // for (let i = 0; i < 12; ++i) {
  //   rotate(PI/12*t/80)
  //   beginShape()
  //   vertex(0,0,0,0)
  //   vertex(500,0,256,0)
  //   vertex(0,500,0,256)
  //   endShape()
  // }
  S=(8+5*sin(t/80))
  // S=30-abs(tan(t/180))+8
  // if(S>50)S=50
  // if(S<8)S=8
  // console.log(S)
  for(k=0;k<7;k++){
    rotateX(TAU/7)
    for(i=0;i<S;i++){
      // rotateZ(TAU/S/5)
      // sh.setUniform('hue',1)
      // sh.setUniform('hue',random(0.2,.5))
      sh.setUniform('hue',(1/S*i)%1)
      shTex.quad(-1,-1,1,-1,1,1,-1,1)
      texture(shTex)
      beginShape()
      vertex(0,0,256,256)
      for(j=0;j<2;j++){
        x=h/2*cos(TAU/S*(i+j*15))
        y=h/2*sin(TAU/S*(i+j*15))
        vertex(x,y,0,256*j)
      }
      endShape()
    }
  }
}

// keyPressed=_=>{
//   save()
// }

mouseClicked=_=>{
  tf=!tf
}
