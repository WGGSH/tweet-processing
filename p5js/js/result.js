

// glenable=false
// dc=true
t = 0
draw = _ => {
  if(!t++){
    createCanvas(w=900,w,WEBGL)
    R=29
    N=9
    // p=pow
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
        // if((x*x)*(y*y^t-t)/(z*z*z)>(sin(t/20)*50+50)%(p(N,3)))
        if((x*x)*(y*y^t-t)/(z*z*z)>((sin(t/40)+1)*50)%(pow(N,3)))
        // if(1*(x*x)*(y*y-t)/(z*z)>(sin(1/t)*100-100)%(pow(N,3)))
        // if(1*(p(x,2))*(p(y,2))*(p(z,2))>((300*sin(t/30)+150)*1000))
        // if(1/abs(x)+1/(y)+1/(z)>t/400)
        // if(tan(x*y*z+t/200) <3)
        box(R*.97)
        pop()
      }
    }
  }
}

t=0,draw=(r=>{for(t++||(createCanvas(w=900,w,WEBGL),R=29,N=9),normalMaterial(),clear(),orbitControl(),x=-N;x<=N;x++)for(y=-N;y<=N;y++)for(z=-N;z<=N;z++)push(),translate(R*x,R*y,R*z),x*x*(y*y^t-t)/(z*z*z)>50*(sin(t/40)+1)%pow(N,3)&&box(.97*R),pop()})
