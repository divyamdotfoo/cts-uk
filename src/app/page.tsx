"use client";
import Image from "next/image";
import { Poppins, Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ChevronDown,
  ShoppingCart,
  Star,
  MapPinCheck,
  Globe,
  RefreshCcw,
  Eye,
} from "lucide-react";
import { useEffect } from "react";
import { annotate } from "rough-notation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const chat = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Page() {
  useEffect(() => {
    if (document) {
      const strike = document.getElementById("heading-strikethrough");
      const underline = document.getElementById("heading-underline");
      if (strike && underline) {
        const annotation = annotate(strike, {
          type: "strike-through",
          animate: true,
          color: "#f03a3a",
          strokeWidth: 3,
        });
        const annotation2 = annotate(underline, {
          type: "highlight",
          animate: true,
          color: "#ffe24f",
          strokeWidth: 3,
        });
        setTimeout(() => {
          annotation.show();
        }, 300);
        setTimeout(() => {
          annotation2.show();
        }, 1100);
      }
    }
  }, []);
  return (
    <div className={cn("", poppins.className)}>
      {/* navbar */}
      <div className="hidden bg-[#ffe24f]"></div>
      <div className=" bg-white  bgred w-full py-2 flex items-center justify-between pl-16 pr-32">
        <Image
          src={"/esimLogo.png"}
          width={200}
          height={200}
          alt=""
          className=" h-[40px] w-auto"
        />
        <div className=" flex items-center gap-8 text-sm font-semibold text-[#125782]">
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Shop Plans
            <ChevronDown className=" w-4 h-4" />
          </Link>
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Networks
            <ChevronDown className=" w-4 h-4" />
          </Link>
          <Link
            className="underline decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            How it works
          </Link>
          <Link
            className="underline decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Features
          </Link>
          <Link
            className="underline decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Why Us
          </Link>
          <ShoppingCart className=" w-5 h-5 hover:scale-105 cursor-pointer " />
        </div>
      </div>
      {/* hero */}
      <div className=" bg-[#F9F4E7] w-full flex justify-center px-16 items-stretch gap-4 pt-8">
        <div className=" basis-[60%] pt-8">
          <div className=" max-w-[550px]">
            <p className=" text-5xl text-[#125782] font-extrabold leading-[1.1] ">
              Say Goodbye to UK{" "}
              <span id="heading-strikethrough">Roaming Woes</span> with Our{" "}
              <span id="heading-underline">eSIM</span> Magic Wand!
            </p>
            <p className=" text-black font-semibold pl-1 tracking-wider pr-16 pt-6">
              Enjoy reliable, high-speed data with our eSIM for hassle-free
              activation and seamless connectivity across the UK without
              physical SIM cards.
            </p>
            <div className=" flex items-center pt-3 pl-1">
              <Star className=" w-4 h-4 fill-yellow-400 stroke-yellow-600 stroke-1" />
              <Star className=" w-4 h-4 fill-yellow-400 stroke-yellow-600 stroke-1" />
              <Star className=" w-4 h-4 fill-yellow-400 stroke-yellow-600 stroke-1" />
              <Star className=" w-4 h-4 fill-yellow-400 stroke-yellow-600 stroke-1" />
              <Star className=" w-4 h-4 fill-yellow-400 stroke-yellow-600 stroke-1" />
              <p className=" text-yellow-700 text-[10px] font-medium pl-1 pt-[2px]">
                4.5 RATING FROM 10K+ BUYERS
              </p>
            </div>
          </div>
        </div>
        <div className=" basis-[40%] relative z-0">
          {/* image background */}
          <div
            className={cn(
              " absolute flex flex-col top-10 -left-4 z-20 gap-3 items-start font-bold",
              chat.className
            )}
          >
            <div className="relative shadow-sm min-h-10 max-w-36 flex items-center justify-center py-2 px-3 rounded-2xl bg-white">
              <div className=" absolute border-t-[20px] border-b-[0px] border-l-[20px] border-t-transparent border-b-transparent border-l-white -right-3 bottom-3"></div>
              <p className=" text-black text-sm ">Just went 5G in London⚡</p>
            </div>
            <div className="relative shadow-sm min-h-10 max-w-36 flex items-center justify-center py-2 px-3 rounded-2xl bg-sky-600">
              <div className=" absolute border-t-[14px] border-b-[0px] rotate-[190deg] border-l-[20px] border-t-transparent border-b-transparent border-sky-600 -left-4 top-3"></div>
              <p className=" text-white  text-sm">No SIM swap? 😯</p>
            </div>
            <div className="relative shadow-sm min-h-10 max-w-36 flex items-center justify-center p-2 rounded-2xl bg-white">
              <div className=" absolute border-t-[20px] border-b-[0px] border-l-[20px] border-t-transparent border-b-transparent border-l-white -right-3 bottom-3"></div>
              <p className=" text-black  text-sm ">
                Lol, who does that anymore?😂
              </p>
            </div>
          </div>
          <div className="bg-[#f8dc51] rounded-t-[300px] -z-10 w-[95%] absolute left-1/2 -translate-x-1/2 bottom-0 h-80"></div>
          <Image
            src={"/banner.png"}
            alt="model"
            width={1400}
            height={1400}
            className=" w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
      <div className=" max-w-4xl mx-auto py-8 flex items-center justify-between text-[#125782] text-lg font-semibold">
        <p className=" flex items-center gap-1">
          <Globe className=" text-inherit stroke-[3px]  w-5 h-5" />
          <span>Seamless Connection</span>
        </p>
        <p className=" flex items-center gap-1">
          <MapPinCheck className=" text-inherit stroke-[3px]  w-5 h-5" />
          <span>No Borders</span>
        </p>
        <p className=" flex items-center gap-1">
          <RefreshCcw className=" text-inherit stroke-[3px]  w-5 h-5" />
          <span>Effortless Switching</span>
        </p>
        <p className=" flex items-center gap-1">
          <Eye className=" text-inherit stroke-[3px]  w-5 h-5" />
          <span>Transparent Coverage</span>
        </p>
      </div>
    </div>
  );
}
