import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "restart none restart none",
        immediateRender:false,
      },
    });

    // Fade in heading and email
    tl.fromTo(
      contactRef.current.querySelectorAll(".fade-in"),
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
    );

    // Scale up social icons with bounce
    tl.fromTo(
      contactRef.current.querySelectorAll(".social-icon"),
      { scale: 0, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.3 },
      "-=0.5"
    );
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-16">
      <div className="mx-auto max-w-full px-4">
        <h1 className="fade-in mb-8 text-center text-3xl font-medium lg:text-4xl">Contact</h1>

        <div className="fade-in text-center mb-5 text-lg lg:text-xl">
          <p>Feel free to contact me through email and phone:</p>
          <a href="mailto:jsan39196@gmail.com" className="underline">
            jsan39196@gmail.com
          </a> <br/>

          <a href="tel:+94726221723" className="underline">
            0726221723
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jayathu-sankalpa-munasinghe-16060719b"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={36} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Munasinghe123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
