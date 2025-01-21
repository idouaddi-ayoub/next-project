"use client";

import HyperText from "@/components/ui/hyper-text";
import { AnimatedTooltipPreview, ButtonShimmer } from "@/components/button";
import MotionLogo from "@/components/motionLogo";

export default function Hero() {
  return (
    // add gradient bg green to black
    // <div className="bg-gradient-to-tr from-green-500 via-black to-green-900">
    <div className="h-screen w-screen flex md:pt-10 lg:pt-24 xl:pt-32 flex-col sm:flex-row ">
      <div className="sm:w-1/2 lg:pl-32 sm:pl-10 xs:mt-32">
        <HyperText
          className="text-3xl md:text-7xl lg:text-8xl font-bold text-white dark:text-white"
          text="WELCOME TO CDI"
        />
        <div className="text-2xl lg:text-6xl text-white pt-10 mr-30 lg:text-left text-center ml-2 mr-2">
          Where Creating Digital Innovations is Fun and Friendships are Made
        </div>
        <div className="flex pt-10 justify-center sm:block">
          <div className="mr-2 ml-4">
            <ButtonShimmer>Discover </ButtonShimmer>
          </div>
          <div className="mr-4 ml-2">
            <ButtonShimmer>Contact us</ButtonShimmer>
          </div>
        </div>
        <div className="flex pt-10 justify-center sm:block">
          <div className="flex ">
            <AnimatedTooltipPreview />
          </div>
        </div>
      </div>
      <div className="justify-center flex">
        <div className="xs:w-72 md:pt-10 sm:w-1/2 ">
          <MotionLogo />
        </div>
      </div>
    </div>
    // </div>
  );
}
