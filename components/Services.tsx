import * as React from 'react';
import Image from 'next/image';

interface Service {
    img: string;
    heading: string;
    para: string;
}

interface ServicesProps {
    items: Service[];
}

export const Services: React.FC<ServicesProps> = ({ items }) => {
    return (
        <section id="services" className="py-20 px-6 bg-[#f9f6ef] dark:bg-blue-950">
            <h1 className="text-4xl font-light text-center mb-16 text-gray-800 dark:text-amber-50">
                Areas of Focus
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {items.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-4 px-4">
                        <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                            <Image
                                alt={service.heading}
                                src={service.img}
                                width={240}
                                height={240}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold text-[#534c43] dark:text-white mt-4">
                            {service.heading}
                        </h2>
                        <p className="text-[#534c43] dark:text-gray-300 text-sm leading-relaxed ">
                            {service.para}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
