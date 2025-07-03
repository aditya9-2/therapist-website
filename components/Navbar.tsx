"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./modeToggle"

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => setIsMenuOpen((prev) => !prev)

    return (
        <nav className="sticky top-0 z-50 bg-yellow-100 dark:bg-blue-950 text-green-900 dark:text-white px-6 py-4 min-h-[75px] shadow-xl">
            <div className="flex items-center justify-between">

                <div className="text-2xl font-thin hover:cursor-pointer">
                    <a href="#">Dr. Serena Blake</a>
                </div>

                <ul className="hidden md:flex gap-6 font-medium">
                    <li><a href="#about" className="hover:opacity-80">About</a></li>
                    <li><a href="#services" className="hover:opacity-80">Services</a></li>
                    <li><a href="#faq" className="hover:opacity-80">FAQ</a></li>
                    <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">

                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>

                    <button
                        className="md:hidden transition-transform duration-300 ease-in-out hover:cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-4 text-base font-medium">
                    <ul>
                        <li><a href="#about" className="hover:opacity-80" onClick={toggleMenu}>About</a></li>
                        <li><a href="#services" className="hover:opacity-80" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#faq" className="hover:opacity-80" onClick={toggleMenu}>FAQ</a></li>
                        <li><a href="#contact" className="hover:opacity-80" onClick={toggleMenu}>Contact</a></li>
                    </ul>

                    {/* Theme Toggle (mobile) */}
                    <div className="pt-2 border-t border-white/30">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}
