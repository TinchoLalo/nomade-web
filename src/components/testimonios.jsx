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
            text: "Nuestra asociación con Nómade para nuestro programa Gen Técnico -donde desde   2019 contribuimos a la educación y formación de jóvenes- ha sido sumamente positiva. Su enfoque y metodología han despertado el interés de los estudiantes desde una edad temprana, aumentando así su participación. Apreciamos su contribución en áreas novedosas como Realidad Aumentada, Robótica y Fabricación Digital, así como las dinámicas propuestas, como el concurso, donde los participantes aplicaron sus conocimientos con ideas innovadoras para nuestra ciudad.",
            authorn: "Antonella",
            authors: "Tassaroli",
            image: imagen1,
            logo: logo1
        },
        {
            text: "Nómade nos permitió expandir nuestro alcance al incorporar un nuevo segmento de público más joven, con el cual no habíamos trabajado anteriormente en nuestra formación de talento y educación digital. Las herramientas y metodologías de aprendizaje que utilizan han sido fundamentales para la sensibilización tecnológica en edades tempranas y para el desarrollo tanto de habilidades digitales como de competencias blandas. La experiencia con Nomade ha enriquecido significativamente nuestro enfoque educativo.",
            authorn: "Pablo",
            authors: "Navarro L",
            image: imagen2,
            logo: logo2
        },
        {
            text: "Conozco a Nómade desde sus inicios y puedo dar fe de la excelente labor que realizan. Es un placer colaborar con su equipo de profesionales, quienes son totalmente disruptivos en su enfoque. Como Secretario de Extensión Universitaria de la UTN, disfruto cada proyecto conjunto, siempre enfocados en el desarrollo del talento joven. Además, cuentan con instalaciones amigables y cómodas, ideales para fomentar la creatividad, la innovación, el arte, las matemáticas y la programación herramientas importantes para el desarrollo de la economía del conocimiento.",
            authorn: "Angel ",
            authors: "Quiles",
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
                <div className="mt-20 w-full mb-20 ">
                    <h2 className="title2 mmd:px-6 md:text-3xl md:text-center w-[80%] md:w-[90%] text-center mx-auto z-20 relative">
                        Te contamos <b>testimonios</b> reales que nos <b>enorgullecen</b>
                    </h2>

                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center w-full">
                        {testimonies.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="delay-700 w-[28%] h-[41rem] 4xl:h-[35rem] md:h-[45rem] rounded-xl p-6 bg-white items-center mt-8 mx-4 z-10 md:w-[99%] md:mt-14 flexbox"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={variants}
                            >
                                <div className="mt-10 relative min-h-[10rem] md:mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.authors}
                                        className="w-[12rem] absolute left-[-1rem] top-[-3rem] grayscale md:left-[-3rem] md:top-[-1rem]"
                                    />
                                    <h4 className="text-2xl ml-[13rem] text-left md:mt-10">{testimonial.authorn}</h4>
                                    <h4 className="text-2xl ml-[13rem] text-left -mt-2">{testimonial.authors}</h4>
                                    <img
                                        src={testimonial.logo}
                                        alt={testimonial.authors}
                                        className="mt-6 ml-[13rem] w-32 opacity-40 md:w-32"
                                    />
                                </div>
                                <p className="text-lg text-justify p-2">{testimonial.text}</p>
                                
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
