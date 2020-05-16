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
  shTex.shader(sh)
  sh.setUniform('t',t/60)
  sh.setUniform('r', [256,256])
  shTex.quad(-1, -1, 1, -1, 1, 1, -1, 1);

  stroke(255)
  noStroke()
  texture(shTex)
  gl.disable(gl.DEPTH_TEST);


  drawBinaryTree = (i) => {
    if(i<=0){
      return
    }
    push()
    W=500
    M=8
    L=130
    FA = 5
    // rotateYReset() // maybe doesn't work good
    // texture(img[i<M/2 ? 0 : 1])
    // let rl = random(20)-10
    let rl = 20
    rect(-W/2/M*i,-(L/M+rl)*i,W/M*i,(L/M+rl)*i)
    pop()

    for(let j=0;j<3;j++){
      push()
      translate(0,-(L/M+rl)*i,0)
      // myRotateY(TAU/3*j+random(TAU/32)*(sin(t/30)/2+.5))
      rotateY(TAU/3*j+sin(t/30*0)/2+.5)
      rotateX(PI/FA+sin(t/30*0)/2+.5)
      drawBinaryTree(i-1)
      // myPop()
      pop()

    }
    return
  }


  drawBinaryTree(5)
  // box(200)
  pop()
}
