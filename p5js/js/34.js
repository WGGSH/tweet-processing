t = 0

preload=_=>{
  sh = loadShader('shader/shader.vert', 'shader/shader.frag')
}

draw = _ => {
  if(!t++){
    c = createCanvas(w=900,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    // theShader=loadShader('shader/shader.vert', 'shader/shader.frag')
    shTex= createGraphics(256,256,WEBGL)
    shTex.noStroke()
    // shaderTexture.noStroke()
    // shaderTexture.shader(theShader)
    // theShader.setUniform('p',[width,height])
    // shader(sh)
    textureMode(IMAGE)
  }
  clear()
  blendMode(SCREEN)
  push()
  // orbitControl()
  rotateX(-mouseY/500)
  rotateY(mouseX/500)
  shTex.clear()
  // shTex.background(0)
  shTex.shader(sh)
  // shTex.rotate(t/20)
  sh.setUniform('t',t/60)
  sh.setUniform('r', [256,256])
  // shTex.rect(0,0,256,256)
  // shTex.circle(0,0,256)
  // shTex.rect(0,0,width,height)
  shTex.quad(-1, -1, 1, -1, 1, 1, -1, 1);

  stroke(255)
  noStroke()
  texture(shTex)
  gl.disable(gl.DEPTH_TEST);
  // fill(255)
  // rect(0,0,w,w)
  box(200)
  // sphere(200)
  pop()
  // image(get(),0,0)
  // filter(BLUR,3)
  // rect(0,0,100,100)
  // b=get()
  // imageMode(CENTER)
  // b.resize(w/4,w/4)
  // b.resize(w*1.1,w*1.1)
  // for(i=0;i<5;i++){
  //   image(b,20*cos(TAU/5*i),20*sin(TAU/5*i))
  // }
  // for(i=0;i<8;i++){
  //   x = 150*cos(t/30+TAU/8*i)
  //   y = 150*sin(t/30+TAU/8*i)
  //   image(c,-w/2+x,-w/2+y)
  // }
}
