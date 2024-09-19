import React from "react";

import solucion1 from '../assets/images/soluciones/solucion1.png';
import solucion2 from '../assets/images/soluciones/solucion7.png';
import solucion3 from '../assets/images/soluciones/solucion3.png';
import solucion4 from '../assets/images/soluciones/solucion8.png';

// Componente de tarjeta reutilizable
const Card = ({ imgSrc, title, description, linkText, url }) => (
    <div className="w-full mmd:w-[45%] mlg:w-[22%] px-6 py-8 rounded-3xl mt-10 bg-white shadow-sm transform transition duration-300 hover:translate-y-[-10px] hover:shadow-lg">
        <img 
            src={imgSrc} 
            alt={title} 
            className="w-[95%] h-auto mx-auto mt-[-3rem]" 
        />
        <h3 className="color6 text-xl text-center font-bold  mt-6">{title}</h3>
        <p className="text-justify text-lg text-gray-600 mt-4 px-2">{description}</p>
        <div className="flex justify-center mt-6">
            <a 
                href={url} 
                className="text-xl text-center text-gray-600 font-semibold  hover:text-yellow-500 py-2 px-4 transition-colors duration-200 absolute bottom-4"
            >
                {linkText}
            </a>
        </div>
    </div>
);


export function SuiteCompany() {
    return (
        <>
            <section id="suiteCompany" className="w-screen flex bg-orange-50">
                <div className="mt-20 w-full mb-20">
                    <h2 className="text-center text-4xl text-gray-800 font-semibold w-full mmd:w-[85%] mx-auto md:2-[80%] md:text-3xl">
                    Transforma tu equipo con soluciones diseñadas para mejorar la productividad, cohesión y habilidades tecnológicas.
                       
                    </h2>

                    <div className="w-[90%] mx-auto mt-14 flex flex-col mmd:flex-wrap mmd:flex-row justify-center gap-8 mmd:gap-4">
                        <Card 
                            imgSrc={solucion1} 
                            title="Te ayudamos a fortalecer la cohesión de tu equipo y a transmitir tu cultura" 
                            description="con actividades Team Building con juegos didácticos para luego ser donados." 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                        <Card 
                            imgSrc={solucion2} 
                            title="Convertimos tus entrenamientos en capacitaciones efectivas" 
                            description="con consultoría en gamificación para tus procesos de onboarding, upskilling o reskilling" 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                        <Card 
                            imgSrc={solucion3} 
                            title="Impulsamos el reconocimiento a tus colaboradores" 
                            description="con programas de beneficios de regalos y actividades para celebraciones como Family Day." 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                        <Card 
                            imgSrc={solucion4} 
                            title="Despertemos juntos vocaciones digitales en tu comunidad" 
                            description="con programas de RSE para mejorar la empleabilidad de jóvenes." 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
