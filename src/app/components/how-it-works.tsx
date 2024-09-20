"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
export function HowItWorks() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepsContainerRef, { once: true });
  const firstDotRef = useRef<HTMLSpanElement>(null);
  const lastDotRef = useRef<HTMLSpanElement>(null);
  const [len, setLen] = useState(0);
  useEffect(() => {
    if (firstDotRef.current && lastDotRef.current) {
      const firstDotRect = firstDotRef.current.getBoundingClientRect();
      const lastDotRect = lastDotRef.current.getBoundingClientRect();
      const length = lastDotRect.bottom - firstDotRect.top;
      setLen(length);
    }
  }, [isInView]);
  const steps = useMemo(
    () => [
      "Choose a mobile plan and make payment.",
      "Receive QR code via email or mail.",
      "Open Camera app and scan QR code.",
      "Tap notification to install cellular plan.",
      "Enter confirmation code if prompted.",
      "Select new eSIM as default for mobile data.",
      "Enable Data Roaming for international connectivity.",
      "Verify activation by making a call or checking internet connection.",
    ],
    []
  );
  return (
    <div className=" bg-background-yellow w-full py-10 text-black mb-[500px]">
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
        className=" max-w-6xl flex items-stretch justify-around mx-auto pt-12"
      >
        <div className=" relative flex flex-col items-start gap-4 basis-1/2 shrink-0">
          {isInView && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: len }}
              transition={{ duration: 0.4 * steps.length, delay: 0.4 }}
              className="w-[2px]  left-[11px] rounded-xl absolute bg-text-primary"
            ></motion.div>
          )}
          {isInView &&
            steps.map((s, i) => (
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: i * 0.2 }}
                key={i}
                className=" flex items-start text-gray-800 font-medium text-lg gap-2 tracking-wide"
              >
                <span
                  className=" flex items-center justify-center"
                  ref={
                    i === 0
                      ? firstDotRef
                      : i === steps.length - 1
                      ? lastDotRef
                      : null
                  }
                >
                  <Dot className=" scale-150 inline p-0 m-0 text-text-primary stroke-[3px]" />
                </span>
                {s}
              </motion.p>
            ))}
        </div>
        <Image
          src={"/mobile-3d.avif"}
          alt=""
          width={1200}
          height={1200}
          className=" h-[400px] w-auto"
        />
      </div>
    </div>
  );
}
