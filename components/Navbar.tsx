"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./modeToggle"
import Link from "next/link"

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => setIsMenuOpen((prev) => !prev)

    return (
        <nav className="bg-yellow-100 dark:bg-blue-950 text-green-900 dark:text-white px-6 py-4">
            <div className="flex items-center justify-between">

                <div className="text-2xl font-thin">Dr. Serena Blake</div>

                <ul className="hidden md:flex gap-6 font-medium">
                    <li><Link href="/about" className="hover:underline">About</Link></li>
                    <li><Link href="/services" className="hover:underline">Services</Link></li>
                    <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                </ul>

                <div className="flex items-center gap-4">

                    <div className="hidden md:block">
                        <ModeToggle />
                    </div>

                    <button
                        className="md:hidden transition-transform duration-300 ease-in-out"
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
                    <Link href="/about" className="hover:underline" onClick={toggleMenu}>About</Link>
                    <Link href="/services" className="hover:underline" onClick={toggleMenu}>Services</Link>
                    <Link href="/faq" className="hover:underline" onClick={toggleMenu}>FAQ</Link>
                    <Link href="/contact" className="hover:underline" onClick={toggleMenu}>Contact</Link>

                    {/* Theme Toggle (mobile) */}
                    <div className="pt-2 border-t border-white/30">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}
