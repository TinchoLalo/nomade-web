import React from "react";

import forma2 from '../assets/images/forma2.svg';
import logo from '../assets/images/logo2.svg';

export function Metodo() {
    return (
        <>  
            <section id="banner" className="w-screen flex">
                <div className="mt-40 w-full min-h-screens mmd:w-full p-10">
                    <h2 className="text-1 text-4xl color6 font-semibold w-full text-center mmd:text-4xl mx-auto ">
                        El problema no es el tiempo, lo que falta es un método
                    </h2>
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center">
                        
                        <div className="w-full mmd:w-2/4 text-center mt-20 text-1 mx-auto">
                            <h3 className="text-5xl">Metodología de <br />aprendizaje</h3>
                            <img src={logo} alt="logo" className="w-[80%] mx-auto p-10" />
                            <h4 className="text-5xl">S.T.E.A.M</h4>
                        </div>
                        
                        <div className="w-full mmd:w-2/4 text-center mt-12 md:mt-32 text-1 mx-auto">
                            <div className="w-full mmd:w-[85%] h-auto rounded-2xl p-8 bg-color2 mb-8">
                                <h5 className="text-6xl flex text-left absolute">🎲</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">Gamificación</h4>
                                <p className="ml-20 block text-left">Despierta interés y la colaboración </p>
                            </div>

                            <div className="w-full mmd:w-[85%] h-auto rounded-2xl p-8 bg-color2 mb-8">
                                <h5 className="text-6xl flex text-left absolute">💡</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">Design thinking</h4>
                                <p className="ml-20 block text-left">Fomenta la creatividad y pensamiento crítico</p>
                            </div>

                            <div className="w-full mmd:w-[85%] h-auto rounded-2xl p-8 bg-color2">
                                <h5 className="text-6xl flex text-left absolute">📈</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">Por desafíos</h4>
                                <p className="ml-20 block text-left">Motiva la participación y compromiso</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
