t = 0

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
    textureMode(IMAGE)
  }
  clear()
  sh.setUniform('t',t/60)
  sh.setUniform('r', [w,h])

  noStroke()
  shader(sh)
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
}
