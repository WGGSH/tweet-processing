t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,h=900,WEBGL)
    gl = document.getElementById('defaultCanvas0').getContext('webgl');
  }
}
