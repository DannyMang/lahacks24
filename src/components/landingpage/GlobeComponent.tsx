"use client";
import React, { useState, useEffect, useRef } from "react";
import Globe from "globe.gl";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
    { lat: 48.8566, lng: 2.3522, size: 0.5, color: "blue", label: "Paris" },
  ];

  const globeEl = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Initialize the globe

    const globe = Globe()(globeEl.current as unknown as HTMLElement);
    globe
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-day.jpg")
      .backgroundColor("rgba(0,0,0,0)") // Set to transparent or to a specific color matching your page
      .pointsData(plotPoints)
      .pointAltitude(0.015)
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
      <div
        ref={globeEl}
        style={{ width: "100%", height: "500px" }}
        className="mt-[-100px]"
      />
      <Dialog open={dialogOpen} onOpenChange={handleChange}>
        <DialogContent className="sm:max-w-[425px] rounded-lg">
          <DialogHeader>
            <DialogTitle>Title Placeholder</DialogTitle>{" "}
            {/* replace with post name */}
            <img
              height={300}
              width={425}
              src="./placeholder.svg"
              className="p-2"
            />
            <p>Placeholder</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GlobeComponent;
