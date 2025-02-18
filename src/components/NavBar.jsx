import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-center w-full">
          <div className="w-auto flex items-center rounded-full border border-white/30 py-2 px-4 backdrop-blur-lg gap-6">
            <a href="#hero" className="uppercase whitespace-nowrap">
              Jayathu Sankalpa Munasinghe
            </a>
            <ul className="flex gap-6">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index} className="whitespace-nowrap">
                  <a
                    className="text-lg hover:text-stone-300"
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <a href="#hero" className="pl-2 uppercase"> {/* Changed href */}
              Jayathu Sankalpa Munasinghe
            </a>
            <button
              className="focus:outline-none lg:hidden mr-2"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars}/>
            </button>
          </div>

          {isMobileMenuOpen && (
            <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
