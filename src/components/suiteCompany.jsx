import React from "react";

import forma2 from '../assets/images/forma2.svg';
import solucion1 from '../assets/images/soluciones/solucion1.png';
import solucion2 from '../assets/images/soluciones/solucion7.png';
import solucion3 from '../assets/images/soluciones/solucion3.png';
import solucion4 from '../assets/images/soluciones/solucion8.png';

// Componente de tarjeta reutilizable
const Card = ({ imgSrc, title, description, linkText }) => (
    <div className="w-full mmd:w-[45%] mlg:w-[22%] px-4 py-6 rounded-3xl mt-20 bg-white transform transition duration-300 hover:translate-y-[-10px] hover:shadow-md">
        <img src={imgSrc} alt={title} className="w-[90%] mx-auto -mt-24" />
        <h3 className="text-2xl text-center font-semibold text-gray-800 mt-4">{title}</h3>
        <p className="text-justify text-gray-600 mt-2">{description}</p>
        <a href="#" className="block text-center mt-4 text-yellow-500 font-semibold hover:text-yellow-700">{linkText}</a>
    </div>
);

export function SuiteCompany() {
    return (
        <>
            <section id="suite" className="w-screen flex bg-orange-50">
                <div className="mt-20 w-full mb-20">
                    <h2 className="text-center text-4xl text-gray-800 font-semibold w-full mmd:w-[85%] mx-auto md:2-[80%] md:text-3xl">
                        Suite de soluciones: todo lo que necesitas para <b>tu talento</b>
                       
                    </h2>

                    <div className="w-[90%] mx-auto mt-14 flex flex-col mmd:flex-wrap mmd:flex-row justify-center gap-8 mmd:gap-4">
                        <Card 
                            imgSrc={solucion1} 
                            title="Fortalece la cohesión de tu equipo" 
                            description="Te ayudamos a fortalecer la cohesión de tu equipo y a transmitir tu cultura con asesoramiento y materiales para actividades team building." 
                            linkText="Quiero más info" 
                        />
                        <Card 
                            imgSrc={solucion2} 
                            title="Capacitaciones efectivas" 
                            description="Convertimos tus entrenamientos en capacitaciones efectivas mediante consultoría para gamificar procesos de onboarding, upskilling o reskilling." 
                            linkText="Quiero más info" 
                        />
                        <Card 
                            imgSrc={solucion3} 
                            title="Reconocimiento a colaboradores" 
                            description="Impulsamos el reconocimiento a tus colaboradores con nuestros programas de beneficios y actividades para celebraciones significativas." 
                            linkText="Quiero más info" 
                        />
                        <Card 
                            imgSrc={solucion4} 
                            title="Vocaciones digitales" 
                            description="Te acompañamos a despertar vocaciones digitales en tu comunidad con programas de RSE para mejorar la empleabilidad de jóvenes." 
                            linkText="Quiero más info" 
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
