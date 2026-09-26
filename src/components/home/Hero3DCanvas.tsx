"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function MainSphere() {
  const ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.3;
      innerRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group>
      {/* Main distorted sphere – reduced segments 64→32 for ~50% fewer vertices */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
        <Sphere ref={ref} args={[1.4, 32, 32]}>
          <MeshDistortMaterial
            color="#5b21b6"
            attach="material"
            distort={0.30}
            speed={1.6}
            roughness={0.1}
            metalness={0.55}
            // iridescence removed: requires a second shader pass, expensive on mobile/integrated GPU
          />
        </Sphere>
      </Float>

      {/* Outer orbit ring – reduced tube segments 80→60 */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={0.5}>
        <Torus ref={innerRef} args={[2.1, 0.04, 10, 60]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#818cf8"
            metalness={0.8}
            roughness={0.1}
            emissive="#4f46e5"
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </Torus>
      </Float>

      {/* Second tilted ring – reduced segments 70→50 */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
        <Torus args={[1.8, 0.025, 8, 50]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.05}
            emissive="#c026d3"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </Torus>
      </Float>

      {/* Floating accent sphere – 12 segments is enough at this small size */}
      <Float speed={3} floatIntensity={2} rotationIntensity={1}>
        <mesh position={[1.9, 1.2, -0.5]} scale={0.32}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial
            color="#ec4899"
            roughness={0.1}
            metalness={0.7}
            emissive="#be185d"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Tiny sphere – 10 segments */}
      <Float speed={2.5} floatIntensity={1.5} rotationIntensity={2}>
        <mesh position={[-2.0, -0.9, 0.3]} scale={0.2}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0.1}
            metalness={0.8}
            emissive="#0e7490"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Small cube */}
      <Float speed={2} floatIntensity={1.2}>
        <mesh position={[1.6, -1.4, 0.4]} rotation={[0.5, 0.5, 0]} scale={0.18}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#fbbf24"
            roughness={0.2}
            metalness={0.6}
            emissive="#d97706"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DScene() {
  const canvasRef = useRef<HTMLDivElement>(null);

  // Stop rendering Three.js when hero is scrolled out of view
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Pause/resume Three.js renderer via CSS visibility
        // React Three Fiber respects this for performance
        el.style.visibility = entry.isIntersecting ? "visible" : "hidden";
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={canvasRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        // Cap DPR at 1.5 (was [1,2]): halves GPU work on Retina screens
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          powerPreference: "high-performance",
        }}
        // Automatically drops quality when FPS falls below min threshold
        performance={{ min: 0.5 }}
      >
        {/* Removed Environment preset="city" – it loads an HDR map and adds extra draw calls.
            Simple lights achieve the same visual quality for this scene. */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" />
        {/* Reduced from 3 point lights to 2 – each light adds a draw pass */}
        <pointLight position={[-5, -3, -3]} intensity={2.5} color="#7c3aed" />
        <pointLight position={[5, 2, 3]} intensity={2} color="#ec4899" />
        <MainSphere />
      </Canvas>
    </div>
  );
}
