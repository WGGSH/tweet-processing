t=0
draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
    colorMode(HSB,360,100,100)
    w/=2

    img = createGraphics(l=400,l)
    img.colorMode(HSB,360,100,100)
    h=random()*90+10,s=60
    img.fill(h,s,20)
    img.stroke(h,s,100)
    img.textSize(30)
    img.translate(l/2,l/2)
    img.drawingContext.shadowColor=color(h,s,100)
    img.drawingContext.shadowBlur=10
    img.scale(1,6)
    img.rotate(PI/8*7)
    img.translate(-10,23)
    img.shearX(random(2,3)/(5+random(5)))
    img.text('イ',0,0)

    imageMode(CENTER)
    seed = Math.floor(random(100))
    offset = 0
  }
  randomSeed(seed) // リスタートするまでの間はseedが固定される
  clear()

  image(img,w-l/3,w*2-l/3) // サンプル用「イ」の描画

  translate(w,w*1.5) // 原点をX軸中央,Y軸画面下部に

  // 再帰的に二分木の座標を作る
  f=(i)=>{
    if(i<=0)return
    image(img,0,0)

    push()
    translate(0,-88+random(20))
    offset+=.000006
    rotate(PI/9+TAU/180*1*(random(-1,1)+noise(offset)*1-.5)) // 木の広がり具合
    f(i-1)
    pop()

    push()
    translate(0,-88+random(20))
    rotate(-PI/9+TAU/180*4*random(-1,1)-noise(offset)*.2)
    f(i-1)
    pop()
  }
  rotate(TAU/180*4*random(-1,1))
  f(8) // 8: 再帰数 大きくしすぎると重い
}

function mousePressed(){
  loop()
  t=0
}
