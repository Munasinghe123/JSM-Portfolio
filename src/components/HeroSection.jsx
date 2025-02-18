import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROFILE } from "../constants";
import jaya from "../assets/jaya.jpg";
import { RiArrowRightUpLine } from "@remixicon/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subheadingRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Create a timeline that is linked to scroll
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "restart none restart none",
        immediateRender:false,
        // This will re-trigger the animation every time the section comes into view.
      },
    });

    timeline
      .fromTo(titleRef.current, { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
      .fromTo(
        subheadingRef.current,
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1 },
        "-=0.5"
      )
      .fromTo(textRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, "-=0.5")
      .fromTo(
        imgRef.current,
        { scale: 0.5, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 1.2 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
      ref={heroRef}
    >
      <div className="mt-8 lg:mt-20">
        <h1 ref={titleRef} className="hero-title text-4xl uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2
          ref={subheadingRef}
          className="hero-subheading mt-[10px] bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-4xl tracking-tighter text-transparent"
        >
          {PROFILE.role}
        </h2>
      </div>
      <p
        ref={textRef}
        className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl"
      >
        {PROFILE.subheading}
      </p>
      <img
        ref={imgRef}
        src={jaya}
        alt="Profile"
        className="hero-img rounded-3xl w-100 border border-purple-300/20 p-1"
      />
    </section>
  );
};

export default HeroSection;
