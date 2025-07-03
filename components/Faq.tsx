'use client';

import * as React from 'react';
import { useState } from 'react';
import faqData from '../data/faq.json';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div id='faq' className='px-6 md:px-20 py-24 text-[#7e7e6b] dark:text-amber-50'>
            <h2 className='text-4xl font-semibold mb-10 text-center'>Frequently Asked Questions</h2>
            <div className='max-w-4xl mx-auto space-y-4'>
                {faqData.map((item, index) => (
                    <div key={index} className='border-b border-gray-300 overflow-hidden'>
                        <button
                            onClick={() => toggle(index)}
                            className='w-full flex justify-between items-center text-left py-4 focus:outline-none hover:cursor-pointer'
                        >
                            <span className='text-lg'>{item.question}</span>
                            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className='text-sm text-gray-600 dark:text-amber-100 pb-4 pr-2'>
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
