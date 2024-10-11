import React from 'react';
import Galaxy from './StarBackground';

export default function Hero() {
  return (
    <section id="heroSection" className='h-[492px] flex items-center overflow-hidden relative font-serif'>
      <div className='absolute inset-0 z-0'>
        <Galaxy />
      </div>
      
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5),rgb(14,0,36,.5)_78%,transparent)] z-10'></div>

      <div className='absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] z-10'></div>
      
      <div className='absolute h-[344px] w-[344px] opacity-15 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'></div>
      <div className='absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed z-10'></div>
      <div className='absolute h-[544px] w-[544px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed z-10'></div>

      <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[172px] z-10'></div> {/* Top */}
      <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 translate-y-[172px] z-10'></div> {/* Bottom */}
      <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-[172px] -translate-y-1/2 z-10'></div> {/* Left */}
      <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-1/2 translate-x-[172px] -translate-y-1/2 z-10'></div> {/* Right */}

      <div className='container text-center relative z-20'>
        <h1 className='text-8xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,.5))] bg-clip-text text-transparent text-center mt-16'>
          R S B
        </h1>
        <h1 className='text-5xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,.5))] bg-clip-text text-transparent text-center mt-8'> 
          MEDTECH
        </h1>
        <p className='text-lg text-white/70 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet?</p>
      </div>
    </section>
  );
}
