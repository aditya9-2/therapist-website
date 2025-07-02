import * as React from 'react';
import { Bar } from './Bar';

export const SubAbout: React.FC = () => {
    return (
        <div className="mt-24 px-6 md:px-10 py-16 flex flex-col gap-6 text-center bg-yellow-50 dark:bg-blue-950 text-[#4a4a3e] dark:text-amber-50">
            <h1 className="text-2xl md:text-4xl leading-snug font-semibold">
                Therapy can be a space where <br className="hidden md:block" />
                you invest in yourself—one of the highest forms of self-care.
            </h1>

            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                You may be led to therapy by anxiety, depression, relationship stress,
                past or recent trauma, grief and loss, self-esteem issues, or challenges
                with family, parenting, or parental relationships. Whatever the source of
                your stress, you don&apos;t have to face it alone. Therapy offers you the time
                and space to work toward wellness and peace.
            </p>

            <Bar color='bg-amber-800' />
        </div>
    );
};
