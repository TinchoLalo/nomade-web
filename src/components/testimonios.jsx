import React from "react";
import { motion } from "framer-motion";

import forma1 from '../assets/images/formas/forma2.svg';
import forma2 from '../assets/images/formas/forma1.png';

import imagen1 from '../assets/images/testimonios/testimonio1.png';
import logo1 from '../assets/images/confian/tassaroli.svg';

import imagen2 from '../assets/images/testimonios/testimonio2.png';
import logo2 from '../assets/images/confian/mendozaciudad.svg';

import imagen3 from '../assets/images/testimonios/testimonio3.png';
import logo3 from '../assets/images/confian/utn.svg';

export function Testimonio() {
    const testimonies = [
        {
            text: "Nuestra asociación con Nómade para nuestro programa Gen Técnico -donde desde 2019 contribuimos a la educación y formación de jóvenes- ha sido sumamente positiva. Su enfoque y metodología han despertado el interés de los estudiantes desde una edad temprana, aumentando así su participación. Apreciamos su contribución en áreas novedosas como Realidad Aumentada, Robótica y Fabricación Digital, así como las dinámicas propuestas, como el concurso, donde los participantes aplicaron sus conocimientos con ideas innovadoras para nuestra ciudad.",
            author: "Antonella Tassaroli",
            image: imagen1,
            logo: logo1
        },
        {
            text: "Nómade nos permitió expandir nuestro alcance al incorporar un nuevo segmento de público más joven, con el cual no habíamos trabajado anteriormente en nuestra formación de talento y educación digital. Las herramientas y metodologías de aprendizaje que utilizan han sido fundamentales para la sensibilización tecnológica en edades tempranas y para el desarrollo tanto de habilidades digitales como de competencias blandas. La experiencia con Nomade ha enriquecido significativamente nuestro enfoque educativo.",
            author: "Pablo Navarro Lehoux",
            image: imagen2,
            logo: logo2
        },
        {
            text: "Conozco a Nómade desde sus inicios y puedo dar fe de la excelente labor que realizan. Es un placer colaborar con su equipo de profesionales, quienes son totalmente disruptivos en su enfoque. Como Secretario de Extensión Universitaria de la UTN, disfruto cada proyecto conjunto, siempre enfocados en el desarrollo del talento joven. Además, cuentan con instalaciones amigables y cómodas, ideales para fomentar la creatividad, la innovación, el arte, las matemáticas y la programación herramientas importantes para el desarrollo de la economía del conocimiento.",
            author: "Angel Quiles",
            image: imagen3,
            logo: logo3
        }
    ];

    // Variants for the animation
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <>
            <section id="testimonios" className="w-screen flex relative overflow-hidden bg-orange-50">
                <div className="mt-20 w-full p-10 mb-20">
                    <h2 className="text-4xl font-semibold text-center color6 mmd:text-5xl">
                        Te contamos <b>testimonios</b> reales que nos <b>enorgullecen</b>
                    </h2>

                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center w-full">
                        {testimonies.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="delay-700 w-[40%] min-h-[20rem] h-auto rounded-xl p-6 bg-white items-center mt-8 mx-8 z-10 md:w-full md:mt-14"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={variants}
                            >
                                <p className="text-lg text-justify p-2">{testimonial.text}</p>
                                <div className="mt-10 relative mb-2">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-[12rem] absolute left-[-4rem] top-[-1rem] grayscale md:left-[-3rem]"
                                    />
                                    <h4 className="text-3xl ml-40 text-left">{testimonial.author}</h4>
                                    <img
                                        src={testimonial.logo}
                                        alt={testimonial.author}
                                        className="mt-6 ml-40 w-40 opacity-40"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <img
                    src={forma2}
                    alt="background-shape"
                    className="w-[55%] absolute top-[-20rem] left-[-10rem] origin-left opacity-40 rotate-90"
                />
            </section>
        </>
    );
}
