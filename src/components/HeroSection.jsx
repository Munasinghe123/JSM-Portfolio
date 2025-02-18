import { useRef } from "react";
import { PROFILE } from "../constants";
import jaya from '../assets/jaya.jpg'
import { RiArrowRightUpLine } from "@remixicon/react";

const HeroSection=()=>{

    const heroRef=useRef(null);

    return(
        <section
        className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
        ref={heroRef}>
            <div className="mt-8 lg:mt-20">
                <h1
                className="hero-title text-4xl upperCase lg:text-7xl">
                    {PROFILE.name}
                </h1>

                <h2 className="mt-[10px] bg-gradient-to-b from-pink-200 to purple-300 bg-clip-text text-center text-4xl
                tracking-tighter text-transparent">
                    {PROFILE.role}
                </h2>
            </div>
            <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
                {PROFILE.subheading}
            </p>
            
            <img src={jaya} className="rounded-3xl w-60 border border-purple-300/20 p-1"/>

        </section>
    )
}

export default HeroSection;