precision highp float;
varying vec2 vPos;

uniform float t;
uniform vec2 r;

vec3 hsb2rgb(float h, float s, float v) {
  return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

void main () {
  vec2 p = -1. + 2. * gl_FragCoord.xy / r.xy;
  /* gl_FragColor = vec4(uv.x/2.+.5,uv.y/2.+.5,sin(t)/2.+.5,1.); */
  float h = .8;
  float s = 1./(abs(p.x)+abs(p.y))*0.5;
  float b = (abs(p.x)+abs(p.y))/1.;
  if(abs(p.x)<.8 && abs(p.y)<.8){
    b=0.;
  }

  gl_FragColor = vec4(hsb2rgb(h,s,b),0.5);
}
