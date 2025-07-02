import * as React from 'react';
import Image from 'next/image';
import { Bar } from './Bar';

export const About: React.FC = () => {
    return (
        <div id='about'>

            <div className='min-h-screen mt-32 md:mt-40 mb-28 px-14 text-[#7e7e6b] dark:text-amber-50 flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-0'>
                <div className='flex flex-col gap-6 max-w-[48rem] text-justify'>
                    <h1 className='text-4xl'>About Dr. Serena Blake</h1>
                    <p>Finding time and opportunities to care for ourselves can be incredibly challenging in today&apos;s busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.</p>
                    {/* <br /> */}
                    <p>I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.</p>
                    {/* <br /> */}
                    <p>My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.</p>
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