"use client";

import * as THREE from "three";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Three3DParticles = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight />
        <Particles />
      </Canvas>
    </div>
  );
};

function Particles() {
  const ref = useRef<any>();
  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00FFFF"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default Three3DParticles;
