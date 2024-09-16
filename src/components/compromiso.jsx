import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import forma from '../assets/images/formas/forma1.png';
import forma1 from '../assets/images/formas/forma1.png';

import imagen1 from '../assets/images/soluciones/solucion4.png';
import imagen2 from '../assets/images/soluciones/solucion1.png';
import imagen3 from '../assets/images/soluciones/solucion3.png';
import imagen4 from '../assets/images/soluciones/solucion2.png';

export function Compromiso() {
    // Variantes para las animaciones
    const boxVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    // Hooks para manejar la visibilidad de las cajas
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });
    const [ref4, inView4] = useInView({ triggerOnce: true });

    return (
        <>
            <section id="compromiso" className="w-screen flex bg-white relative overflow-hidden mx-auto text-center">
                <div className="mt-20 w-full min-h-screens mmd:p-10 mb-20 md:p-8 mx-auto text-center">
                    <h2 className="text-6xl font-semibold md:text-4xl md:text-center w-full text-center mx-auto z-20 relative">
                        Comprometidos con generar <b>impacto positivo</b>
                    </h2>
                    
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center w-full relative">

                        

                        <div className="w-full mmd:w-[70%] text-left mt-12 md:mt-32 text-1 mx-auto">
                        
                            {/* Caja 1 */}
                            <motion.div
                                ref={ref1}
                                initial="hidden"
                                animate={inView1 ? "visible" : "hidden"}
                                variants={boxVariants}
                                transition={{ duration: 0.6 }}
                                className="duration-200 w-full h-[12rem] rounded-full p-6 bg-color3 mmd:flex items-center mt-8 md:h-auto md:rounded-3xl md:mx-auto md:text-center relative z-20"
                            >
                                <img src={imagen1} alt="experiencias" className="w-[20%] md:w-[80%] md:mx-auto md:text-center" />
                                <div className="mmd:ml-12 ">
                                    <h4 className="text-4xl font-bold text-1 2xl:text-3xl md:mt-6">🤝 en las organizaciones</h4>
                                    <p className="text-xl w-[90%] md:text-left md:mx-auto md:w-full md:mt-4 ">
                                        Mejoramos la cohesión, productividad y habilidades blandas de los equipos para afrontar los desafíos del futuro
                                    </p>
                                </div>
                            </motion.div>

                            {/* Caja 2 */}
                            <motion.div
                                ref={ref2}
                                initial="hidden"
                                animate={inView2 ? "visible" : "hidden"}
                                variants={boxVariants}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="duration-200 w-full h-[12rem] rounded-full p-6 bg-color3 mmd:flex items-center mt-8 float-right md:h-auto md:rounded-3xl md:w-full md:mx-auto md:text-center relative z-20" 
                            >
                                <img src={imagen2} alt="experiencias" className="w-[20%] md:w-[80%] md:mx-auto md:text-center" />
                                <div className="mmd:ml-12">
                                    <h4 className="text-4xl font-bold text-1 2xl:text-3xl md:mt-6">❤️ en la comunidad</h4>
                                    <p className="text-xl w-[90%]  md:text-left md:mx-auto md:w-full md:mt-4">
                                        Nuestras propuestas están diseñadas para beneficiar a instituciones educativas o ser donadas a ellas una vez aprovechadas por las organizaciones.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Caja 3 */}
                            <motion.div
                                ref={ref3}
                                initial="hidden"
                                animate={inView3 ? "visible" : "hidden"}
                                variants={boxVariants}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="duration-200 w-full h-[12rem] rounded-full p-6 bg-color3 mmd:flex items-center mt-8 float-right md:h-auto md:rounded-3xl md:w-full md:mx-auto md:text-center relative z-20"
                            >
                                <img src={imagen3} alt="experiencias" className="w-[20%] md:w-[80%] md:mx-auto md:text-center" />
                                <div className="mmd:ml-12">
                                    <h4 className="text-4xl font-bold text-1 2xl:text-3xl md:mt-6">🌍 en las economias regionales</h4>
                                    <p className="text-xl w-[90%]  md:text-left md:mx-auto md:w-full md:mt-4">
                                        Impulsamos el crecimiento económico sostenible a través de nuestra producción descentralizada a través de alianzas con emprendimientos y cooperativas locales.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Caja 4 */}
                            <motion.div
                                ref={ref4}
                                initial="hidden"
                                animate={inView4 ? "visible" : "hidden"}
                                variants={boxVariants}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="duration-200 w-[100%] h-[12rem] rounded-full p-6 bg-color3 mmd:flex items-center mt-8 float-right md:h-auto md:rounded-3xl md:w-full md:mx-auto md:text-center relative z-20"
                            >
                                <img src={imagen4} alt="experiencias" className="w-[20%] md:w-[80%] md:mx-auto md:text-center" />
                                <div className="mmd:ml-12">
                                    <h4 className="text-4xl font-bold text-1 2xl:text-3xl md:mt-6">🌿 en el medioambiente</h4>
                                    <p className="text-xl w-[90%]  md:text-left md:mx-auto md:w-full md:mt-4">
                                        Diseñamos productos re-utilizables con materiales y procesos 60% más amigables con el medio ambiente.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <img src={forma} alt="experiencias" className="w-[100%] absolute left-[-65rem] top-10 opacity-[.3] rotate-[70Deg] z-[1]" />

                <img src={forma1} alt="forma" className="w-[65%]  absolute top-[12rem] right-[-45rem] origin-left opacity-[.4]" />
            </section>
        </>
    );
}
