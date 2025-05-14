const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="relative flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] bg-[url('/images/about-us/6.jpg')] bg-cover bg-center bg-no-repeat text-[1.5rem] leading-[110%]"
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="font-pathway absolute z-10 w-full text-center text-[4.75rem] leading-[80%] text-white">
        Table Booking
      </h1>
    </section>
  );
};

export default Hero;
