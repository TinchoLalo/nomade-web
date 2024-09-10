import React from "react";


import forma1 from '../assets/images/formas/forma1.png';
import imagen1 from '../assets/images/soluciones/solucion0.png';
import imagen2 from '../assets/images/soluciones/solucion5.png';

export function Soluciones() {
    return (
        <>  
            <section id="soluciones" className="w-screen flex">
                <div className="mt-16 2xl:mt-8 w-full min-h-screens mmd:w-full p-10 relative overflow-hidden">
                    
                    <div className="justify-center text-center mx-auto items-center mb-40 mmd:flex 2xl:mb-20">
                        
                        <div className="z-20 w-full mmd:w-2/4 text-left mt-10 text-1 mx-auto ml-40 2xl:ml-20 md:text-center md:mx-auto ">
                            <h3 className="text-7xl font-semibold md:text-5xl md:text-center color6">Nuestras <br />soluciones<br />modulares</h3>
                            
                            <p className="text-xl w-[90%] mt-8 md:mx-auto md:text-left md:w-full">
                                se <b>adaptan</b> a las necesidades específicas de <b>cada entorno</b> para fortalecer tanto empresas y organizaciones como instituciones educativas.
                            </p>

                
                        </div>

                        <div className="w-[80%] float-right mr-[-10rem] 2xl:mr-[-6rem] 2xl:w-full md:mx-auto md:float-center z-20 ">
                        
                            <div className="w-full mmd:w-[95%] h-auto mmd:rounded-l-full p-6 bg-color3 mmd:flex items-center md:rounded-3xl md:mt-20  fade-in slide-in-right">
                                <img src={imagen1} alt="experiencias" className="w-[25%] rounded-full md:w-[90%] md:mx-auto md:mt-[-5rem]" />
                                <div className="mmd:ml-16 md:mt-6">
                                    <h4 className="text-5xl font-bold text-1 2xl:text-4xl md:text-3xl md:mb-4"><span className="text-3 text-5xl md:text-4xl ">nómade</span> for Company</h4>
                                    <p className="text-xl">La suite que potencia <span className="font-bold">entornos laborales y empresariales</span></p>
                                    <a href="/nosotros" className="mt-4 text-sm font-medium text-black hover:underline">
                                    Quiero más info →
                                    </a>
                                </div>
                            </div>

                            
                            <div className="w-full mmd:w-[95%] mt-10 h-auto mmd:rounded-l-full p-6 bg-color3 mmd:flex items-center md:rounded-3xl md:mt-20 z-20 fade-in slide-in-right ">
                                <img src={imagen2} alt="experiencias" className="w-[25%] rounded-full md:w-[90%] md:mx-auto md:mt-[-5rem]" />
                                <div className="mmd:ml-16 md:mt-6">
                                    <h4 className="text-5xl font-bold text-1 2xl:text-4xl md:text-3xl md:mb-4"><span className="text-3 text-5xl md:text-4xl">nómade</span> for Education</h4>
                                    <p className="text-xl">La suite que potencia <span className="font-bold">entornos educativos y de formación</span></p>
                                    <a href="/soluciones" className="mt-4 text-sm font-medium text-black hover:underline">
                                    Quiero más info →
                                    </a>
                                </div>
                            </div>

                        </div>


                        
                        
                        <img src={forma1} alt="forma" className="w-[65%] z-10 absolute bottom-[-38rem] left-[-35rem] origin-left opacity-[.4] 
                        2xl:bottom-[-28rem] md:left-[-10rem] md:top-[-6rem] md:rotate-45" />
                    </div>
                </div>
            </section>
        </>
    );
}
