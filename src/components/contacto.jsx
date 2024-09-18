import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

import logo from '../assets/images/logo.svg';
import forma from '../assets/images/formas/forma4.svg';

export function Contacto() {
    return (
        <footer 
            className="mt-40 text-gray-400 py-8 relative bg-no-repeat bg-left bg-cover"
            style={{ backgroundImage: `url(${forma})` }} // Usa la imagen como fondo
        >
            <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                {/* Logo */}
                <div className="mb-4 md:mb-0 md:hidden">
                    <img src={logo} alt="Logo" className="w-60 mt-6" />
                </div>

                {/* Contact Information */}
                <div className="mb-4 md:mb-0 md:ml-10 text-left ml-6">
                    <p className="text-lg font-semibold">Contacto:</p>
                    <a 
                        href="https://wa.me/0260 15-431-4640?text=Hola%20Nómade!" 
                        className="text-gray-400 hover:text-amber-400 mt-2 block md:ml-2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        0260 15-431-4640
                    </a> 

                    <a href="mailto:hablemos@nomademakerspace.com" className="text-gray-400 hover:text-amber-400 mt-2 block md:ml-2">
                        hablemos@nomademakerspace.com
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 + ml-6 md:-mt-14 md:-ml-24 md:flexblock">
                    <a 
                        href="https://www.instagram.com/nomade.steam/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-amber-400"
                    >
                        <FaInstagram className="text-3xl" />
                        <span className="sr-only">Instagram</span>
                    </a>

                    <a 
                        href="https://www.linkedin.com/company/nomademakerspace/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-amber-400"
                    >
                        <CiLinkedin className="text-3xl" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="-mb-4 text-center text-gray-500 md:mt-6">
                <p className="text-sm md:text-base">
                Copyright © 2024 Nómade makerspace. Powered by Nómade makerspace.</p>

                <a href="https://www.linkedin.com/in/martinlaloggia/" target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm md:text-base hover:text-amber-400  mt-4">
                Developed by Martín La Loggia</a>
            </div>
        </footer>
    );
}
