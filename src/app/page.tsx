"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";

import Follow from "./(section)/Follow";
import Special from "./(section)/(special)/Special";

import Menu from "./(section)/Menu";
import Reviews from "./(section)/Review";
import Story from "./(section)/Story";
import Reserve from "./(section)/Reserve";
import About from "./(section)/About";
import Gallery from "./(section)/Gallery";
import Image1 from "./(section)/Image";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <Special />
        <Menu />
        <Story />
        <Reserve />
        <Image1 />
        <Gallery />
        <Reviews />
        <About />
        <Follow />
        <Footer />
      </div>
    </main>
  );
}
