"use client";
import { motion } from "framer-motion";
import {
  Clock,
  Globe,
  Lock,
  Wallet,
  Zap,
  LucideIcon,
  Infinity,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
export function WHyChooseUs() {
  const features = useMemo(
    () => [
      {
        title: "Secure Connection",
        icon: Lock,
        brief: ["Your Data is Safe", "with Us"],
        detail:
          "Your privacy is our top priority. We employ state-of-the-art encryption to ensure that your data remains protected at all times, giving you peace of mind while you browse.",
      },
      {
        title: "No Throttling",
        icon: Infinity,
        brief: ["Unlimited Speed", "Consistent Performance"],
        detail:
          "Experience our service with no speed limits. Our no-throttling policy ensures consistent high-speed performance and boosts productivity.",
      },
      {
        title: "Global Coverage",
        icon: Globe,
        brief: ["Connect Anywhere", "Across the World"],
        detail:
          "Stay connected wherever life takes you. Our extensive global network ensures you have reliable service across the world, keeping you in touch with what matters most.",
      },

      {
        title: "24/7 Support",
        icon: Clock,
        brief: ["Assistance Anytime", "Anywhere"],
        detail:
          "We're always here for you. Our dedicated support team is available round the clock to assist with any questions or issues you might have, ensuring you're never left in the dark.",
      },

      {
        title: "Affordable Rates",
        icon: Wallet,
        brief: ["Best Value for", "Your Money"],
        detail:
          "We believe in providing top-notch service without breaking the bank. Our competitive rates ensure you get the best value for your money, with no hidden fees or surprises.",
      },
      {
        title: "Instant Activation",
        icon: Zap,
        brief: ["Stay Connected", "Go with ease"],
        detail:
          "We understand your time is valuable. That's why we've made our activation process lightning-fast, allowing you to connect and start using our services in mere minutes.",
      },
    ],
    []
  );

  return (
    <div className="pt-12 max-w-5xl mx-auto">
      <p className="text-4xl font-bold text-text-primary text-center">
        Why choose us?
      </p>
      <Carousel
        className=" w-full py-12 text-gray-700"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="text-gray-700">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              brief={feature.brief}
              detail={feature.detail}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
function FeatureCard({
  icon: Icon,
  brief,
  detail,
  title,
}: {
  icon: LucideIcon;
  title: string;
  brief: string[];
  detail?: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <CarouselItem className=" xl:basis-[27%]">
      <div
        onMouseOver={() => setShow(true)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className=" relative flex flex-col items-center gap-2 border border-gray-300 shadow-sm py-6 rounded-lg"
      >
        <Icon className="w-12 h-12 text-text-primary stroke-[0.8]" />
        <p className="text-xl font-medium">{title}</p>
        <p className="text-center text-sm text-gray-800">
          {brief[0]} <br /> {brief[1]}
        </p>
        <motion.p
          className={cn(
            "bottom-0 text-pretty z-20 text-sm absolute left-0 right-0 rounded-t-lg bg-background-yellow text-text-primary font-medium",
            show && "p-4"
          )}
          initial={{ height: 0 }}
          animate={{ height: show ? "80%" : 0 }}
        >
          {detail}
        </motion.p>
      </div>
    </CarouselItem>
  );
}
