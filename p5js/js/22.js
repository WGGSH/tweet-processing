t=0

drawSegment = flag => {
  if (flag){
    blendMode(ADD)
    noFill()
    stroke(255)
    drawingContext.shadowBlur=3
    drawingContext.shadowColor=color(50,255,150,250)
  } else {
    return
  }
  beginShape()
  vertex(-S/5*2,0)
  vertex(-S/10*3,-S/10)
  vertex(S/10*3,-S/10)
  vertex(S/5*2,0)
  vertex(S/10*3,S/10)
  vertex(-S/10*3,S/10)
  endShape(CLOSE)
}

draw7Segments = (seg) => {
  for(i=0;i<7;i++){
    val = seg%2;
    seg = Math.floor(seg/2)
    push()
    scale(-1,-1)
    switch(i){
      case 0:
        translate(0,-40)
        break
      case 1:
        translate(-20,-20)
        rotate(-PI/2)
        break
      case 2:
        translate(20,-20)
        rotate(PI/2)
        break
      case 3:
        break;
      case 4:
        translate(-20,20)
        rotate(PI/2)
        break;
      case 5:
        translate(20,20)
        rotate(PI/2)
        break;
      case 6:
        translate(0,40)
        break;
    }
    drawSegment(val)
    pop()
  }
}


draw=_=> {
  if(!t++){
    createCanvas(w=900,w)
    w/=2
    S=50

    segmentList = [
      0b1110111, // 0
      0b0010010, // 1
      0b1011101, // 2
      0b1011011, // 3
      0b0111010, // 4
      0b1101011, // 5
      0b1101111, // 6
      0b1010010, // 7
      0b1111111, // 8
      0b1111011, // 9
    ]
  }


  now = new Date()
  year = String(now.getFullYear()).padStart(4,'0').split('')
  month = String(now.getMonth()+1).padStart(2,'0').split('')
  date = String(now.getDate()).padStart(2,'0').split('')
  hour = String(now.getHours()).padStart(2,'0').split('')
  minute = String(now.getMinutes()).padStart(2,'0').split('')
  second = String(now.getSeconds()).padStart(2,'0').split('')

  translate(S,w)

  blendMode(BLEND)

  background(0,15)
  blendMode(ADD)

  push()

  year.forEach(d => {
    draw7Segments(segmentList[d])
    translate(S,0)
  })

  translate(S/2,0)


  month.forEach(d => {
    draw7Segments(segmentList[d])
    translate(S,0)
  })

  translate(S/2,0)

  date.forEach(d => {
    draw7Segments(segmentList[d])
    translate(S,0)
  })

  translate(S,0)

  hour.forEach(d => {
    draw7Segments(segmentList[d])
    translate(S,0)
  })

  translate(S/2,0)
  minute.forEach(d => {
    draw7Segments(segmentList[d])
    translate(S,0)
  })

  translate(S/2,0)
  second.forEach(d => {
    draw7Segments(segmentList[d])
    translate(S,0)
  })
}
