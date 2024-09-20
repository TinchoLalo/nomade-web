import React from "react";
import { motion } from "framer-motion"; // Importa Framer Motion
import forma1 from '../assets/images/formas/forma1.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 100 },  // Empieza invisible y desplazado hacia abajo
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" }, // Animación suave
    },
};

export function StoryLeft({ frase, title, description, button, url, imagen }) {
    return (
        <>
            <section id="experiencias" className="w-screen flex ">
                <div className="mt-2 w-full  mmd:w-full p-10 relative ">

                    <div className="duration-200 flex flex-col mmd:flex-row justify-center text-center mx-auto items-center mb-2">
                        {/* Texto a la izquierda (sin animación) */}
                        <div className="duration-200 w-full mmd:w-3/4 text-left mt-20 text-1 mx-auto ml-40 2xl:ml-20 md:mx-auto md:mt-[17rem]">
                            <h4 className="text-3xl md:text-2xl md:text-center mmd:w-[50%] italic mb-4">{frase}</h4>
                            <h3 className="title2 4xl:text-6xl md:text-4xl md:text-center animate-fade animate-once animate-duration-[2000ms] animate-ease-linear mmd:w-[50%]">{title}</h3>

                            <p className="des w-[50%] mt-2 md:mx-auto text-justify md:w-full">{description}</p>

                            <a href={url}>
                                <button className="z-20 relative mx-4 text-2xl mt-4 mx-auto text-center bg-gray-500 hover:text-amber-300 rounded-full py-4 px-8 inline-block text-white font-semibold md:text-lg md:mx-2 md:px-2">
                                    {button}
                                </button>
                            </a>
                        </div>

                        {/* Imagen a la derecha con animación */}
                        <motion.img
                            src={imagen}
                            alt="experiencias"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }} // Activa la animación cuando la imagen se vea
                            variants={fadeInUp}
                            className="duration-200 w-[30%] z-20 absolute right-[5rem] 2xl:mt-20 md:top-[-5rem] md:w-[75%] md:right-auto md:left-auto"
                        />
                    </div>

                    {/* Forma decorativa (sin animación) */}
                    <img
                        src={forma1}
                        alt="forma"
                        className="w-[50%] z-10 absolute bottom-[-20rem] right-[-20rem] origin-left opacity-[.4]
                        md:w-[90%] md:bottom-[-10rem] md:right-[-10rem] rotate-[-50Deg]"
                    />
                </div>
            </section>
        </>
    );
}
