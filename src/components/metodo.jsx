import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

import forma2 from '../assets/images/formas/pintura1.svg';

export function Metodo() {
    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    }, [location]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>  
            <section id="metodo"  className="w-screen flex bg-orange-50 overflow-hidden md:mt-20">
                <div className="mt-20 w-full min-h-screens mmd:w-full mb-10 ">
                    <h2 className="text-6xl font-semibold md:text-xl text-center w-[90%] mx-auto md:-mt-6">
                        ¿Por qué aseguramos un aprendizaje que <b>inspira y conecta</b>?
                    </h2>
                    
                    <div   className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center">
                        <div className="z-20 w-full mmd:w-2/4 text-left mt-10 text-1 mx-auto ml-40 2xl:ml-20 md:mx-auto ">

                            <h3 className="text-6xl font-semibold md:text-4xl md:text-center md:text-4xl md:text-center animate-fade animate-once animate-duration-[2000ms] animate-ease-linear ">Nuestra <br />metodología<br />
                            <span 
                            className="bg-no-repeat bg-contain inline-block md:mt-2 mt-2 "
                            style={{
                                backgroundImage: `url(${forma2})`,
                                backgroundSize: '100%',
                                backgroundPosition: 'center',
                                padding: '.4rem 3rem'
                            }}
                            >
                            <b>nómadeSTEAM</b>
                            </span></h3>
                            <p className="text-xl w-[70%] text-justify md:mx-auto mt-8 md:w-[90%] animate-fade animate-once animate-duration-[2000ms] animate-ease-linear">
                                que garantiza un aprendizaje más atractivo y eficiente fundamentándose en tres pilares clave:
                            </p>
                        </div>
                        
                        <div className="w-full mmd:w-[50%] text-center mt-12 text-1 mx-auto mr-28 2xl:mr-4 md:mt-12 md:px-2">
                            {["🎲", "💡", "📈"].map((emoji, index) => (
                                <motion.div
                                    key={index}
                                    className="duration-700 w-full mmd:w-[95%]  min-h-[10rem] md:min-h-[13rem] rounded-2xl p-8 bg-white mb-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeInUp}
                                    viewport={{ once: true }}
                                >
                                    <h5 className="text-6xl flex text-left items-center absolute md:align-center md:mt-8 md:-ml-6">{emoji}</h5>
                                    <h4 className="ml-20 block text-3xl text-left font-bold md:ml-14 md:text-2xl">{getMetodoTitle(index)}</h4>
                                    <p className="ml-20 text-xl block text-left md:ml-14 md:text-lg">{getMetodoText(index)}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function getMetodoTitle(index) {
    const titles = ["Gamificación", "Design thinking", "Por desafíos"];
    return titles[index];
}

function getMetodoText(index) {
    const texts = [
        "Utilizamos dinámicas lúdicas para aumentar el interés y la motivación de los equipos.",
        "Fomentamos el pensamiento crítico y la creatividad para resolver problemas complejos.",
        "Proponemos retos que incentivan la participación activa y el compromiso."
    ];
    return texts[index];
}
