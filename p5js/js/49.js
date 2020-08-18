import p5 from "p5";


glenable=false
dc=true
t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,h=900,WEBGL)
    R=60
    N=10
    // colorMode(HSB)
  }

  // noFill()
  // stroke(255)
  normalMaterial()

  // fill(0)
  // stroke(255)

  clear()
  orbitControl()


  for(x=-N;x<=N;x++){
    for(y=-N;y<=N;y++){
      for(z=-N;z<=N;z++){
        push()
        translate(R*x,R*y,R*z)
        // if(0.01/x+y*y+z*z<t%(8*8*8))

        // fill(x*x*y*y*z*z/pow(N,3)*360/8,100,100)

        // if(x*x+y*y+z*z<t)
        // if(1*(x*x)*(y*y^t-t)/(z*z*z)>(sin(t/20)*50+50)%(pow(N,3)))
        // if(1*(x*x)*(y*y-t)/(z*z)>(sin(1/t)*100)%(pow(N,3)))
        if(1*(pow(x,4))*(pow(y,4))*(pow(z,4))<(t*t*500))
        // if(1/abs(x)+1/(y)+1/(z)>t/400)
        // if(tan(x*y*z+t/200) <3)
        box(R*.97)
        pop()
      }
    }
  }
}






















