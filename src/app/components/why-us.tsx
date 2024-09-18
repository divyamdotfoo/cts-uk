import { Clock, Globe, Lock, Smartphone, Wallet, Zap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export function WHyChooseUs() {
  return (
    <div className=" pt-12">
      <p className=" text-4xl font-bold text-text-primary text-center">
        Why choose us?
      </p>
      <Carousel
        className=" max-w-5xl py-12 text-gray-700 mx-auto"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="text-gray-700">
          <CarouselItem className=" basis-[27%]">
            <div className=" flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg">
              <Zap className=" w-14 h-14 text-text-primary stroke-[0.8] block" />
              <p className=" text-2xl font-medium">Instant Activation</p>
              <p className=" text-center text-gray-800 ">
                Stay Connected on the <br /> Go with Ease
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-[27%]">
            <div className="flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg">
              <Lock className="w-14 h-14 text-text-primary stroke-[0.8]" />
              <p className="text-2xl font-medium">Secure Connection</p>
              <p className="text-center text-gray-800">
                Your Data is Safe <br /> with Us
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-[27%]">
            <div className="flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg">
              <Clock className="w-14 h-14 text-text-primary stroke-[0.8]" />
              <p className="text-2xl font-medium">24/7 Support</p>
              <p className="text-center text-gray-800">
                Assistance Anytime <br /> Anywhere
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-[27%]">
            <div className="flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg">
              <Smartphone className="w-14 h-14 text-text-primary stroke-[0.8]" />
              <p className="text-2xl font-medium">Easy Setup</p>
              <p className="text-center text-gray-800">
                Quick and Simple <br /> Installation
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-[27%]">
            <div className="flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg">
              <Wallet className="w-14 h-14 text-text-primary stroke-[0.8]" />
              <p className="text-2xl font-medium">Affordable Rates</p>
              <p className="text-center text-gray-800">
                Best Value for <br /> Your Money
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-[27%]">
            <div className="flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg">
              <Globe className="w-14 h-14 text-text-primary stroke-[0.8]" />
              <p className="text-2xl font-medium">Global Coverage</p>
              <p className="text-center text-gray-800">
                Connect Anywhere <br /> Across the World
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
