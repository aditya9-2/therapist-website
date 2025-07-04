import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-yellow-100 dark:bg-black dark:text-amber-50 text-[#4a4a3e] px-6 py-10 text-sm">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="font-semibold text-lg mb-2">Contact</h2>
                    <p className="flex items-start gap-2"><MapPin size={16} />1287 Maplewood Drive, Los Angeles, CA 90026</p>
                    <p className="flex items-center gap-2"><Phone size={16} />(323) 555-0192</p>
                    <p className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a></p>
                </div>
                <div>
                    <h2 className="font-semibold text-lg mb-2">Office Hours</h2>
                    <p><Clock size={16} className='inline mr-1' />In-person: Tue & Thu, 10 AM–6 PM</p>
                    <p><Clock size={16} className='inline mr-1' />Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
            </div>
            <p className='mt-6 text-sm font-thin dark:text-amber-50 text-[#4a4a3e] text-center'>Build with love by <span className='dark:text-green-400 text-amber-800 font-bold'>Aditya</span></p>
        </footer>
    );
};
