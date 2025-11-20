import React from 'react';

interface SectionDividerProps {
    type?: 'waves' | 'rope' | 'chains';
    className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ type = 'waves', className = '' }) => {
    if (type === 'waves') {
        return (
            <div className={`w-full overflow-hidden leading-none rotate-180 ${className}`}>
                <svg className="relative block w-[calc(130%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-op-blue"></path>
                </svg>
            </div>
        );
    }

    if (type === 'rope') {
        return (
            <div className={`w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/rope-texture.png')] bg-repeat-x ${className}`}></div>
        );
    }

    return null;
};

export default SectionDivider;
