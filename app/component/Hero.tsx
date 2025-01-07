"use client";

import HyperText from "@/components/ui/hyper-text";
import {
  AnimatedTooltipPreview,
  ButtonShimmer,
  EvervaultCardDemo,
} from "@/components/button";

export default function Hero() {
  return (
    // add gradient bg green to black
    // <div className="bg-gradient-to-tr from-green-500 via-black to-green-900">
    <div className="h-screen w-full flex justify-center md:pt-10 lg:pt-28 xl:pt-36">
      <div className="lg:w-1/2 lg:pl-20 pl-10">
        <HyperText
          className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white dark:text-white"
          text="BECOME MORE"
        />
        <div className="text-2xl lg:text-6xl text-white pt-10 mr-30">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="min-[360px]:flex pt-10">
          <div className="w-1/2 flex">
            <ButtonShimmer>TEST</ButtonShimmer>
          </div>
          <div className="w-1/2 pt-2 text-white text-center underline max-[360px]:pt-10">
            Link
          </div>
        </div>
        <div className="min-[400px]:flex pt-10">
          <div className="w-1/2 max-[400px]:pr-14 max-[400px]:w-full ">
            <AnimatedTooltipPreview />
          </div>
          <div className="w-1/2 text-white text-center">
            40k + <br />
            Active users
          </div>
        </div>
      </div>
      <div className="text-8xl text-white w-1/2 pt-36 text-center hidden lg:block">
        <EvervaultCardDemo />
      </div>
    </div>
    // </div>
  );
}
