"use client";
import { Canvas } from "@react-three/fiber";
import SpinningBox from "./SpinningBox";

export default function ThreeScene() {
  return (
    <Canvas style={{ height: "800px", width: "100%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SpinningBox /> {/* ✅ Inside Canvas */}
    </Canvas>
  );
}
