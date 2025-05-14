import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Reserve: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  useEffect(() => {
    const animate = async () => {
      if (inView) {
        await controls.start("visible");
      } else {
        await controls.start("hidden");
      }
    };
    void animate();
  }, [controls, inView]);

  return (
    <section className="h-screen w-full overflow-hidden bg-[#000]">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-4 md:w-[550px]">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex h-[600px] w-full flex-col items-center justify-center gap-4 rounded-t-full bg-[#000] px-6 pb-14 pt-14 md:h-[700px] md:w-[550px] md:pb-14 md:pt-40"
          >
            <motion.h1
              className="text-center font-open_sans text-4xl font-[400] uppercase tracking-[3px] md:pb-3 md:text-5xl"
              style={{
                background:
                  "linear-gradient(180deg, #6CADFF 100%, #090909 20%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Reserve Table
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="font-manrope w-full max-w-[450px] text-center text-sm font-[300] text-[#C1B6A6] md:text-base"
            >
              Bradshaw Bar & Grill presents a diverse menu featuring
              Mediterranean dishes, including paella, mixed grills, and seafood
              options. The establishment provides both indoor and outdoor
              seating, with features like rooftop seating and live music
              enhancing the dining atmosphere. The venue is
              wheelchair-accessible and offers amenities such as free Wi-Fi,
              making it suitable for a range of gatherings .
            </motion.p>

            <motion.div variants={textVariants} className="md:mt-4">
              <Link href={"/table-booking"}>
                <Button className="font-cinzel flex flex-row items-center justify-center gap-2 rounded-none border border-[#FFCA4E] bg-transparent px-4 py-5 text-sm font-[500] uppercase text-[#fff] hover:bg-[#FFCA4E] hover:text-[#fff] md:mb-8 md:px-5 md:py-6">
                  Book Now
                  <ArrowRight />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <Image
          src={"/images/home/story/bg2.png"}
          width={281}
          height={74}
          alt="Reserve Background"
          className="h-[500px] w-full md:h-full"
        />
      </div>
    </section>
  );
};

export default Reserve;
