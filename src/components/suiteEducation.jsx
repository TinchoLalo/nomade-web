import React from "react";


import talento1 from '../assets/images/talento/talento1.png';
import talento2 from '../assets/images/talento/talento2.png';
import talento3 from '../assets/images/talento/talento3.png';
import talento4 from '../assets/images/talento/talento4.png';

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

export function SuiteEducation() {
    return (
        <>
            <section id="suiteEducation" className="w-screen flex bg-orange-50">
                <div className="mt-20 w-full mb-20">
                    <h2 className="text-center text-4xl text-gray-800 font-semibold w-full mmd:w-[85%] mx-auto md:2-[80%] md:text-3xl">
                    Transforma tu Instituto con soluciones diseñadas para mejorar la gestión, espacio y habilidades tecnológicas.
                       
                    </h2>

                    <div className="w-[90%] mx-auto mt-14 flex flex-col mmd:flex-wrap mmd:flex-row justify-center gap-8 mmd:gap-4">
                        <Card 
                            imgSrc={talento1} 
                            title="Facilitamos la gestión garantizando mayor transparencia y control." 
                            description="con un Sistema de Gestión Educativa en nuestra aplicación personalizada." 
                            linkText="Quiero más info" 
                            url="https://youtu.be/gT8J9mBsqm8?si=4MZOGkqvWRFKBrWE"
                        />
                        <Card 
                            imgSrc={talento2} 
                            title="Transformamos tu aula en un espacio de creatividad e innovación." 
                            description="con Mobiliario y equipamiento flexible, adaptable y de rápida instalación y limpieza." 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                        <Card 
                            imgSrc={talento3} 
                            title="Potenciamos el talento de tus educadores en el uso de tecnología" 
                            description="con Cursos intensivos y prácticos con Certificació avalada por UTN." 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                        <Card 
                            imgSrc={talento4} 
                            title="Sumamos diversión volviendo más atractivo el aprendizaje" 
                            description="con Kits de Proyectos STEAM interactivos para facilitar labor docente." 
                            linkText="Quiero más info" 
                            url="#form"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
