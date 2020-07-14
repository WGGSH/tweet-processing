precision highp float;
varying vec2 vPos;

uniform float t;
uniform vec2 r;
uniform float param;
uniform float hue;
uniform float dist;
uniform float powVal;

const float PI  = 3.141592653589793;
const float PI2 = PI * 2.;


// ref: https://qiita.com/keim_at_si/items/c2d1afd6443f3040e900
vec3 hsb2rgb(float h, float s, float b) {
  return ((clamp(abs(fract(h+vec3(0,2,1)/3.)*6.-3.)-1.,0.,1.)-1.)*s+1.)*b;
}

//  https://qiita.com/7CIT/items/fe33b9b341b9918b6c3d#%E8%A7%92%E4%B8%B8%E9%95%B7%E6%96%B9%E5%BD%A2
float roundrect(vec2 p, vec2 size, float radius){
  vec2 d = abs(p) - size + radius;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0))-radius;
}

void main () {
  vec2 p = (gl_FragCoord.xy * 2.0 - r) / min(r.x, r.y);
  float val=0.;
  val=pow(abs(1./roundrect(p, vec2(dist), 0.2)),powVal)/param;

  gl_FragColor = vec4(hsb2rgb(hue,1.5-val/5.,val),1.);
}
