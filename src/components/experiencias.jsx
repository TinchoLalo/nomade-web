import React from "react";

import forma1 from '../assets/images/formas/forma1.png';
import imagen from '../assets/images/soluciones/solucion0.png';

export function Experiencias() {
    return (
        <>  
            <section id="experiencias" className="w-screen flex bg-color4">
                <div className="mt-20 w-full min-h-screens mmd:w-full p-10 relative overflow-hidden">
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center mb-20">
                        
                        <div className="w-full mmd:w-2/4 text-left mt-20 text-1 mx-auto ml-40 2xl:ml-20 md:mx-auto md:mt-48">
                            <h3 className="text-6xl font-semibold md:text-4xl md:text-center">Diseñamos <br />experiencias<br /> de aprendizaje</h3>
                            
                            <p className="text-1 text-xl w-[70%] mt-8 md:mx-auto md:text-left md:w-full">para que las organizaciones se preparen y adapten a los nuevos desafíos, integrando habilidades blandas y tecnología con un impacto positivo en la comunidad y el medioambiente a través de nuestra metodología gamificada nómadeSTEAM</p>

                            <button className="mx-4 text-2xl mt-16 mx-auto text-center bg-amber-300 rounded-full py-4 px-8 inline-block text-amber-300 text-white font-semibold md:text-lg  md:mx-8 md:px-4">
                            NUESTRA METODOLOGÍA
                            </button>
                        </div>

                        <img src={imagen} alt="experiencias" className="w-[30%] z-20 absolute right-[5rem]
                        2xl:mt-20 md:top-[-5rem] md:w-[55%] md:right-auto md:left-auto " />
                        
                        <img src={forma1} alt="forma" className="w-[45%] z-10 absolute bottom-[-5rem] right-[-5rem] origin-left opacity-[.4]
                            2xl:w-[50%] md:w-[90%] md:bottom-[-18rem] md:right-[-20rem] md:rotate-[-50Deg]" />
                    </div>
                </div>
            </section>
        </>
    );
}
