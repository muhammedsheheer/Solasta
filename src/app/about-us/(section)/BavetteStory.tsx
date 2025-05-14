"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <motion.h2
          className="font-pathway text-center text-5xl text-[#fff] md:left-[15%] md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          The Solasta
          <br />
          Story
        </motion.h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="font-pathway max-w-[500px] text-center text-5xl text-[#fff] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-poppins font-light leading-[160%] text-[#9C9E9F] md:text-start">
              What began as a simple vision—to redefine the way we experience
              food—has evolved into <strong>Solasta</strong>, a dining
              destination where flavour takes the spotlight. Inspired by a
              profound passion for excellence, Solasta was founded with the
              ambition to craft dishes that go beyond the ordinary and become
              unforgettable culinary moments.
              <br />
              From humble origins to becoming a beloved retreat for discerning
              food lovers, our steadfast commitment to quality, creativity, and
              heartfelt hospitality has guided every step of our journey. Each
              ingredient is thoughtfully selected, every dish meticulously
              prepared, and every mouthful tells a story of refined taste and
              tradition.
              <br />
              At <strong>Solasta</strong>, we don’t just serve food—we create
              meaningful experiences. As we continue to grow, our purpose
              remains unchanged: to unite culinary artistry with bold, memorable
              flavours and offer a truly exceptional dining experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
