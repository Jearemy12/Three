// components/MyCanvas.js
"use client";
import { useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // make sure canvas is not null
  
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // make sure context is available
  
    ctx.fillStyle = "green";
    ctx.fillRect(20, 20, 150, 100);
  }, []);
  

  return (
    <>
      <canvas ref={canvasRef} width={300} height={150} />
    </>
  ) 
};
