"use client"

import * as React from 'react';
import Image from 'next/image';
import { Bar } from './Bar';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <div id='about'>

            <div className='min-h-screen mt-32 md:mt-40 mb-28 px-14 text-[#7e7e6b] dark:text-amber-50 flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-0'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-6 max-w-[48rem] text-justify'
                >
                    <h1 className='text-4xl'>About Dr. Serena Blake</h1>
                    <p>Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                >

                    <Image
                        alt='doctors image'
                        src={`/doctor.jpg`}
                        width={500}
                        height={700}
                        className='rounded-sm'
                    />
                </motion.div>
            </div>
            <Bar color='bg-amber-800' />
        </div>
    )
}