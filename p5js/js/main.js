t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    R=30
    W = 15
    p = []
    x = W
    while(x-->0){
      p[x]=[]
      y = W
      while(y-->0){
        p[x][y] = []
        z = W
        while(z-->0){
          p[x][y][z] = random(60)<10
        }
      }
    }
  }

  clear()
  // orbitControl()
  rotateX(-mouseY/300)
  rotateY(mouseX/300)

  blendMode(SCREEN)

  colorMode(HSB,360,100,100)

  gl.disable(gl.DEPTH_TEST);
  translate(-R*W/2,-R*W/2,-R*W/2)
  p.forEach((square, index_1) => {
    square.forEach((line, index_2) => {
      line.forEach((cell, index_3) => {
        push()
        translate(index_1*R,index_2*R,index_3*R)
        rotateY(-mouseX/300)
        rotateX(mouseY/300)
        ax = (index_1 - W/2)/W*2
        ay = (index_2 - W/2)/W*2
        az = (index_3 - W/2)/W*2
        if(cell){
          fill((ax*ax+ay*ay+az*az)*120,50,100,.4)
          rect(0,0,R,R)
        }
        pop()
      })
    })
  })
}
