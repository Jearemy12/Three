"use client";

import Three3DParticles from "../components/Three3DParticles";

const Feature = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4">
      {/* <Three3DParticles /> */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md shadow-md rounded-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-lg text-gray-200">
          Explore this interactive 3D particle animation powered by Three.js and React Three Fiber. 
        </p>
      </div>
    </div>
  );
};

export default Feature;
