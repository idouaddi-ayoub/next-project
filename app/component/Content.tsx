import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Content() {
  return (
    // change the carousel with the one you made using framer motion
    <div>
      <div className="text-6xl text-white text-center pb-20 pt-20">
        LEROYS JUNKING
      </div>
      <Carousel
        opts={{
          align: "end",
        }}
        className="w-full items-center justify-center"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      {index + 1} x
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
