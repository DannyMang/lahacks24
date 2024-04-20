"use client";
import { Link } from '@nextui-org/react';
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

interface ImageProps {
  alt: string;
  className: string;
  height: number;
  src: string;
  style: React.CSSProperties;
  width: number;
  title: string;
  description: string;
}

const ImageComponent: React.FC<ImageProps> = ({
  alt,
  className,
  height,
  src,
  style,
  width,
  title,
  description,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              alt={alt}
              className={className}
              height={height}
              src={src}
              style={style}
              width={width}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white px-4 py-2 transition-all group-hover:translate-y-full">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] rounded-lg">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle> {/* replace with post name */}
            <img alt={alt} height={300} width={425} src={src} className="p-2" />
            <p>{description}</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageComponent;
