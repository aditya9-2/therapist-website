import * as React from 'react';

interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    hint?: string;
}

export const LabeledInput: React.FC<LabeledInputProps> = ({ label, id, hint, ...props }) => {
    return (
        <div className='flex flex-col w-full'>
            <label htmlFor={id} className='text-sm mb-1 text-left font-medium'>
                {label}
            </label>
            <input
                id={id}
                {...props}
                className='p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-blue-900 dark:border-gray-700'
            />
            {hint && <span className='text-xs text-gray-600 mt-1'>{hint}</span>}
        </div>
    );
};
