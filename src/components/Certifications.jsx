import { CERTIFICATIONS } from "../constants";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certification = () => {
  const certificationRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      certificationRef.current.querySelectorAll(".certificate-block"),
      { autoAlpha: 0, y: 30 }, // Start state: invisible and shifted down
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: certificationRef.current,
          start: "top 90%",
        //   once:true,
          toggleActions: "restart none restart none",
          immediateRender: false,
          // This ensures the animation restarts every time you scroll into view
          // Do not set 'once: true' if you want repeated triggers.
        },
      }
    );
  }, []);

  return (
    <section className="py-6" id="certification" ref={certificationRef}>
      <div className="mx-auto max-w-full px-4">
        <h1 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Certifications
        </h1>
        <div className="space-y-4">
          {CERTIFICATIONS.map((certificate, index) => (
            <div
              key={index}
              className="certificate-block flex flex-col space-y-1 rounded-xl border border-purple-300/20 pt-5 px-4"
            >
              <h1 className="text-2xl mb-2">{certificate.name}</h1>
              <h2 className="lg:text-xl text-sm">{certificate.institution}</h2>
              <p className="mt-3 lg:text-xl text-sm">{certificate.date}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
