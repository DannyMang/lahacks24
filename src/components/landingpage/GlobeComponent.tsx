"use client";
import React, { useState, useEffect, useRef } from "react";
import Globe from "globe.gl";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
function GlobeComponent() {
  const [dialogContent, setDialogContent] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  interface GlobeData {
    lat: number;
    lng: number;
    size: number;
    color: string;
    label: string;
  }

  const plotPoints: GlobeData[] = [
    {
      lat: 34.161818,
      lng: -118.2437,
      size: 0.5,
      color: "gold",
      label: "Los Angeles",
    },
    { lat: 40.7128, lng: -74.006, size: 0.5, color: "red", label: "New York" },
    { lat: 48.8566, lng: 2.3522, size: 0.5, color: "green", label: "Paris" },
  ];

  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;
  const globeEl = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Initialize the globe

    const globe = Globe()(globeEl.current as unknown as HTMLElement);
    globe
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
      .backgroundColor("rgba(0,0,0,0)") // Set to transparent or to a specific color matching your page
      .pointsData(plotPoints)
      .pointAltitude(0.005)
      .pointRadius(0.75)
      .pointColor("color")
      .pointLabel("label")
      .onPointClick((point: any) => {
        setDialogContent(point.label); // Set dialog content based on the point
        setDialogOpen(true); // Open the dialog
      });

    const controls = globe.controls();
    controls.enableZoom = false; // Disable zoom

    return () => {};
  }, []);

  const handleChange = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div ref={globeEl} style={{ width: "100%", height: "500px" }} />
      <Dialog open={dialogOpen} onOpenChange={handleChange}>
        <DialogContent className="sm:max-w-[425px]">
          {dialogContent}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GlobeComponent;
