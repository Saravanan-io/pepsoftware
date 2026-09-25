"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment, Torus } from "@react-three/drei";
import * as THREE from "three";

function MainSphere() {
  const ref = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
      const px = state.pointer.x * 0.3;
      const py = state.pointer.y * 0.3;
      ref.current.rotation.y += (px - ref.current.rotation.y) * 0.04;
      ref.current.rotation.x += (-py - ref.current.rotation.x) * 0.04;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.3;
      innerRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group>
      {/* Main iridescent distorted sphere */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1}>
        <Sphere ref={ref} args={[1.4, 128, 128]}>
          <MeshDistortMaterial
            color="#5b21b6"
            attach="material"
            distort={0.38}
            speed={2.0}
            roughness={0.08}
            metalness={0.6}
            clearcoat={1}
            clearcoatRoughness={0.05}
            iridescence={1.2}
            iridescenceIOR={1.8}
          />
        </Sphere>
      </Float>

      {/* Outer orbit ring */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={0.5}>
        <Torus ref={innerRef} args={[2.1, 0.04, 16, 120]} position={[0, 0, 0]}>
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

      {/* Second tilted ring */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
        <Torus args={[1.8, 0.025, 16, 100]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
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

      {/* Floating accent sphere - top right */}
      <Float speed={3} floatIntensity={2} rotationIntensity={1}>
        <mesh position={[1.9, 1.2, -0.5]} scale={0.32}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#ec4899"
            roughness={0.1}
            metalness={0.7}
            emissive="#be185d"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Floating tiny sphere - bottom left */}
      <Float speed={2.5} floatIntensity={1.5} rotationIntensity={2}>
        <mesh position={[-2.0, -0.9, 0.3]} scale={0.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            roughness={0.1}
            metalness={0.8}
            emissive="#0e7490"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* Small cube - bottom right */}
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
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 2.5]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -3, -3]} intensity={3} color="#7c3aed" />
      <pointLight position={[5, 2, 3]} intensity={2} color="#ec4899" />
      <pointLight position={[0, 5, 2]} intensity={1.5} color="#60a5fa" />
      <Environment preset="city" />
      <MainSphere />
    </Canvas>
  );
}
