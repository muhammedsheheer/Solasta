import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section className="relative flex h-full w-full bg-[#000] px-4 pb-20 pt-12 md:px-16 md:pb-60 md:pt-16">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/about/bg1.png"}
          alt="background"
          width={1024}
          height={564}
          className="z-0 h-full w-full md:h-[500px]"
        />
      </div>
      <div className="z-40 flex w-full flex-col items-center justify-center gap-6 md:mt-8 md:gap-10">
        <motion.h6
          className="font-pathway text-center text-4xl font-[400] uppercase tracking-[5px] text-[#fff] md:text-5xl md:tracking-[10px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          About us
        </motion.h6>
        <motion.h6
          className="z-40 text-center font-open_sans text-7xl font-[600] uppercase md:mt-14 md:text-[250px]"
          style={{
            background: "linear-gradient(180deg, #5F81AC 100%, #171711 20%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          SOLASTA
        </motion.h6>
        <div className="flex flex-col gap-4 md:mr-[20%] md:mt-28 md:flex-row">
          <p className="max-w-[400px] font-inter text-sm font-[400] text-[#9C9E9F] md:text-base">
            Nestled in the heart of Watford, Humo is a vibrant firehouse
            restaurant that brings the bold flavours of Spain to your plate. Our
            name, meaning smoke in Spanish, reflects our passion for open-flame
            cooking. At Humo, every dish is crafted over wood and charcoal,
            infusing meats, seafood, and seasonal vegetables with rich,
          </p>
          <Link href={"/table-booking"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase text-[#fff] md:mt-[60%]"
              variant="imageB"
            >
              Book now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
