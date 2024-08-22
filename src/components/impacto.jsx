import React from "react";

import forma2 from '../assets/images/forma2.svg';
import sostenibilidad from '../assets/images/sostenibilidad.svg';

export function Impacto() {
    return (
        <>  
            <section id="impacto" className="w-full flex">
                <div className="mt-20 w-full min-h-screens mmd:w-full md:mt-10 p-10">
                   
                    
                    <div className="flex flex-col mmd:flex-row justify-center text-center mx-auto items-center w-full">
                        
                        <div className="w-full mmd:w-2/4 text-center mt-20 text-1 mx-auto">
                            <h4 className="text-xl text-center">Nuestro impacto:</h4>
                            <h3 className="text-5xl">Sello compromiso de sostenibilidad</h3>
                            <img src={sostenibilidad} alt="logo" className="w-[50%] mx-auto p-10 opacity-[.6]" />
                            
                        </div>
                        
                        <div className="w-full mmd:w-2/4 text-center md:mt-2 mt-12 md:mt-32 text-1 mx-auto">
                            <div className="w-full mmd:w-[95%] h-auto rounded-2xl p-8 bg-color2 mb-8">
                                <h5 className="text-6xl flex text-left absolute">📊</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">Económico:</h4>
                                <p className="ml-20 block text-left">Doble beneficio</p>
                            </div>

                            <div className="w-full mmd:w-[95%] h-auto rounded-2xl p-8 bg-color2 mb-8">
                                <h5 className="text-6xl flex text-left absolute">♥️</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">En la comunidad: </h4>
                                <p className="ml-20 block text-left">Diseñados para colaborar</p>
                            </div>

                            <div className="w-full mmd:w-[95%] h-auto rounded-2xl p-8 bg-color2 mb-8">
                                <h5 className="text-6xl flex text-left absolute">🌎</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">Social:</h4>
                                <p className="ml-20 block text-left">Promoción de economías</p>
                            </div>

                            <div className="w-full mmd:w-[95%] h-auto rounded-2xl p-8 bg-color2">
                                <h5 className="text-6xl flex text-left absolute">🌿</h5>
                                <h4 className="ml-20 block text-2xl text-left font-bold">Medioambiental:</h4>
                                <p className="ml-20 block text-left">Producción y materiales 60% más amigable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
