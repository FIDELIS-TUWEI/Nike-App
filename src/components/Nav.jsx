import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const renderNavLinks = () => {
        return (
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    const renderMenuIcon = () => {
        return (
            <div className="hidden max-lg:block" onClick={handleNav}>
                {menuOpen ? <img src={close} alt="close" width={25} height={25} /> : <img src={hamburger} alt="Hamburger" width={25} height={25} />}
            </div>
        );
    };

    const renderMobileMenu = () => {
        return (
            <div className={`fixed left-0 top-0 w-[60%] sm:w-[40%] h-full text-white border-r border-r-gray-400 bg-black ease-in-out duration-500 ${menuOpen ? '' : 'left-[-100%]'}`}>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} className="mx-auto mt-2" />
                </a>
                <ul className="p-4">
                    {navLinks.map((item) => (
                        <li key={item.label} className="p-4 border-b border-gray-600">
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                {renderNavLinks()}
                {renderMenuIcon()}
                {renderMobileMenu()}
            </nav>
        </header>
    );
};


export default Nav;