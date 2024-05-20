import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, href }) => {
    return (
        <div>
            <a href={href} className={`ease-in-out duration-200 group flex w-full cursor-pointer items-center justify-center rounded-md bg-black px-6 py-2 transition mb-3 ${className}`}>
                <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">{children}</span>
            </a>
        </div >
    );
};

export default Button;
