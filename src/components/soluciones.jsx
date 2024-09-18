import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import forma1 from '../assets/images/formas/forma1.png';
import imagen1 from '../assets/images/soluciones/solucion0.png';
import imagen2 from '../assets/images/soluciones/solucion5.png';

export function Soluciones() {
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se dispara solo una vez
        threshold: 0.2, // Ajusta cuánto del componente tiene que estar visible antes de disparar
    });

    const fadeInVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 3.5 } },
    };

    return (
        <>  
            <section id="soluciones" className="w-screen flex">
                <div className="mt-20 2xl:mt-20 w-full min-h-screens mmd:w-full relative overflow-hidden" ref={ref}>
                    <div className="justify-center text-center mx-auto items-center mmd:flex 2xl:mb-20 4xl:mb-28 md:mb-60">
                        
                        <div
                            className="z-20 w-full mmd:w-2/4 text-left mt-6 text-1 mx-auto ml-40 2xl:ml-20 md:text-center md:mx-auto"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        >
                            <h3 className="text-6xl font-semibold md:text-4xl md:text-center">
                                Nuestras <br />soluciones<br />modulares
                            </h3>
                            <p className="text-1 text-xl w-[90%] mt-8 md:mx-auto md:text-justify md:w-[90%]">
                                Se <b>adaptan</b> a las necesidades específicas de <b>cada entorno</b> para fortalecer tanto empresas y organizaciones como instituciones educativas.
                            </p>
                        </div>

                        <motion.div
                            className="w-[80%] float-right mr-[-10rem] 2xl:mr-[-6rem] 2xl:w-full md:mx-auto md:float-center z-20"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeInVariants}
                        >
                            <div className="w-full mmd:w-[95%] h-auto mmd:rounded-l-full p-6 bg-color3 mmd:flex items-center md:rounded-3xl md:mt-20 fade-in slide-in-right">
                                <img src={imagen1} alt="experiencias" className="w-[25%] rounded-full md:w-[90%] md:mx-auto md:mt-[-5rem]" />
                                <div className="mmd:ml-16 md:mt-6">
                                    <h4 className="text-5xl font-bold text-1 2xl:text-4xl md:text-3xl md:mb-4"><span className="text-3 text-5xl md:text-4xl">nómade</span> for Company</h4>
                                    <p className="text-xl">La suite que potencia <span className="font-bold">entornos laborales y empresariales</span></p>
                                    <a href="/company" className="mt-10 text-md font-medium text-black font-semibold hover:underline">Quiero más info →</a>
                                </div>
                            </div>

                            <div className="w-full mmd:w-[95%] mt-10 h-auto mmd:rounded-l-full p-6 bg-color3 mmd:flex items-center md:rounded-3xl md:mt-20 z-20 fade-in slide-in-right">
                                <img src={imagen2} alt="experiencias" className="w-[25%] rounded-full md:w-[90%] md:mx-auto md:mt-[-5rem]" />
                                <div className="mmd:ml-16 md:mt-6">
                                    <h4 className="text-5xl font-bold text-1 2xl:text-4xl md:text-3xl md:mb-4"><span className="text-3 text-5xl md:text-4xl">nómade</span> for Education</h4>
                                    <p className="text-xl">La suite que potencia <span className="font-bold">entornos educativos y de formación</span></p>
                                    <a href="/education" className="mt-10 text-md font-medium text-black font-semibold hover:underline">Quiero más info →</a>
                                </div>
                            </div>
                        </motion.div>

                        <img src={forma1} alt="forma" className="w-[65%] z-10 absolute bottom-[-38rem] left-[-25rem] origin-left opacity-[.4] 2xl:bottom-[-28rem] md:left-[-5rem] md:top-[-5rem] md:rotate-45" />
                    </div>
                </div>
            </section>
        </>
    );
}
