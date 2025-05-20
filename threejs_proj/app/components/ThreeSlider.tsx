"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const imagePaths = [
  "/images/computer.png",
  "/images/city.jpeg",
  "/images/mobile.jpeg",
  "/images/sky.jpeg",
  "/images/spring2.jpeg",
  "/images/red2.jpg",
];

function Carousel() {
  const groupRef = useRef();
  const textures = useLoader(THREE.TextureLoader, imagePaths);
  const radius = 5;
  const angleStep = (2 * Math.PI) / textures.length;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust rotation speed as needed
    }
  });

  return (
    <group ref={groupRef}>
      {textures.map((texture, index) => {
        const angle = index * angleStep;
        const x = radius * Math.sin(angle);
        const z = radius * Math.cos(angle);
        return (
          <mesh key={index} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <planeGeometry args={[2, 3]} />
            <meshBasicMaterial map={texture} />
          </mesh>
        );
      })}
    </group>
  );
}

export function CurvedCarousel() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Carousel />
      </Canvas>
    </div>
  );
}
