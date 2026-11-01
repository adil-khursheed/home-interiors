"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uPointer;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 pointer = (uv - uPointer) * vec2(aspect, 1.0);
    float distanceToLight = length(pointer);

    float glow = smoothstep(0.64, 0.0, distanceToLight);
    glow = pow(glow, 1.5);

    float drift = 0.5 + 0.5 * sin(uTime * 0.14 + uv.x * 2.4 + uv.y * 1.3);
    float beam = smoothstep(0.0, 0.42, uv.y) * (1.0 - smoothstep(0.56, 1.0, uv.y));
    float band = exp(-pow((uv.x + uv.y * 0.42 - (0.34 + 0.1 * sin(uTime * 0.07))) * 3.6, 2.0));
    float grain = hash21(uv * uResolution * 0.8 + vec2(uTime * 29.0, uTime * 17.0)) - 0.5;

    float alpha = glow * (0.15 + drift * 0.045) * beam;
    alpha += band * 0.022;
    alpha += grain * 0.028;
    alpha = clamp(alpha, 0.0, 1.0);

    vec3 warm = mix(vec3(1.0, 0.8, 0.56), vec3(1.0, 0.95, 0.84), glow);
    gl_FragColor = vec4(warm, alpha);
  }
`;

export function HeroLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest<HTMLElement>(".hero");
    if (!canvas || !section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const target = new THREE.Vector2(0.64, 0.44);
    const current = target.clone();
    const resolution = new THREE.Vector2(1, 1);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: current },
        uResolution: { value: resolution },
      },
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      resolution.set(width, height);
    };

    resize();

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      target.set(
        (event.clientX - rect.left) / rect.width,
        1 - (event.clientY - rect.top) / rect.height,
      );
    };

    section.addEventListener("pointermove", handlePointer);

    const clock = new THREE.Clock();
    let frame = 0;

    const render = () => {
      const delta = Math.min(clock.getDelta(), 0.05);
      current.lerp(target, Math.min(1, delta * 3.4));
      material.uniforms.uTime.value += delta;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      section.removeEventListener("pointermove", handlePointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-light" aria-hidden="true" />;
}
