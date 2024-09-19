"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import { useMemo } from "react";
export function Customers() {
  const reviews = useMemo(
    () => [
      {
        title: "Works great abroad",
        content:
          "Used this eSIM on my trip to Europe last month. So much easier than buying local SIMs everywhere. Data was fast and reliable in all 3 countries I visited. Will definitely use again!",
      },
      {
        title: "Saved me in Japan",
        content:
          "Got stuck in rural Japan when my physical SIM stopped working. This eSIM saved the day! Had it up and running in minutes. The coverage was surprisingly good too.",
      },
      {
        title: "Great for work trips",
        content:
          "I travel a lot for business and this has been a game changer. Always connected, can expense one simple bill, and no more juggling multiple SIMs. My company loves it too.",
      },
      {
        title: "Easy to use app",
        content:
          "The app is pretty straightforward. Took me a minute to figure out how to top up, but once I got it, super simple. Nice to be able to check my usage easily.",
      },
      {
        title: "Coverage could be better",
        content:
          "Worked well in major cities, but had some issues in smaller towns. Not a deal breaker, but something to keep in mind if you're going off the beaten path.",
      },
      {
        title: "Customer service saved me",
        content:
          "Had trouble activating at first. Reached out to support and they were super helpful. Got me sorted in no time. Nice to know they've got your back when you're in a foreign country.",
      },
      {
        title: "No more bill shock!",
        content:
          "Used to dread checking my phone bill after international trips. This eSIM has put an end to that. Prices are clear upfront and no hidden charges. What a relief!",
      },
      {
        title: "Family vacation made easy",
        content:
          "Got eSIMs for the whole family for our Europe trip. Kids could use their phones without us worrying about costs. Made coordinating meetups and sharing photos so much easier.",
      },
      {
        title: "Not perfect, but close",
        content:
          "Had a few hiccups with connection dropping in some areas, but overall, way better than dealing with physical SIMs or paying crazy roaming fees. The good outweighs the bad for sure.",
      },
      {
        title: "Impressive speeds",
        content:
          "Was skeptical about data speeds, but color me impressed. Managed to do video calls and stream without issues in most places. Way faster than I expected.",
      },
      {
        title: "Wish I knew about this sooner",
        content:
          "Just used an eSIM for the first time on my Asia trip. Where has this been all my life? No more fiddling with tiny SIM cards or worrying about losing them. This is the future!",
      },
      {
        title: "Great for digital nomads",
        content:
          "As someone who hops between countries a lot, this eSIM has been a lifesaver. One less thing to worry about when I'm setting up in a new place. Highly recommend for fellow nomads.",
      },
      {
        title: "Decent option for short trips",
        content:
          "Used it for a weekend getaway. Nice not to have to bother with buying a local SIM for such a short trip. Activation was quick and painless. Will probably use again for quick trips.",
      },
      {
        title: "Not as cheap as local SIMs but...",
        content:
          "Okay, it's usually not as cheap as buying a local SIM, but the convenience factor is huge. No more hunting for SIM shops or dealing with language barriers. For short trips, it's totally worth it.",
      },
      {
        title: "Worked in 6 countries so far",
        content:
          "Been using this eSIM service for about a year now. So far, it's worked great in the US, UK, France, Germany, Spain, and Italy. Planning to test it in Asia next!",
      },
      {
        title: "Smooth sailing in South America",
        content:
          "Just got back from backpacking across South America. This eSIM made staying connected so much easier. Worked well in major cities, a bit spotty in rural areas, but overall a great experience.",
      },
      {
        title: "Better than hotel WiFi",
        content:
          "Used to rely on hotel WiFi for work trips. This eSIM has changed the game. More secure, usually faster, and works everywhere, not just in my room. Totally worth it for business travelers.",
      },
      {
        title: "Good, but check compatibility",
        content:
          "The service itself is great, but make sure your phone is compatible first! Had some issues with an older phone, but works flawlessly on my new one. Do your homework before buying.",
      },
      {
        title: "Never traveling without it again",
        content:
          "After using this for my last few trips, I can't imagine traveling without it. So convenient to have data ready to go as soon as I land. Makes everything from navigation to staying in touch so much easier.",
      },
    ],
    []
  );
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0.2, 1], [0, -900]);
  const x2 = useTransform(scrollYProgress, [0.3, 1], [-1000, 0]);

  return (
    <div className=" w-full bg-text-primary text-white py-8">
      <p className="flex items-center gap-1 text-center text-4xl font-bold justify-center">
        Hear from our delighted users{" "}
        <span>
          <Heart className="stroke-none fill-red-600 w-8 h-8" />
        </span>
      </p>
      <div className=" max-w-6xl overflow-hidden mx-auto pt-12 text-gray-800">
        <motion.div
          style={{ x: x1 }}
          className=" flex items-start gap-4 flex-nowrap pb-8"
        >
          {reviews.slice(0, 6).map((r) => (
            <div
              key={r.title}
              className=" w-80 shrink-0 px-8 py-5 bg-[#fffffffa] rounded-lg shadow-sm"
            >
              <p className=" pb-1 text-2xl font-semibold leading-[1.3]">
                {r.title}
              </p>
              <p className=" opacity-90 text-pretty">{r.content}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="flex items-start gap-4 flex-nowrap"
        >
          {reviews.slice(6).map((r) => (
            <div
              key={r.title}
              className=" w-80 shrink-0 px-8 py-5 bg-[#fffffffa] rounded-lg shadow-sm"
            >
              <p className=" pb-1 text-2xl font-semibold leading-[1.3]">
                {r.title}
              </p>
              <p className=" opacity-90 text-balance ">{r.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
