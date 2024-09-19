import React from "react";

import forma1 from '../assets/images/formas/forma1.png';
import imagen from '../assets/images/soluciones/solucion0.png';

export function Experiencias() {
    return (
        <>  
            <section id="experiencias" className="w-screen flex bg-color4">
                <div className="mt-20 w-full min-h-screens mmd:w-full mmd:p-10 relative overflow-hidden">
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center mb-20">
                        
                        <div className="w-full mmd:w-2/4 text-left mt-20 text-1 mx-auto ml-40 2xl:ml-20 md:mx-auto md:mt-80 md:pt-4">
                            <h3 className="text-5xl 4xl:text-6xl md:text-4xl md:text-center md:text-center animate-fade animate-once animate-duration-[2000ms] animate-ease-linear">Diseñamos <br />experiencias<br /> de <b>aprendizaje</b></h3>
                            
                            <p className="text-1 text-xl w-[70%] mt-2 md:mx-auto text-justify md:w-[90%]">para que tu organización enfrente los desafíos del futuro laboral a través de la innovación educativa impactando en equipos y comunidades</p>

                            <a href="#metodo" className="text-2xl mt-4 mx-auto text-center bg-amber-300 rounded-full py-4 px-8 inline-block text-amber-300 text-white font-semibold md:text-lg md:px-4 md:mx-10 md:mt-10">
                            NUESTRA METODOLOGÍA
                            </a>
                        </div>

                        <img src={imagen} alt="experiencias" className="4xl:w-[30%] w-[40%] z-20 absolute right-[5rem]
                        2xl:mt-20 md:top-[-5rem] md:w-[75%] md:right-auto md:left-auto " />
                        
                        <img src={forma1} alt="forma" className="w-[45%] z-10 absolute bottom-[-5rem] right-[-5rem] origin-left opacity-[.4]
                            2xl:w-[50%] md:w-[100%] md:bottom-[-10rem] md:right-[-20rem] md:rotate-[-50Deg]
                            " />
                    </div>
                </div>
            </section>
        </>
    );
}
