"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <motion.div
            className="flex w-full items-center justify-center lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-pathway text-5xl font-semibold text-[#fff] md:leading-[66px] lg:text-6xl">
                Welcome to Solasta
                <br /> A Symphony of Flavors
              </h1>
              <p className="font-poppins font-normal text-[#9C9E9F]">
                At Solasta, every dish is a true culinary creation, crafted with
                dedication and finesse. From hand-picked ingredients to expertly
                refined recipes, we deliver a dining experience where artistry
                meets flavour. Whether you're savouring a signature main course
                or indulging in a luxurious dessert, each bite showcases our
                unwavering commitment to quality, innovation, and gastronomic
                excellence.
              </p>
            </div>
          </motion.div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <motion.img
              src="/images/about-us/2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
