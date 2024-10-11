"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <>
      <h1 className='text-5xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,.5))] bg-clip-text text-transparent text-center m-6 p-5 font-serif'>
          Our Moto
        </h1>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-[40rem] sm:mt-20">
        
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <PinContainer
            title="/Revenue Service Booster"
            href="/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                R_S_BOOSTER
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Lorem ipsum dolor sit consectetur adipisicing elit. Quidem error elit
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="/assets/img/rsbvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="lg:w-1/2 w-full p-6 pt-8 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Join Our Community</h2>
          <p className="text-base text-slate-300 mb-2">
            Be part of a vibrant community that shares knowledge and experience in
            customizable UI components.
          </p>
          <p className="text-base text-slate-300 mb-2">
            Subscribe to our newsletter to receive updates and insights directly
            to your inbox.
          </p>
          <p className="text-base text-slate-300 mb-2">
            Be part of a vibrant community that shares knowledge and experience in
            customizable UI components.
          </p>
          <p className="text-base text-slate-300 mb-12 py-4">
            Subscribe to our newsletter to receive updates and insights directly
            to your inbox.
          </p>
        </div>
      </div>
    </>
  );
}
