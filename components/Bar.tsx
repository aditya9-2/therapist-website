import * as React from 'react';

export const Bar: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div className={`h-0.5 ${color} dark:bg-white m-16 rounded-3xl`} />
    );
}