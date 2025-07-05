// app/thank-you/page.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-50 dark:bg-blue-950 text-[#4a4a3e] dark:text-amber-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-3xl font-semibold mb-4">Form Submitted Successfully!</h1>
                <p className="text-lg font-light">
                    Thank you for reaching out. Dr. Serena Blake will contact you via your preferred method
                    within <span className="font-medium text-amber-700 dark:text-green-400">1–2 business days</span>.
                </p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    You will be redirected back to the homepage shortly...
                </p>
            </div>
        </div>
    );
}
