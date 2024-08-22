import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.svg';

export function Menu({ page }) {
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Desktop and Mobile Top Navigation */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md backdrop-blur bg-white/90">
                <div className="flex justify-between p-2">
                    <Link to="/" className="flex p-1">
                        <img src={logo} alt="Logo" className="h-16 pl-2" />
                    </Link>
                    <nav className="flex md:hidden items-center text-center">
                        <ul className="flex gap-14 text-lg">
                            <li className={`p-2 ${activeSection === '' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/nosotros" className="hover:text-[#FFC912]">Sobre <br />nosotros</Link>
                            </li>
                            <li className={`p-2 ${activeSection === 'pilares' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/experiencias" className="hover:text-[#FFC912]">Experiencias<br />Team Building</Link>
                            </li>
                            <li className={`p-2 ${activeSection === 'disertantes' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/gamificacion" className="hover:text-[#FFC912]">Gamificación de<br />capacitaciones</Link>
                            </li>
                            <li className={`p-2 ${activeSection === 'actividades' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/beneficios" className="hover:text-[#FFC912]">Programa de<br />beneficios</Link>
                            </li>
                            <li className={`p-2 ${activeSection === 'participar' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/programas" className="hover:text-[#FFC912]">Programas RSE<br />para tu comunidad</Link>
                            </li>
                            <li className={`p-2 my-4 bg-gray-500 rounded-full ${activeSection === 'sponsors' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/asesoria" className="px-2 my-auto text-white hover:text-[#FFC912]">ASESORÍA GRATUITA</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Mobile Hamburger Menu */}
                    <button onClick={toggleMenu} className="hidden md:flex mt-6 text-3xl text-black">
                        <RxHamburgerMenu />
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-color2 flex flex-col items-center justify-center z-40">
                        <nav>
                            <ul className="flex flex-col items-center gap-6 text-xl">
                                <li className={`p-2 ${activeSection === '' ? 'text-white' : ''}`}>
                                    <Link to="/nosotros" onClick={toggleMenu} className="hover:text-white">Sobre nosotros</Link>
                                </li>
                                <li className={`p-2 ${activeSection === 'pilares' ? 'text-white' : ''}`}>
                                    <Link to="/experiencias" onClick={toggleMenu} className="hover:text-white">Experiencias Team Building</Link>
                                </li>
                                <li className={`p-2 ${activeSection === 'disertantes' ? 'text-white' : ''}`}>
                                    <Link to="/gamificacion" onClick={toggleMenu} className="hover:text-white">Gamificación de capacitaciones</Link>
                                </li>
                                <li className={`p-2 ${activeSection === 'actividades' ? 'text-white' : ''}`}>
                                    <Link to="/beneficios" onClick={toggleMenu} className="hover:text-white">Programa de beneficios</Link>
                                </li>
                                <li className={`p-2 ${activeSection === 'participar' ? 'text-white' : ''}`}>
                                    <Link to="/programas" onClick={toggleMenu} className="hover:text-white">Programas RSE para tu comunidad</Link>
                                </li>
                                <li className={`p-2 bg-gray-500 rounded-full ${activeSection === 'sponsors' ? 'text-white' : ''}`}>
                                    <Link to="/asesoria" onClick={toggleMenu} className="px-2 text-white hover:text-white">ASESORÍA GRATUITA</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}
