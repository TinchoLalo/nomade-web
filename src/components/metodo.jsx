import React from "react";

import forma2 from '../assets/images/forma2.svg';

export function Metodo() {
    return (
        <>  
            <section id="banner" className="w-screen flex">
                <div className="mt-40 w-full min-h-screens md:w-full  p-10">
                    <h2 className="text-1 text-4xl color6 font-semibold w-full text-center md:text-4xl md:mx-auto md:text-justify">
                        El problema no es el tiempo, lo que falta es un método
                    </h2>
                    
                    <div className="flex justify-center text-center mx-auto items-center">
                        
                        <div className="w-2/4 text-center mt-32 text-1 mx-auto">
                            <h3 className="text-5xl">Metodología de <br />aprendizaje</h3>
                        </div>
                        
                        <div className="w-2/4 w-full text-center mt-32 text-1 mx-auto">
                            <div className="w-[85%] h-auto rounded-2xl p-8 bg-color1">
                                <h5 className="text-6xl flex text-left absolute">🎲</h5>
                                <h4 className="ml-20 block text-2xl text-left">Gamificación</h4>
                                <p className="ml-20 block text-left">Despierta interés y la colaboración </p>
                            </div>

                            <div className="w-[85%] h-auto rounded-2xl p-8 mt-8 bg-color1">
                                <h5 className="text-6xl flex text-left absolute">🎲</h5>
                                <h4 className="ml-20 block text-2xl text-left">Gamificación</h4>
                                <p className="ml-20 block text-left">Despierta interés y la colaboración </p>
                            </div>

                            <div className="w-[85%] h-auto rounded-2xl p-8 mt-8 bg-color1">
                                <h5 className="text-6xl flex text-left absolute">🎲</h5>
                                <h4 className="ml-20 block text-2xl text-left">Gamificación</h4>
                                <p className="ml-20 block text-left">Despierta interés y la colaboración </p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            

            </section>
        </>
    );
}
