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
            <section id="experiencias" className="w-screen flex bg-color4">
                <div className="mt-2 w-full min-h-screens mmd:w-full p-10 relative overflow-hidden">

                    <div className="duration-200 flex flex-col mmd:flex-row justify-center text-center mx-auto items-center mb-2">
                        {/* Texto a la izquierda (sin animación) */}
                        <div className="duration-200 w-full mmd:w-3/4 text-left mt-20 text-1 mx-auto ml-40 2xl:ml-20 md:mx-auto md:mt-48">
                            <h4 className="text-3xl md:text-2xl md:text-center mmd:w-[50%] italic mb-4">{frase}</h4>
                            <h3 className="text-6xl font-semibold md:text-4xl md:text-center mmd:w-[50%]">{title}</h3>

                            <p className="text-1 text-xl w-[50%] mt-8 md:mx-auto md:text-left md:w-full">{description}</p>

                            <a href={url}>
                                <button className="mx-4 text-2xl mt-16 mx-auto text-center bg-amber-300 rounded-full py-4 px-8 inline-block text-white font-semibold md:text-lg md:mx-8 md:px-4">
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
                            className="w-[35%] z-20 absolute right-[5rem] 2xl:mt-20 md:top-[-5rem] md:w-[55%] md:right-auto md:left-auto"
                        />
                    </div>

                    {/* Forma decorativa (sin animación) */}
                    <img
                        src={forma1}
                        alt="forma"
                        className="w-[60%] z-10 absolute bottom-[-30rem] right-[-20rem] origin-left opacity-[.4]
                        md:w-[90%] md:bottom-[-18rem] md:right-[-20rem] rotate-[-50Deg]"
                    />
                </div>
            </section>
        </>
    );
}
