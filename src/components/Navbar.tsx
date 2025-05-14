"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [positiond, setPositiond] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Get position from localStorage
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  // Save position to localStorage
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);

  // Scroll detection for mobile screen
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 h-[12vh] w-full pt-3 transition-colors duration-300 md:absolute md:pt-0",
        pathname === "/menu" && "bg-menubackground pt-4",
        pathname !== "/" && "px-2 pt-4",
        scrolled && "bg-[#235789] pt-4 md:bg-transparent",
      )}
    >
      {/* big screen */}
      <div
        className={
          pathname === "/"
            ? "hidden px-4 pt-0 md:block md:px-0"
            : "hidden px-4 pt-4 md:block md:px-[50px] 2xl:px-[140px]"
        }
      >
        <div
          className={
            pathname === "/"
              ? "flex h-screen w-[22%] flex-col items-center justify-center bg-[#235789]"
              : "flex flex-row items-center justify-center"
          }
        >
          <div
            className={
              pathname === "/"
                ? "flex flex-col items-start gap-8"
                : "mt-2 flex flex-row items-center justify-center gap-14"
            }
          >
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Home
            </Link>
            <Link
              href={"/menu"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Our Story
            </Link>
            <Link
              href={"/contact"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Contact
            </Link>
            <Link
              href={"/table-booking"}
              className="flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-5 w-2"
              />{" "}
              Booking
            </Link>
          </div>
        </div>
      </div>

      {/* mobile screen */}
      <div className="block px-2 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-40"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#fff]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
