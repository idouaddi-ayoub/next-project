import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import cdi from "../../public/assets/img/bzi.png";
export default function Content() {
  return (
    // change the carousel with the one you made using framer motion
    <div>
      <div className="text-6xl text-white text-center pb-20 pt-20">
        LEROYS JUNKING
      </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className="items-center justify-center m-20 relative"
      >
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                  <Image src={cdi} alt="appah" className="rounded-xl"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                  <Image src={cdi} alt="appah" className="rounded-xl"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                  <Image src={cdi} alt="appah" className="rounded-xl"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                  <Image src={cdi} alt="appah" className="rounded-xl"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent>
                  <Image src={cdi} alt="appah" className="rounded-xl"></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
