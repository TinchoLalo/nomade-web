import React from "react";
import { motion } from "framer-motion";
import forma1 from '../assets/images/formas/forma1.png';

// Definimos la animación solo para la imagen
const fadeInUp = {
    hidden: { opacity: 0, y: 100 },  // Comienza invisible y desplazado hacia abajo
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" }, // Transición suave
    },
};

export function StoryRight({ frase, title, description, button, url, imagen }) {
    return (
        <>
            <section id="experiencias" className="w-screen flex ">
                <div className="mt-2 w-full mmd:w-full p-10 relative ">
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center mb-2">
                        {/* Imagen a la izquierda en pantallas grandes, arriba en móviles */}
                        <motion.img
                            src={imagen}
                            alt="experiencias"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }} // Activa la animación cuando la imagen se ve
                            variants={fadeInUp} // Animación solo para la imagen
                            className="duration-200 w-[30%] md:w-[75%] ml-[5rem] z-20 mb-10 md:mb-0 mmd:mb-0 mmd:mr-10 md:mx-auto"
                        />
                        
                        {/* Texto a la derecha en pantallas grandes, centrado en móviles */}
                        <div className="w-full mmd:w-3/4 text-left mt-20 md:mt-6 text-1 mx-auto md:text-center">
                            <h4 className="mx-auto mmd:w-[70%] text-3xl md:text-2xl md:text-center italic mb-4">{frase}</h4>
                            <h3 className="title2 4xl:text-6xl md:text-4xl md:text-center animate-fade animate-once animate-duration-[2000ms] animate-ease-linear mmd:w-[70%] mx-auto">{title}</h3>
                            
                            <p className="des mmd:w-[70%] md:w-full mt-2 mx-auto text-justify">{description}</p>

                            <a href={url}>
                                <button className="z-20 relative mmd:ml-28 text-2xl mt-4 mx-auto text-center bg-gray-500 hover:text-amber-300 rounded-full py-4 px-8 inline-block text-white font-semibold md:text-lg md:px-4">
                                    {button}
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Imagen decorativa */}
                    <img
                        src={forma1}
                        alt="forma"
                        className="w-[30%] z-10 absolute bottom-[-5rem] left-[-5rem] origin-left opacity-[.4]
                        2xl:w-[50%] md:w-[90%] md:bottom-[-10rem] md:left-[-9rem] md:rotate-[-50Deg]"
                    />
                </div>
            </section>
        </>
    );
}
