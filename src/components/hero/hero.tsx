import React from 'react';
// import { Star } from 'lucide-react';
import { HERO1 } from '../../assets';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={HERO1}
        alt="Desert background"
        className="w-full h-full rounded-2xl object-cover"
      />
    </div>
    <div className="relative z-10 text-center text-black max-w-4xl px-4">
      <h1 className="text-3xl font-semibold mb-4">Less wait.<br />More style.</h1>
      <p className="text-xl mb-8">Effortless salon booking, anytime, anywhere.<br />Get personalized insights to improve your style.</p>
      <div className="flex justify-center space-x-4 mb-8">
        <button className="px-6 py-3 bg-black text-white rounded-full text-lg">App Store</button>
        <button className="px-6 py-3 bg-white text-black border border-black rounded-full text-lg">Play Store</button>
      </div>
      <div className="flex justify-center items-center">
        {/* Rating will be added after the launch */}
        {/* <div className="flex -space-x-2 mr-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
          ))}
        </div> */}
        
        {/* <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400" size={16} />
          ))}
          <span className="ml-1">4.8 (87k Reviews)</span>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default Hero;