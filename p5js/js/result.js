
t = 0

preload=_=>{
  sh = loadShader('shader/shader.vert', 'shader/shader.frag')
}

windowResized=_=>{
  resizeCanvas(w=windowWidth,h=windowHeight)
}

draw = _ => {
  if(!t++){
    createCanvas(w=windowWidth,h=windowHeight,WEBGL)
    // createVRCanvas()
    gl = document.getElementById('defaultCanvas0').getContext('webgl');

    TEXSIZE=128// 重い場合は小さくする
    shTex= createGraphics(TEXSIZE,TEXSIZE,WEBGL)
    shTex.noStroke()
    blendMode(SCREEN)
    rectMode(CENTER)

    // 座標初期設定
    p= []
    for(i=0;i<16;i++){
      p[i]= {
        w: (Math.floor(i/8)%2)*2-1,
        z: (Math.floor(i/4)%2)*2-1,
        y: (Math.floor(i/2)%2)*2-1,
        x: (Math.floor(i/1)%2)*2-1,
      }
    }
    console.log(p)

    // デバッグ用: 各頂点のインデックスを可視化する
    // fontTexs=[]
    // for(i=0;i<16;i++){
    //   fontTexs[i] = createGraphics(256,256)
    //   fontTexs[i].fill(255)
    //   fontTexs[i].textSize(60)
    //   fontTexs[i].textAlign(CENTER,CENTER)
    //   fontTexs[i].text(i,128,128)
    // }

    // 各面のindex
    polygonIndexList = [
      [0,1,5,4],
      [2,3,7,6],
      [8,9,13,12],
      [10,11,15,14],

      [0,1,3,2],
      [4,5,7,6],
      [8,9,11,10],
      [12,13,15,14],

      [0,4,6,2],
      [1,5,7,3],
      [8,12,14,10],
      [9,13,15,11],

      [0,4,12,8],
      [4,5,13,12],
      [5,1,9,13],
      [1,0,8,9],

      [2,6,14,10],
      [6,7,15,14],
      [7,3,11,15],
      [3,2,10,11],

      [0,8,10,2],
      [1,9,11,3],
      [5,13,15,7],
      [4,12,14,6]
    ]

    // UI
    rotRadio = createRadio()
    rotRadio.option('rot_1')
    rotRadio.option('rot_2')
    rotRadio.option('rot_3')
    rotRadio.option('stop')
    rotRadio.style('position','absolute')
    rotRadio.style('width','70px')
    rotRadio.style('color','white')


    distSlider = createSlider(80,120,96)
    distSlider.position(100,10)

    powSlider = createSlider(50,350,130)
    powSlider.position(100,40)

    sizeSlider = createSlider(10,600,70)
    sizeSlider.position(100,70)

    colorSlider = createSlider(0,100,67)
    colorSlider.position(100,100)

    resetButton = createButton('rot reset')
    resetButton.position(10,120)
    resetButton.mousePressed(()=>{
      angle1=0
      angle2=0
      angle3=0
    })

    angle1=0
    angle2=0
    angle3=0
  }
  orbitControl()


  // clear()
  background(0)
  // translate(-width/2,-height/2)
  gl.disable(gl.DEPTH_TEST);

  // texture 設定
  shTex.shader(sh)
  sh.setUniform('t',t)
  sh.setUniform('r', [shTex.width,shTex.height])
  sh.setUniform('param',sizeSlider.value())
  sh.setUniform('hue',colorSlider.value()/100)
  sh.setUniform('dist',distSlider.value()/100)
  sh.setUniform('powVal',powSlider.value()/100)
  shTex.quad(-1,-1,1,-1,1,1,-1,1)
  texture(shTex)
  noStroke()

  S=100

  fill(255)

  // 回転を考慮した座標
  // XW超平面上で回転させる
  let np=[]
  p.forEach((o,i)=>{
    np[i]={
      w:o.w,
      z:o.z,
      y:o.y,
      x:o.x,
    }
  })

  // if (rotRadio.value()=='rot_1') {
  //   angle1+=PI/180
  // }
  // if (rotRadio.value()=='rot_2') {
  //   angle2+=PI/180
  // }
  // if (rotRadio.value()=='rot_3') {
  //   angle3+=PI/180
  // }
  // np.forEach((o, i)=>{
  //   np[i] = {
  //     w: o.x*sin(angle1)+o.w*cos(angle1),
  //     z: o.z,
  //     y: o.y,
  //     x: o.x*cos(angle1)-o.w*sin(angle1),
  //   }
  // })
  // np.forEach((o, i)=>{
  //   np[i] = {
  //     w: o.y*sin(angle2)+o.w*cos(angle2),
  //     z: o.z,
  //     y: o.y*cos(angle2)-o.w*sin(angle2),
  //     x: o.x,
  //   }
  // })
  // np.forEach((o, i)=>{
  //   np[i] = {
  //     w: o.z*sin(angle3)+o.w*cos(angle3),
  //     z: o.z*cos(angle3)-o.w*sin(angle3),
  //     y: o.y,
  //     x: o.x,
  //   }
  // })

  let tp = []
  // 描画を考慮した座標
  np.forEach((o,i)=>{
    tp[i] = {
      x: S*(o.x)*(o.w/2+1.5),
      y: S*(o.y)*(o.w/2+1.5),
      z: S*(o.z)*(o.w/2+1.5)
    }
  })

  // デバッグ用: インデックスを表示する
  // np.forEach((a,i)=>{
  //   push()
  //   translate(
  //     S*(a.x)*(a.w/2+1.5),
  //     S*(a.y)*(a.w/2+1.5),
  //     S*(a.z)*(a.w/2+1.5)
  //   )
  //   sphere(10)
  //   noFill()
  //   fill(255,0,0)
  //   texture(fontTexs[i])
  //   rect(0,0,500,500)
  //   pop()
  // })

  // 軸描画
  strokeWeight(3)
  stroke(255,0,0)
  line(0,0,0,1000,0,0)
  stroke(0,255,0)
  line(0,0,0,0,1000,0)
  stroke(0,0,255)
  line(0,0,0,0,0,1000)

  // 各面の描画
  polygonIndexList.forEach((list) => {
    texture(shTex)
    beginShape()
    shTex.quad(-1,-1,1,-1,1,1,-1,1)
    list.forEach((polygonIndex, index)=> {
      vertex(
        tp[polygonIndex].x,
        tp[polygonIndex].y,
        tp[polygonIndex].z,
        (Math.floor((index+1)/2)%2)*TEXSIZE,
        Math.floor(index/2)*TEXSIZE,
      )
    })
    endShape()
  })


}
