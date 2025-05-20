"use client";
import ParticleCursor from "../components/ParticleCursor";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 overflow-hidden">
      {/* <ParticleCursor /> */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-white mb-4">Contact Page</h1>
        <p className="text-gray-200 text-lg leading-relaxed">
          If you have any questions or inquiries, feel free to reach out. You
          can add a contact form here or provide your contact information.
        </p>
      </div>
    </div>
  );
};

export default Contact;
