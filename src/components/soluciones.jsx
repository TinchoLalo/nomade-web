import React from "react";

import forma2 from '../assets/images/forma2.svg';

import solucion1 from '../assets/images/soluciones/solucion1.png';
import solucion2 from '../assets/images/soluciones/solucion2.png';
import solucion3 from '../assets/images/soluciones/solucion3.png';
import solucion4 from '../assets/images/soluciones/solucion4.png';

export function Soluciones() {
    return (
        <>
            <section id="confian" className="w-screen flex">
                <div className="mt-40 w-full min-h-screens mmd:w-full">
                    <h2 className="text-1 text-4xl color6 font-semibold w-full text-center mmd:w-[85%] mmd:text-3xl mx-auto text-center">
                        Suite de soluciones: todo lo que necesitas para 
                        <span 
                            className="bg-no-repeat bg-contain inline-block"
                            style={{
                                backgroundImage: `url(${forma2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                padding: '0 1rem'
                            }}
                        >
                            tu talento
                        </span>
                    </h2>

                    <div className="w-[90%] mx-auto mt-14 flex flex-col mmd:flex-wrap mmd:flex-row justify-center gap-8 mmd:gap-4">
                        <div className="w-full mmd:w-[45%] mlg:w-[22%] border-2 px-4 py-6 rounded-3xl mt-20">
                            <img src={solucion1} alt="Solución 1" className="w-[70%] mx-auto -mt-24" />
                            <h3 className="text-2xl text-center p-4">Fortalece la cohesión de tu equipo</h3>
                            <p className="text-justify p-2">Te ayudamos a fortalecer la cohesión de tu equipo y a transmitir tu cultura con asesoramiento y materiales para actividades team building.</p>
                            <a href="" className="color1 text-center block mt-4 font-semibold hover:text-gray-400">Quiero más info</a>
                        </div>

                        <div className="w-full mmd:w-[45%] mlg:w-[22%] border-2 px-4 py-6 rounded-3xl mt-20">
                            <img src={solucion2} alt="Solución 2" className="w-[70%] mx-auto -mt-24" />
                            <h3 className="text-2xl text-center p-4">Capacitaciones efectivas</h3>
                            <p className="text-justify p-2">Convertimos tus entrenamientos en capacitaciones efectivas mediante consultoría para gamificar procesos de onboarding, upskilling o reskilling.</p>
                            <a href="" className="color1 text-center block mt-4 font-semibold hover:text-gray-400">Quiero más info</a>
                        </div>

                        <div className="w-full mmd:w-[45%] mlg:w-[22%] border-2 px-4 py-6 rounded-3xl mt-20">
                            <img src={solucion3} alt="Solución 3" className="w-[70%] mx-auto -mt-24" />
                            <h3 className="text-2xl text-center p-4">Reconocimiento a colaboradores</h3>
                            <p className="text-justify p-2">Impulsamos el reconocimiento a tus colaboradores con nuestros programas de beneficios y actividades para celebraciones significativas.</p>
                            <a href="" className="color1 text-center block mt-4 font-semibold hover:text-gray-400">Quiero más info</a>
                        </div>

                        <div className="w-full mmd:w-[45%] mlg:w-[22%] border-2 px-4 py-6 rounded-3xl mt-20">
                            <img src={solucion4} alt="Solución 4" className="w-[70%] mx-auto -mt-24" />
                            <h3 className="text-2xl text-center p-4">Vocaciones digitales</h3>
                            <p className="text-justify p-2">Te acompañamos a despertar vocaciones digitales en tu comunidad con programas de RSE para mejorar la empleabilidad de jóvenes.</p>
                            <a href="" className="color1 text-center block mt-4 font-semibold hover:text-gray-400">Quiero más info</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
