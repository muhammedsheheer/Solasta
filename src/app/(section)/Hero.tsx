"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [showText, setShowText] = useState(true);
  const text = "EL PUEBLO";
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/elpeublo/el-peublo-thumbnail.png"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/elpeublo/el-peublo-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />

      {/* <div className="relative mt-16 flex h-full flex-col items-center justify-center gap-3 md:ml-16">
        <h1 className="text-center font-times_new_roman text-6xl font-[400] uppercase text-[#FEFFFF] md:text-8xl md:tracking-[-3px]">
          {inView &&
            [...text].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
        </h1>
        <div className="pt-6 md:pt-14">
          <Link
            className="flex flex-row items-center justify-center gap-1 border border-[#C5DAE8] bg-[#C5DAE8] px-5 py-3 text-center font-poppins text-sm font-[400] uppercase tracking-[2px] text-black hover:bg-[#bedaec] md:px-5 md:py-3"
            href={"/table-booking"}
          >
            <ArrowRight />
            Reserve
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
