import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Evening", image: "/images/home/story/1.png" },
  { title: "drinks", image: "/images/home/story/2.png" },
  { title: "kids", image: "/images/home/story/3.png" },
  { title: "christmas", image: "/images/home/story/4.png" },
];

const Story: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pb-0 pt-8 md:pb-0 md:pt-20">
      <div className="absolute left-0 top-0 z-0">
        <Image
          src={"/images/home/story/bg.png"}
          width={1920}
          height={1974}
          alt={"bg"}
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="z-40 flex flex-col gap-16 px-4 md:px-0">
        {/* Title */}
        <h1 className="font-pathway text-center text-4xl font-[400] uppercase tracking-[5px] text-[#fff] md:text-5xl md:tracking-[10px]">
          THE HEART BEHIND <br /> OUR PLATES
        </h1>

        {/* Menu Grid */}
        <div className="z-40 grid grid-cols-2 gap-6 md:grid-cols-4">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <Link href={"/menu"} target="_blank">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-full w-full object-cover"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="relative pt-10 md:pt-40">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src={"/images/home/story/bg1.png"}
            width={1920}
            height={1974}
            alt={"bg"}
            className="z-0 h-full w-full object-cover"
          />
        </div>
        <h1
          className="z-40 text-center font-open_sans text-7xl font-[600] uppercase md:text-[200px]"
          style={{
            background: "linear-gradient(180deg, #6CADFF 100%, #090909 20%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SOLASTA
        </h1>
      </div>
    </section>
  );
};

export default Story;
