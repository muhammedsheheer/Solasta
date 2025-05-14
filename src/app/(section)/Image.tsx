import React from "react";
import Image from "next/image";

const Image1 = () => {
  return (
    <section className="h-[50vh] w-full md:h-screen">
      <Image
        src={"/images/home/story/image.png"}
        width={1920}
        height={1974}
        alt={"bg"}
        className="z-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default Image1;
