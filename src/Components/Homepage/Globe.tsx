"use client";
import "./Globe.css";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;    

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: window.innerWidth < 600 ? window.innerWidth * 2 : 600 * 2,
      height: window.innerWidth < 600 ? window.innerWidth * 2 : 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 18000,
      mapBrightness: 6,
      baseColor: [1, 1, 9],
      markerColor: [0, 0, 0],
      glowColor: [0, 1, 1],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="App relative">
      <canvas ref={canvasRef} className="absolute inset-0" />
       {/* <div><h1>RSB WEBSITE</h1></div> */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white/40 dark:to-black pointer-events-none z-40" />
      <div className="absolute inset-x-0 -bottom-20 h-72 md:h-full z-10" />
    </div>
  );
}
