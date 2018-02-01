// Author: Khanh Hua
// Title: Garden Hose

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float WIDTH = 0.016;
float BASE_FREQ = 14.144;

float wave(vec2 st) {
    float y = st.y;
    float x = st.x;
    return sin(pow(x - 3.264, 2.692) + BASE_FREQ * u_time * PI);
}

float parabole(vec2 st, float strength) {
    float x = st.x, y = st.y;

    float fx = -0.596 + 1.004*y + (strength * x * x + -0.100*x) * 8.140;
    //    fx *= (10.);

    return wave(st) * smoothstep(-WIDTH,0.,fx) + smoothstep(fx, fx+WIDTH, WIDTH) - 1.;
}

float noise() {
    return 0.01*sin(BASE_FREQ * u_time);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.);
    color = vec3(parabole(st, 0.192 + noise()));
    color = vec3(parabole(st, 0.176 + noise()));
    color += vec3(parabole(st, 0.168 + noise()));
    color += vec3(parabole(st, 0.184 + noise()));
    color += vec3(parabole(st, 0.232 + noise()));
    color += vec3(parabole(st, 0.136 + noise()));
    color += vec3(parabole(st, 0.168 + noise()));

    gl_FragColor = vec4(color,1.0);
}
