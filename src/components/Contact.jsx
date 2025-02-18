import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <section id="contact" ref={contactRef}>
      <div className='mx-auto max-w-full px-4'>
        <h1 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Contact</h1>

        <div className='text-center mb-5 text-lg lg:text-xl'>
                <p className=''>Feel free to contact me through email:</p>
                <a href="mailto:jsan39196@gmail.com" className='underline'>
                jsan39196@gmail.com
                </a>
        </div>
    

        <div className="flex items-center justify-center gap-4 mb-5">
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/jayathu-sankalpa-munasinghe-16060719b"
                target="_blank"
                rel="noopener noreferrer"
            
            >
                <FaLinkedin size={36} />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/Munasinghe123"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={36} />
            </a>
            </div>
                </div>
                </section>
            );
};

export default Contact;
