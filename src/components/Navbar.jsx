import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar shadow-sm px-6 md:px-25 fixed z-100 border-b-1" style={{ backgroundColor: 'var(--color-background)' }}>
            <div className="flex-1">
                <Link to="/" className="text-xl font-bold text-primary">brialln</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-x-6">
                    <li><Link to="/" className='hover:text-primary'>Home</Link></li>
                    <li><Link to="/resume" className='hover:text-primary'>Resume</Link></li>
                    <li>
                        <details>
                            <summary className='hover:text-primary'>Projects</summary>
                            <ul
                            className="rounded-none p-2 shadow-lg"
                            style={{ backgroundColor: 'var(--color-background)' }}>
                                <li><Link to="/development" className='hover:text-primary'>Development</Link></li>
                                <li><Link to="/designing" className='hover:text-primary'>UI/UX Designing</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/contact" className='hover:text-primary'>Contact</Link></li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden btn btn-ghost text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 right-6 shadow-lg rounded-lg w-48 md:hidden" style={{ backgroundColor: 'var(--color-background)' }}>
                    <ul className="menu p-2">
                        <li><Link to="/" className='hover:text-primary'>Home</Link></li>
                        <li><Link to="/resume" className='hover:text-primary'>Resume</Link></li>
                        <li>
                            <details>
                                <summary>Projects</summary>
                                <ul className="bg-base-100 rounded-t-none p-2" style={{ backgroundColor: 'var(--color-background)' }}>
                                    <li><Link to="/development" className='hover:text-primary'>Development</Link></li>
                                    <li><Link to="/designing" className='hover:text-primary'>UI/UX Designing</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/contact" className='hover:text-primary'>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;