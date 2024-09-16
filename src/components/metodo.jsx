import React from "react";
import { motion } from "framer-motion";


export function Metodo() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <>  
            <section id="metodo" className="w-screen flex bg-orange-50 overflow-hidden">
                <div className="mt-20 w-full min-h-screens mmd:w-full p-10 mb-10 md:mt-2">
                    <h2 className="text-6xl font-semibold md:text-2xl text-center">
                        Aseguramos un aprendizaje que <b>inspira</b> y <b>conecta</b>
                    </h2>
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center">
                        <div className="z-20 w-full mmd:w-2/4 text-left mt-10 text-1 mx-auto ml-40 2xl:ml-20 md:mx-auto ">
                            <h3 className="text-6xl font-semibold md:text-4xl md:text-center md:text-4xl md:text-center animate-fade animate-once animate-duration-[2000ms] animate-ease-linear ">Nuestra <br />metodología<br /><b>nómadeSTEAM</b></h3>
                            <p className="text-xl w-[70%] mt-8 md:w-full animate-fade animate-once animate-duration-[2000ms] animate-ease-linear">
                                garantiza que el aprendizaje sea más atractivo y eficiente fundamentándose en tres pilares clave:
                            </p>
                        </div>
                        
                        <div className="w-full mmd:w-[50%] text-center mt-12 text-1 mx-auto mr-28 2xl:mr-4 md:mt-12">
                            {["🎲", "💡", "📈"].map((emoji, index) => (
                                <motion.div
                                    key={index}
                                    className="duration-700 w-full mmd:w-[95%] h-auto rounded-2xl p-8 bg-white mb-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeInUp}
                                    viewport={{ once: true }}
                                >
                                    <h5 className="text-6xl flex text-left absolute">{emoji}</h5>
                                    <h4 className="ml-20 block text-2xl text-left font-bold">{getMetodoTitle(index)}</h4>
                                    <p className="ml-20 block text-left">{getMetodoText(index)}</p>
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
        "Despierta interés y fomenta la colaboración a través de dinámicas lúdicas.",
        "Estimula la creatividad y pensamiento crítico para resolver problemas.",
        "Motiva la participación y compromiso a través de retos prácticos."
    ];
    return texts[index];
}
