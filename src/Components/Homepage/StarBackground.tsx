"use client";
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";

const GalaxyBackground: React.FC = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("galaxyCanvas") as HTMLCanvasElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    const handleResize = () => {
      const heroSection = document.getElementById("heroSection");
      if (heroSection) {
        const width = heroSection.clientWidth;
        const height = heroSection.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    // Set initial size
    handleResize();

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starVertices = new Float32Array(3000);
    for (let i = 0; i < starVertices.length; i++) {
      starVertices[i] = (Math.random() - 0.5) * 2000;
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.8 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener("resize", handleResize);

    setInitialized(true);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="galaxyCanvas"
      className={`absolute inset-0 z-0 ${!initialized ? 'hidden' : ''}`}
    />
  );
};

const LazyGalaxyBackground = dynamic(() => Promise.resolve(GalaxyBackground), {
  ssr: false,
  loading: () => <div>Loading Galaxy...</div>,
});

const Galaxy: React.FC = () => (
  <Suspense fallback={<div>Loading Galaxy...</div>}>
    <LazyGalaxyBackground />
  </Suspense>
);

export default Galaxy;
