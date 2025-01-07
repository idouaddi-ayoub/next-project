import { ButtonShimmer } from "@/components/button";

const Community = () => {
  return (
    <div className="flex justify-center flex-col items-center text-center">
      <h1 className="text-6xl text-white pb-20 pt-20 ">LEROYS JUNKING</h1>
      <div className="flex-col bg-green-800 md:w-[750px] sm:w-[530px] w-[330px] h-52 sm:rounded-tr-50 sm:rounded-bl-50 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-[100px] flex items-center justify-center">
        <h1 className="text-4xl text-white pb-5 pt-5">SOME DUMMY AHH TEXT</h1>
        <ButtonShimmer>JOIN US</ButtonShimmer>
      </div>
    </div>
  );
};

export default Community;
