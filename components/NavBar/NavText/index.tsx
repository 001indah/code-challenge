import React from 'react';
import Link from 'next/link';

interface NavbarProps {
    isNavbarFixed: boolean;
    isOpen: boolean;
    handleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isNavbarFixed, isOpen, handleClick }) => {
    const menuItems = [
        { title: "Home", href: "/" },
        { title: "About Us", href: "/AboutUs" },
        { title: "Our Teams", href: "/OurTeam" },
        { title: "Product", href: "/Service" },
        { title: "Testimonials", href: "/Testimonials" }
    ];

    return (
        <nav className={`lg:flex lg:static lg:bg-transparent lg:max-w-full lg:h-8 lg:pt-0 lg:shadow-none lg:py-0 absolute py-5 ${isNavbarFixed ? ' bg-abuMuda text-gray-800' : 'bg-black text-white'} shadow-lg w-full h-screen top-full z-50 ease-in-out duration-500 pt-12 text-4xl font-semibold ${isOpen ? '' : 'hidden'}`}>
            <ul className='lg:flex lg:justify-between'>
                {menuItems.map((menuItem, index) => (
                    <li key={index} className="group">
                        <Link href={menuItem.href} onClick={handleClick} className="lg:flex lg:items-center text-base ml-10 border-gray-500 hover:text-hijauSedang hover:border-hijauSedang hover:font-bold">
                            {menuItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;




