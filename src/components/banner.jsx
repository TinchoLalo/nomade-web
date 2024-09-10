import React from "react";

import forma1 from '../assets/images/formas/forma1.png';
import forma2 from '../assets/images/forma2.svg';
import { FaArrowDown } from "react-icons/fa6";

export function Banner() {
    return (
        <>  
            <section id="banner" className="w-screen min-h-screen flex bg-orange-50">
                <div className="mt mt-60  w-full min-h-screens md:w-full mx-auto text-center overflow-hidden relative">
                    
                    
                    
                    <h2 className="z-20 relative text-1 text-7xl color6 w-2/3 text-center mx-auto 
                    md:w-[80%] md:text-6xl md:mx-auto md:text-center 
                    
                    ">
                        el <b>futuro</b>  del trabajo <br />
                        <span 
                            className="bg-no-repeat bg-contain inline-block md:mt-2 "
                            style={{
                                backgroundImage: `url(${forma2})`,
                                backgroundSize: '100%',
                                backgroundPosition: 'center',
                                padding: '.4rem 3rem'
                            }}
                        >
                            es <b>hoy</b>
                        </span>
                    </h2>
                   
                            
                    <p className="z-20 relative mx-[1.2rem] text-2xl mt-24 mx-auto text-center border-amber-300 border-2 rounded-full px-10 inline-block text-amber-300
                    md:text-lg md:mx-2 md:px-2 ">#edTeach</p>

                    <p className="z-20 relative mx-[1.2rem] text-2xl mt-24 mx-auto text-center border-amber-300 border-2 rounded-full  px-10 inline-block text-amber-300 md:mt-2 md:text-lg md:mx-2 md:px-2 ">#FutureOfWork</p>

                    <p className="z-20 relative mx-[1.2rem] text-2xl mt-24 mx-auto text-center border-amber-300 border-2 rounded-full  px-10 inline-block text-amber-300 md:mt-2 md:text-lg md:mx-2 md:px-2  ">#STEAMed</p>
                    
                    <br />
                    <a className="mx-4 text-3xl mt-24 mx-auto text-center bg-amber-300 rounded-full py-2 px-16 inline-block text-amber-300 md:mt-32" href="#experiencias">
                        <FaArrowDown className="text-white"/>
                    </a>
                    
                    <img src={forma1} alt="forma" className="w-[85%] z-10 absolute bottom-[-30rem] right-[-50rem] origin-left opacity-[.3] md:right-[-15rem] md:bottom-[-10rem] md:w-[250rem]" />
                </div>
                
               
                
               

            </section>
        </>
    );
}
