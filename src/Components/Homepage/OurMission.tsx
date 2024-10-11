"use client";
import React, { useEffect, useRef } from 'react';

const OurMission: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = Math.min(scrollY / maxScroll, 1);
        video.currentTime = video.duration * scrollProgress;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="relative overflow-hidden h-screen flex items-center justify-center font-serif">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover sm:w-1/2 sm:h-1/2 md:w-2/3 md:h-2/3 lg:w-5/7 lg:h-5/7 shadow-lg  rounded-lg glow"
        muted
        playsInline
        loop
        preload="auto"
        src="/assets/img/cube.mp4"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full  p-4">
      <h1 className='text-3xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,.5))] bg-clip-text text-transparent text-center m-6 p-5'>
          Our Mission
        </h1>
       <p className='text-sm md:text-xl text-gray-200 leading-relaxed mb-10 px-2 md:px-24'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal  
          </p><br /><br /><br /><br />
          <p className='text-sm md:text-xl text-gray-200 leading-relaxed mb-10 px-2 md:px-24'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal  
          </p>
          
      </div>
    </div>
  );
};

export default OurMission;
