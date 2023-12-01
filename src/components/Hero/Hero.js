import React, { useRef, useEffect } from "react";
import { useTheme } from "../../utils/themeMode";
import Lottie from "lottie-web";

const Hero = () => {
  const { darkMode } = useTheme();
  const lottieContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lottie/Ngaji.json"),
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <section className={` mb-10 ${darkMode ? "dark:bg-gray-900" : ""}`}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <h1
            className={`mb-4 text-4xl font-poppins tracking-tight leading-none md:text-5xl xl:text-5xl ${
              darkMode ? "dark:text-white" : ""
            } font-extrabold`}
          >
            Temukan Kebijaksanaan dalam Alquran
          </h1>
          <p
            className={`max-w-lg mb-6 font-poppins text-gray-500 lg:mb-8 md:text-lg lg:text-xl ${
              darkMode ? "dark:text-gray-400" : ""
            } font-light`}
          >
            Buka harta karun pengetahuan dan petunjuk yang terdapat di dalam
            halaman-halaman Alquran.
          </p>
        </div>
        <div
          ref={lottieContainer}
          className="lg:mt-0 lg:col-span-5 lg:flex items-center justify-center h-800 w-950"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
