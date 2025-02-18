import { useRef, useEffect } from "react";
import { SKILLS } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current.querySelectorAll(".skill-item"),
      { scale: 0.5, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 90%",
        //   once:true,
          toggleActions: "restart none restart none",
          immediateRender: false,
        },
      }
    );
  }, []);

  return (
    <section className="py-16" id="skills" ref={skillsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((skill, index) => (
          <div key={index} className="skill-item flex flex-col items-center text-center opacity-0">
            <div className="mb-4">{skill.icon}</div>
            <h3 className="lg:text-xl">{skill.name}</h3>
            <div className="mt-7"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
