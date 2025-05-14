import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000208] px-4 py-8 md:px-20 md:py-10">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/gallery/bg.png"}
          width={1920}
          height={1974}
          alt={"bg"}
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <motion.h6
          className="font-pathway text-center text-4xl font-[400] uppercase tracking-[5px] text-[#fff] md:text-5xl md:tracking-[10px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          SOLASTA ARCHIVES
        </motion.h6>
        {/* big screen */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6">
          <motion.img
            src="/images/home/gallery/1.png"
            alt="1"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/2.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/3.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/4.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/5.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/6.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/7.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/8.png"
            alt="2"
            className="z-50 h-[200px] w-full object-cover md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src="/images/home/gallery/3.png"
            alt="2"
            className="z-50 hidden h-[200px] w-full object-cover md:block md:h-[400px]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
