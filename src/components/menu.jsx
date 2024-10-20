import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo2.svg';
import forma from '../assets/images/formas/forma1.png';

export function Menu({ page }) {

    useEffect(() => {
        // Cargar el script de Calendly dinámicamente
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Limpiar el script al desmontar el componente
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      const openCalendlyPopup = () => {
        // Asegúrate de que el objeto Calendly esté disponible antes de llamar a initPopupWidget
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/hablemos-nomademakerspace/30min',
            text: 'Programe una reunión conmigo',
            color: '#ffc912',
            textColor: '#ffffff',
            branding: true,
          });
        } else {
          console.error('Calendly script not loaded');
        }
      };

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función para determinar la sección activa basada en la ruta actual
    const getActiveSection = () => {
        const path = location.pathname;
        if (path === "/") return "inicio";
        if (path.includes("/nosotros")) return "nosotros";
        if (path.includes("/company")) return "company";
        if (path.includes("/education")) return "education";
        if (path.includes("/asesoria")) return "asesoria";
        return "";
    };

    const activeSection = getActiveSection();

    return (
        <>
            {/* Desktop and Mobile Top Navigation */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white  backdrop-blur bg-white/90">
                <div className="flex justify-between p-2 overflow-hidden relative top-0 left-0 md:h-16">
                    
                    <img src={forma} alt="forma" className="w-[400%] top-[-30rem] absolute opacity-[.05]" />
                    
                    <Link to="/" className="flex p-1 z-20">
                        <img src={logo} alt="Logo" className="h-16 pl-2 md:h-12 cursor-pointer"  />
                    </Link>
                    <nav className="flex md:hidden items-center text-center">
                        <ul className="flex gap-14 text-lg px-8">
                            <li className={`font-semibold z-30 p-2 px-4 pt-6 ${activeSection === 'inicio' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/" className="hover:text-[#FFC912]">Inicio</Link>
                            </li>
                            <li className={`font-semibold z-30 p-2 px-4 pt-6 ${activeSection === 'nosotros' ? 'text-[#FFC912]' : ''}`}>
                                <Link to="/nosotros" className="hover:text-[#FFC912]">Sobre nosotros</Link>
                            </li>
                            <li className={`font-semibold z-30 p-2 px-4 pt-6 ${activeSection === 'company' || activeSection === 'education' ? 'text-[#FFC912]' : ''}`}>
                                <a href="/#soluciones" className="hover:text-[#FFC912]">Nuestras soluciones</a>
                            </li>
                            <li className={`z-30 p-2 my-4 bg-gray-500 rounded-full ${activeSection === 'asesoria' ? 'text-[#FFC912]' : ''}`}>
                                <a href="https://calendly.com/hablemos-nomademakerspace/30min" className="font-bold px-2 my-auto text-white hover:text-[#FFC912]">ASESORÍA GRATUITA</a>
                            </li>
                        </ul>
                    </nav>
                    {/* Mobile Hamburger Menu */}
                    <button onClick={toggleMenu} className="hidden md:flex mt-6 text-3xl text-black md:mt-2">
                        <RxHamburgerMenu />
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-40 backdrop-blur bg-white/95">
                        <nav>
                            <img src={logo} alt="" className="w-[80%] mx-auto mb-8" />
                            <ul className="flex flex-col items-center gap-6 text-xl">
                                <li className={`p-2 ${activeSection === 'inicio' ? 'color1' : ''}`}>
                                    <Link to="/" onClick={toggleMenu} className="hover:text-gray-500 font-bold">Inicio</Link>
                                </li>
                                <li className={`p-2 ${activeSection === 'nosotros' ? 'color1' : ''}`}>
                                    <Link to="/nosotros" onClick={toggleMenu} className="hover:text-gray-500 font-bold">Sobre nosotros</Link>
                                </li>
                                <li className={`p-2 ${activeSection === 'company' || activeSection === 'education' ? 'color1' : ''}`}>
                                    <a href="/#soluciones" onClick={toggleMenu} className="hover:text-gray-500 font-bold">Nuestras soluciones</a>
                                </li>
                                <li className={`p-2 bg-gray-500 hover:bg-[#ffb300]  rounded-full ${activeSection === 'asesoria' ? 'text-white' : ''}`}>
                                <a
                                    href="https://calendly.com/hablemos-nomademakerspace/30min"
                                    className="font-bold px-4 py-2 text-white"
                                    >
                                    ASESORÍA GRATUITA
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}
