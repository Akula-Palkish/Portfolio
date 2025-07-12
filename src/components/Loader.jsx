import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1d232a] text-white">
      {/* Logo or Avatar */}
      <div className="mb-6 animate-bounce">
        <div className="w-20 h-20 rounded-full bg-[#605dff] flex items-center justify-center shadow-2xl">
          <span className="text-4xl font-extrabold">PA</span>
        </div>
      </div>
      {/* Animated Spinner */}
      <div className="relative w-16 h-16 flex items-center justify-center mb-2">
        <div className="absolute inset-0 rounded-full border-4 border-[#605dff] border-t-transparent animate-spin" style={{ borderTopColor: 'transparent' }} />
        <div className="absolute inset-2 rounded-full border-4 border-[#605dff]/40 border-b-transparent animate-spin-slow" style={{ borderBottomColor: 'transparent' }} />
      </div>
      {/* Loader Text */}
      <div className="text-lg mt-4 font-semibold tracking-wide animate-pulse">Loading Portfolio...</div>
    </div>
  );
}
