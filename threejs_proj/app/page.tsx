"use client";

import Navbar from "./components/Navbar";
import Canvas from "./components/Canvas"; // If you're using this
import ThreeScene from "./components/Threescene"; // Replace or remove if not needed

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
          <p className="text-lg text-gray-600 mb-6">
            This is your main landing area. You can include additional components like banners, animations, or 3D models below.
          </p>

          {/* Optional: Show 3D scene if you're using Three.js */}
          <div className="mt-8">
            <ThreeScene />
          </div>
        </div>
      </main>
    </>
  );
}
