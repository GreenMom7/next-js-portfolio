"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image, { type StaticImageData } from "next/image";
import { type FC, useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";

import htmlIcon from "@/assets/technologies/HTML5.svg";
import cssIcon from "@/assets/technologies/CSS3.svg";
import javascriptIcon from "@/assets/technologies/JavaScript.svg";
import nextIcon from "@/assets/technologies/next.svg";
import reactIcon from "@/assets/technologies/react.svg";
import tailwindIcon from "@/assets/technologies/tailwind.svg";
import threeIcon from "@/assets/technologies/three.svg";
import typescriptIcon from "@/assets/technologies/typescript.svg";
import nuxtIcon from "@/assets/technologies/Nuxt JS.svg";
import phpIcon from "@/assets/technologies/PHP.svg";
import reduxIcon from "@/assets/technologies/Redux.svg";
import vueIcon from "@/assets/technologies/Vue.js.svg";
import mysqlIcon from "@/assets/technologies/MySQL.svg";
import postgresqlIcon from "@/assets/technologies/PostgresSQL.svg";
import mongodbIcon from "@/assets/technologies/MongoDB.svg";
import svelteIcon from "@/assets/technologies/Svelte.svg";
import laravelIcon from "@/assets/technologies/Laravel.svg";
import angularIcon from "@/assets/technologies/Angular.svg";
import nodeIcon from "@/assets/technologies/Node.js.svg";
import pythonIcon from "@/assets/technologies/Python.svg";
import javaIcon from "@/assets/technologies/Java.svg";
import cplusplusIcon from "@/assets/technologies/C++ (CPlusPlus).svg";
import awsIcon from "@/assets/technologies/AWS.svg";
import azureIcon from "@/assets/technologies/azure.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  isReversed?: boolean;
  className?: string;
};

const TECHNOLOGY_ICONS: StaticImageData[] = [
  pythonIcon,
  javaIcon,
  cplusplusIcon,
  awsIcon,
  azureIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  typescriptIcon,
  tailwindIcon,
  threeIcon,
  phpIcon,
  nodeIcon,
  angularIcon,
  vueIcon,
  reactIcon,
  nextIcon,
  nuxtIcon,
  laravelIcon,
  svelteIcon,
  reduxIcon,
  mysqlIcon,
  postgresqlIcon,
  mongodbIcon,
];

const ELEMENTS = [...TECHNOLOGY_ICONS, ...TECHNOLOGY_ICONS];

const Marquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      // Translate the container half of its width to the left (the width of list)
      // Then set it back to the start, and repeat infinitely.
      const setupInfiniteMarqueeTimeline = () => {
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? 50 : 0,
        });
        timeline.current = gsap
          .timeline({
            defaults: { ease: "none", repeat: -1 },
          })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : 50,
            timeScale: 0.25,
            duration: 0.8,
          })
          .set(movingContainer.current, { xPercent: 0 });
      };

      setupInfiniteMarqueeTimeline();
    },
    { dependencies: [isReversed] }
  );

  const timelineTimeScaleTween = useRef<GSAPTween | null>(null);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.8,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.8,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
          const isLast = index === ELEMENTS.length - 1;
          return (
            <div
              key={index}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center",
                isLast && "mr-10"
              )}
              style={{ height: src.height, width: src.width }}
            >
              <Image
                src={src}
                alt="technologies icon"
                height={40}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default Marquee;
