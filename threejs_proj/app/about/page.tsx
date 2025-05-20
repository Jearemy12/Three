"use client";

import { CurvedCarousel } from "../components/ThreeSlider";


const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Page</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Welcome to the About Page. This is a beautifully styled and responsive
          layout using Tailwind CSS. Below is a 3D curved image slider made with Three.js.
        </p>
        <CurvedCarousel />
      </div>
    </div>
  );
};

export default About;
