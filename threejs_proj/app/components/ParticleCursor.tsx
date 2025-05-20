"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function ParticleCursor() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
}

function Particles() {
  const ref = useRef<any>();
  const count = 5000;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.mouse.y * 0.2;
      ref.current.rotation.y = state.mouse.x * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}
