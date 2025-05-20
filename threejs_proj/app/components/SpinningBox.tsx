"use client";
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function SpinningBox() {
  const meshRef = useRef();

  const textures = useLoader(THREE.TextureLoader, [
    "/images/computer.png",
    "/images/city.jpeg",
    "/images/mobile.jpeg",
    "/images/sky.jpeg",
    "/images/spring2.jpeg",
    "/images/red2.jpg",
  ]);

  // Improve texture quality
  textures.forEach((texture) => {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 16; // Enable anisotropic filtering
    texture.generateMipmaps = false; // Optional: disable mipmaps to prevent blurring
  });

  const materials = textures.map(
    (texture) => new THREE.MeshBasicMaterial({ map: texture })
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} material={materials} scale={[2.5, 2.5, 2.5]}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}
