import * as React from 'react';
import Image from 'next/image';
import { Bar } from './Bar';

export const About: React.FC = () => {
    return (
        <div id='about'>

            <div className='min-h-screen mt-32 md:mt-40 mb-28 px-14 text-[#7e7e6b] dark:text-amber-50 flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-0'>
                <div className='flex flex-col gap-6 max-w-[48rem] text-justify'>
                    <h1 className='text-4xl'>About Dr. Serena Blake</h1>
                    <p>Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.</p>
                </div>
                <Image
                    alt='doctors image'
                    src={`/doctor.jpg`}
                    width={500}
                    height={700}
                    className='rounded-sm'
                />
            </div>
            <Bar color='bg-amber-800' />
        </div>
    )
}