import React from "react";
import banner1 from '../assets/images/soluciones/solucion6.png';
import forma1 from '../assets/images/formas/forma.png';
import forma2 from '../assets/images/formas/pintura1.svg';

export function EducationBanner() {
    return (
        <>  
            <section id="banner" className="w-screen flex ">
                <div className="mt-60 w-full mb-80 md:mb-24 md:w-full md:mt-[28rem]">
                    <h2 className="text-1 text-6xl color6 font-semibold w-3/6 text-left ml-24
                    md:w-[90%] md:text-4xl md:mx-auto md:text-center">
                        Tenemos todo lo <br /> que necesitas para <br />
                        potenciar tu <span 
                            className="bg-no-repeat bg-contain inline-block "
                            style={{
                                backgroundImage: `url(${forma2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                padding: '0 1rem'
                            }}
                        >
                            instituto
                        </span>
                    </h2>
                    <p className="text-xl w-3/6 text-left ml-24 mt-6
                    lg:w-[85%] lg:mx-auto">
                    Desde gestionar tu instituto de manera eficiente hasta transformarlo en un entorno creativo con equipos de calidad. Además, brindamos capacitación rápida para tu personal en varias disciplinas tecnológicas y suministramos kits de proyectos STEAM para todas las edades.
                    </p>

                    <a href="#suiteEducation" className="mt-6 p-4 px-6 my-4 text-white rounded-full text-left ml-24 float-left bg-color1 hover:bg-gray-400 text-2xl font-bold
                    md:mx-auto lg:w-[65%] md:text-center md:text-xl md:px-2 md:ml-6 md:w-[85%]
                    ">Conocé nuestra suite</a>
                    
                </div>
                <img src={forma1} alt="" className=" absolute right-4  max-w-[40%] h-auto object-contain top-[-25rem]  opacity-[.2] 
                md:top-[-18rem] md:right-0 md:left-0 md:mx-auto md:max-w-full 4xl:top-[-40rem]" />

                <img src={banner1} alt="nuestro team" className=" absolute right-16 max-w-[35%] h-auto object-contain top-40 animate-fade animate-duration-1000 animate-ease-linear
                md:max-w-[90%] md:top-28 md:right-0 md:left-0 md:mx-auto" />
               

            </section>
        </>
    );
}