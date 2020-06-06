precision highp float;
varying vec2 vPos;

uniform float t;
uniform vec2 r;
const float PI  = 3.141592653589793;
const float PI2 = PI * 2.;

vec3 hsb2rgb(float h, float s, float v) {
  return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

void main () {
  vec2 p = -1. + 2. * gl_FragCoord.xy / r.xy;
  /* gl_FragColor = vec4(uv.x/2.+.5,uv.y/2.+.5,sin(t)/2.+.5,1.); */
  float h = 0.;
  float s = .9-cos(PI*p.x*4.)/3.-.0;
  float b = cos(PI*p.x*4.)/2.+.5-abs(p.y);
  if(abs(p.x)>.3){
    b=0.;
  }

  gl_FragColor = vec4(p.x,p.y,0.,1.);
}
