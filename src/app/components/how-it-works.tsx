"use client";
import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircleDot } from "lucide-react";
export function HowItWorks() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepsContainerRef, { once: true });

  const steps = useMemo(
    () => [
      "Choose a mobile plan and make payment",
      "Receive QR code via email or mail",
      "Open Camera app and scan QR code",
      "Tap notification to install cellular plan",
      "Enter confirmation code if prompted",
      "Select new eSIM as default for mobile data",
      "Enable Data Roaming for international connectivity",
      "Verify activation by making a call or checking internet connection",
    ],
    []
  );
  return (
    <div className=" bg-background-yellow w-full py-10 text-black">
      <p className=" text-center text-text-primary font-semibold text-xs">
        Step-By-Step Guide
      </p>
      <p className=" text-3xl font-bold text-center py-4">How does it work?</p>
      <p className=" max-w-96 text-gray-700 text-sm font-medium mx-auto text-center">
        Picture this: You&apos;ve just landed in the UK, no SIM cards to fumble
        with. A quick scan, and like magic, your phone is connected.
      </p>
      <div
        ref={stepsContainerRef}
        className=" max-w-5xl flex items-stretch mx-auto pt-12"
      >
        <div className=" relative flex flex-col items-start gap-3">
          {/* {isInView && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "calc(100% - 24px)" }}
              transition={{ duration: 0.4 * steps.length }}
              className="w-[2px] top-[12px] left-[7px] rounded-xl absolute bg-text-primary"
            ></motion.div>
          )} */}
          {isInView &&
            steps.map((s, i) => (
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className=" flex items-start gap-4 text-gray-800 font-medium text-lg tracking-wide"
              >
                <span>
                  <CircleDot className=" w-4 inline p-0 m-0 text-text-primary stroke-[3px]" />
                </span>
                {s}
              </motion.p>
            ))}
        </div>
      </div>
    </div>
  );
}
