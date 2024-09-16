import React from "react";

import forma2 from '../assets/images/forma2.svg';
import talento1 from '../assets/images/talento/talento1.png';
import talento2 from '../assets/images/talento/talento2.png';
import talento3 from '../assets/images/talento/talento3.png';
import talento4 from '../assets/images/talento/talento4.png';

// Componente de tarjeta reutilizable
const Card = ({ imgSrc, title, description, linkText }) => (
    <div className="w-full mmd:w-[45%] mlg:w-[22%] px-4 py-6 rounded-3xl mt-20 bg-white transform transition duration-300 hover:translate-y-[-10px] hover:shadow-md">
        <img src={imgSrc} alt={title} className="w-[90%] mx-auto -mt-24" />
        <h3 className="text-2xl text-center font-semibold text-gray-800 mt-4">{title}</h3>
        <p className="text-justify text-gray-600 mt-2">{description}</p>
        <a href="#" className="block text-center mt-4 text-yellow-500 font-semibold hover:text-yellow-700">{linkText}</a>
    </div>
);

export function SuiteEducation() {
    return (
        <>
            <section id="suite" className="w-screen flex bg-orange-50">
                <div className="mt-20 w-full mb-20">
                    <h2 className="text-center text-4xl text-gray-800 font-semibold w-full mmd:w-[85%] mx-auto md:2-[80%] md:text-3xl">
                        Suite de soluciones: todo lo que necesitas para <b>tu talento</b>
                       
                    </h2>

                    <div className="w-[90%] mx-auto mt-14 flex flex-col mmd:flex-wrap mmd:flex-row justify-center gap-8 mmd:gap-4">
                        <Card 
                            imgSrc={talento1} 
                            title="Te ayudamos a simplificar la administración y asegurar transparencia y control" 
                            description="con un Sistema de Gestión personalizado a través de una aplicación para agilizar la gestión diaria del instituto." 
                            linkText="Quiero más info" 
                        />
                        <Card 
                            imgSrc={talento2} 
                            title="Convertimos tus entrenamientos en capacitaciones efectivas" 
                            description="mediante consultoría para gamificar tus procesos de onboarding, upskilling o reskilling con nuestra metodología STEAM." 
                            linkText="Quiero más info" 
                        />
                        <Card 
                            imgSrc={talento3} 
                            title="Impulsamos el reconocimiento a tus colaboradores" 
                            description="con nuestros programas de beneficios. Te proveemos regalos y actividades para celebraciones significativas como el Family Day." 
                            linkText="Quiero más info" 
                        />
                        <Card 
                            imgSrc={talento4} 
                            title="Te acompañamos a despertar vocaciones digitales en tu comunidad" 
                            description="con programas de RSE para mejorar la empleabilidad de jóvenes. Brindamos talleres IT, kits didácticos S.T.E.A.M." 
                            linkText="Quiero más info" 
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
