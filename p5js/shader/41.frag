precision highp float;
varying vec2 vPos;

uniform float t;
uniform vec2 r;
uniform float param;
uniform float hue;
const float PI  = 3.141592653589793;
const float PI2 = PI * 2.;

vec3 hsb2rgb(float h, float s, float v) {
  return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*v;
}

void main () {
  vec2 p = -1. + 2. * gl_FragCoord.xy / r.xy;
  /* float s = sin(PI/2.*(1.-t)); */
  /* float c = cos(PI/2.*(1.-t)); */
  /* mat2 m = mat2(c,s,-s,c); */
  /* p *=m; */
  /* gl_FragColor = vec4(uv.x/2.+.5,uv.y/2.+.5,sin(t)/2.+.5,1.); */
  /* float h = 0.; */
  /* float s = .9-cos(PI*p.x*4.)/3.-.0; */
  /* float b = cos(PI*p.x*4.)/2.+.5-abs(p.y); */
  /* float b = 1./abs(.5-p.x)/200. + 1./abs(.5+p.x)/200.; */
  float b =
    /* pow(1.0/abs(-t*2.+1.0-p.x)/param,1.); */
    pow(1.0/abs(-t*1.0+1.0-p.x)/param,1.);
    /* pow(1./abs(-0.5-p.x)/param,2.0); */
    /* pow(1./abs(1.-p.y)/param,1.0)+ */
    /* pow(1./abs(1.+p.y)/150.,1.0); */
    /* pow(1./abs(p.x-p.y)/param,1.0); */
    /* pow(1./abs(1.-p.x)/200.,0.5)+ */
    /* pow(1./abs(1.-p.x)/200.,0.5)+ */
  /* if(abs(p.x)>.3){ */
  /*   b=0.; */
  /* } */
  /* if (b<.1){ */
  /*   b=0.; */
  /* } */

  /* gl_FragColor = vec4(vec3(b,b/3.,b),1.); */
  /* gl_FragColor = vec4(hsb2rgb(.8,1.-b/5.,b),1.); */
  gl_FragColor = vec4(hsb2rgb(hue,0.8-b/15.,b),1.);
}
