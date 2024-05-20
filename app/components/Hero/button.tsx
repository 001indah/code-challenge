import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, href }) => {
    return (
        <div>
            <a href={href} className={`ease-in-out duration-200 group flex w-full cursor-pointer items-center justify-center rounded-md bg-black px-6 py-2 text-white transition mb-3 ${className}`}>
                <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">{children}</span>
                <svg className="flex-0 ml-4 h-6 w-6 transition-all group-hover:ml-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div >
    );
};

export default Button;
