"use client";
import React from "react";
import HyperText from "@/components/ui/hyper-text";
import {
  AnimatedTooltipPreview,
  ButtonShimmer,
  EvervaultCardDemo,
} from "@/components/button";

export default function Hero() {
  return (
    // add gradient bg green to black
    <div className="h-screen w-full flex justify-center bg-green-500/10">
      <div className="w-1/2 pl-20">
        <HyperText
          className="text-8xl font-bold text-white dark:text-white"
          text="BECOME MORE"
        />
        <div className="text-6xl text-white pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="flex pt-10">
          <div className="w-1/3">
            <ButtonShimmer />
          </div>
          <div className="w-1/3">
            <ButtonShimmer />
          </div>
          <div className="w-1/3 pt-2 text-white text-center">Link</div>
        </div>
        <div className="flex pt-10">
          <div className="w-1/2">
            <AnimatedTooltipPreview />
          </div>
          <div className="w-1/2 text-white text-center">
            40k + <br />
            Active users
          </div>
        </div>
      </div>
      <div className="text-8xl text-white w-1/2 pt-52 text-center">
        <EvervaultCardDemo />
      </div>
    </div>
  );
}
