import * as React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                <h1>Your browser does not support the video tag.</h1>
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 bg-black/40">
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug drop-shadow-lg">
                    Psychological Care for
                    <br />
                    <span className="font-bold">Change, Insight, and Well-Being</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-white max-w-md sm:max-w-xl drop-shadow-sm">
                    Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
                </p>

                {/* CTA Button */}
                <Link href="/book-appointment">
                    <Button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-full bg-[#93b7b1] hover:bg-[#7ba6a0] transition-all duration-300 cursor-pointer">
                        SCHEDULE A CONSULTATION
                    </Button>
                </Link>
            </div>
        </div>
    );
};
