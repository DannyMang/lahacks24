"use client";
import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

function GlobeComponent() {
  type GlobeData = {
    lat: number;
    lng: number;
    size: number;
    color: string;
  };
  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;
  const globeEl = useRef<HTMLDivElement | null>(null);
  const N = 30;
  const gData = Array.from(Array(N).keys()).map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 7 + Math.random() * 30,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));

  useEffect(() => {
    // Initialize the globe

    const globe = Globe()(globeEl.current as unknown as HTMLElement);
    globe
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
      .backgroundColor("rgba(0,0,0,0)") // Set to transparent or to a specific color matching your page
      .htmlElementsData(gData)
      .htmlElement((d) => {
        const el = document.createElement("div");
        el.innerHTML = markerSvg;
        el.style.color = "red";
        el.style.width = `${36}px`;
        return el;
      });

    const controls = globe.controls();
    controls.enableZoom = false; // Disable zoom

    return () => {};
  }, []);

  return <div ref={globeEl} style={{ width: "100%", height: "500px" }} />;
}

export default GlobeComponent;
