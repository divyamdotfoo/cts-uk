"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HeroImage from "../../../public/banner.webp";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { annotate } from "rough-notation";
import { motion } from "framer-motion";
import { Quicksand } from "next/font/google";
const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export function HeroSection({ children }: { children?: React.ReactNode }) {
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

        setTimeout(() => {
          annotation.show();
        }, 300);
      }
    }
  }, []);
  return (
    <div className=" bg-[#F9F4E7] w-full flex justify-center px-10 items-stretch gap-4 pt-10">
      <div className=" basis-1/2 ">
        <div className=" max-w-[550px]">
          <p className=" text-5xl text-[#125782] font-extrabold leading-[1.1] ">
            Say goodbye to US{" "}
            <span id="heading-strikethrough">Roaming Woes</span> with our{" "}
            <span id="heading-underline">eSIM</span> magic wand!
          </p>
          <p className=" text-gray-700 font-semibold pl-1 tracking-wider pr-16 pt-6">
            Enjoy reliable, high-speed data with our eSIM for hassle-free
            activation and seamless connectivity across the UK without physical
            SIM cards.
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
        {/* plans loaded as RSC */}
        {children}
      </div>

      <div className=" xl:basis-[55%] basis-[60%]   flex relative z-0">
        {/* image background */}
        <div className="bg-[#f8dc51]  rounded-t-[300px] -z-10 w-[95%] absolute left-1/2 -translate-x-1/2 h-80 bottom-0"></div>
        <div className="relative self-end  overflow-hidden">
          <HeroChatMessage />
          <Image
            src={HeroImage}
            alt="model"
            width={1400}
            height={1400}
            className=" w-full"
            loading="eager"
            placeholder="empty"
          />
        </div>
      </div>
    </div>
  );
}

function HeroChatMessage() {
  const chats = useTypingEffect(
    [
      [
        "Just went 5G in London⚡",
        "No SIM swap? 😯",
        "Lol, who does that anymore?😂",
      ],
      [
        "Working remotely in Manchester?",
        "Zoom calls without a hitch.",
        "eSIM keeps me connected!",
      ],
      [
        "No roaming fees, just fast UK data.",
        "How's the coverage?",
        "Full bars, no issues!",
      ],
    ],
    50,
    true
  );
  return (
    <div
      className={cn(
        " absolute flex flex-col top-16 left-6 lg:left-6 xl:left-7 z-20 gap-3 items-start font-bold",
        quickSand.className
      )}
    >
      {chats.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "relative shadow-sm min-h-10 w-36 flex items-center justify-start py-2 px-3 rounded-2xl",
            i % 2 === 0 ? "bg-white text-black" : "bg-sky-600 text-white"
          )}
        >
          {i % 2 === 0 ? (
            <div className=" absolute border-t-[20px] border-b-[0px] border-l-[20px] border-t-transparent border-b-transparent border-l-white -right-3 bottom-3"></div>
          ) : (
            <div className=" absolute border-t-[14px] border-b-[0px] rotate-[190deg] border-l-[20px] border-t-transparent border-b-transparent border-sky-600 -left-4 top-3"></div>
          )}
          <p className="  text-sm ">{c}</p>
        </motion.div>
      ))}
    </div>
  );
}

export const useTypingEffect = (
  chats: string[][],
  duration: number,
  isTypeByLetter = false
) => {
  const [activeChats, setActiveChats] = useState(-1);
  const [active, setActive] = useState(-1);
  const [currentPosition, setCurrentPosition] = useState(0);

  const items =
    chats[activeChats] && chats[activeChats][active]
      ? chats[activeChats][active].split("")
      : [];

  useEffect(() => {
    setTimeout(() => {
      setActiveChats(0);
      setActive(0);
    }, 150);
  }, []);

  useEffect(() => {
    if (active === -1 || activeChats === -1) return;

    if (active >= chats[activeChats].length) {
      console.log("inside");
      setActiveChats((p) => (p + 1) % chats.length);
      setActive(0);

      return;
    }
    if (currentPosition >= items.length) {
      if (active === chats[activeChats].length - 1) {
        setTimeout(() => {
          setActive((p) => p + 1);
          setCurrentPosition(0);
        }, 1000);
        return;
      }
      setTimeout(() => {
        setActive((p) => p + 1);
        setCurrentPosition(0);
      }, 400);
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  if (active === -1) return [];
  return [
    ...chats[activeChats].slice(0, active),
    items.slice(0, currentPosition).join(isTypeByLetter ? "" : " "),
  ];
};
