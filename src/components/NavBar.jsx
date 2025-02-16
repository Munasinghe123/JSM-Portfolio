import { RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";

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
        <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-white/30 bg-black/50 backdrop-blur-lg lg:w-auto">
            <div className="flex items-center justify-between px-6 py-2">
                {/* Logo / Name */}
                <a href="/" className="text-white text-lg font-semibold tracking-wide mr-6">
                    JAYATHU SANKALPA MUNASINGHE
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-6 text-white text-sm">
                    {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index} className="whitespace-nowrap">
                            <a
                                href={item.href}
                                className="hover:text-gray-300 transition"
                                onClick={(e) => handleClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden focus:outline-none ml-auto"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMobileMenuOpen ? <RiCloseLine className="h-6 w-6 text-white" /> : <span className="text-white text-xl">☰</span>}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <ul className="lg:hidden flex flex-col gap-4 text-center bg-black/80 text-white p-4 rounded-b-lg">
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
        </nav>
    );
};

export default Navbar;
