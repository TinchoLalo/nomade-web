import React from "react";

import forma1 from '../assets/images/formas/forma1.png';

export function StoryRight({ frase, title, description, button, url, imagen }) {
    return (
        <>
            <section id="experiencias" className="w-screen flex bg-color4">
                <div className="mt-2 w-full min-h-screens mmd:w-full p-10 relative overflow-hidden">
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center mb-2 ">
                        {/* Imagen a la izquierda en pantallas grandes, arriba en móviles */}
                        <img src={imagen} alt="experiencias" className="w-[35%] md:w-[60%] mmd:w-[40%] z-20 mb-10 md:mb-0 mmd:mb-0 mmd:mr-10 md:mx-auto" />
                        
                        {/* Texto a la derecha en pantallas grandes, centrado en móviles */}
                        <div className="w-full mmd:w-3/4 text-left mt-20 md:mt-6 text-1 mx-auto md:text-center ">
                            <h4 className="mx-auto mmd:w-[70%] text-3xl md:text-2xl md:text-center italic mb-4">{frase}</h4>
                            <h3 className="text-6xl font-semibold md:text-4xl md:text-center mmd:w-[70%] mx-auto">{title}</h3>
                            
                            <p className="text-1 text-xl mmd:w-[70%] md:w-full mt-8 mx-auto md:text-center">{description}</p>

                            <a href={url}>
                                <button className="mmd:ml-28 text-2xl mt-16 mx-auto text-center bg-amber-300 rounded-full py-4 px-8 inline-block text-white font-semibold md:text-lg md:px-4 ">
                                    {button}
                                </button>
                            </a>
                        </div>

                        {/* Imagen decorativa */}
                        <img src={forma1} alt="forma" className="w-[45%] z-10 absolute bottom-[-5rem] left-[-5rem] origin-left opacity-[.4]
                            2xl:w-[50%] md:w-[90%] md:bottom-[-18rem] md:left-[-20rem] md:rotate-[-50Deg]" />
                    </div>
                </div>
            </section>
        </>
    );
}
