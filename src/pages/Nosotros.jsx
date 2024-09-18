import React from "react";


import { StoryLeft } from "../components/storyLeft";
import { StoryRight } from "../components/storyRight";
import { Contacto } from "../components/contacto";

import forma2 from '../assets/images/formas/pintura1.svg';
import imagen1 from '../assets/images/nosotros/nosotros1.png';
import imagen2 from '../assets/images/nosotros/nosotros2.png';
import imagen3 from '../assets/images/nosotros/nosotros3.png';
import imagen4 from '../assets/images/nosotros/nosotros4.png';
import imagen5 from '../assets/images/soluciones/solucion0.png';
import imagen6 from '../assets/images/nosotros/nosotros5.png';

function Nosotros() {
  
    return (
        <div>
            
            <h2 className="mt-60 mb-10 z-20 relative text-1 text-7xl color6 w-2/3 text-center mx-auto md:w-[95%] md:text-6xl md:mx-auto md:text-center font-semibold md:mt-40">
                nuestro camino<br /> hacia el
                <span 
                    className="bg-no-repeat bg-contain inline-block md:mt-2 "
                    style={{
                        backgroundImage: `url(${forma2})`,
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                        padding: '.4rem 3rem'
                    }}
                >
                <b>impacto</b>
                </span>
            </h2>
            <StoryLeft
                frase="Los inicios"
                title="Nómade Makerspace nace en 2018"
                description="como una escuela de inventores con nuestra metodología nómadeSTEAM, combinando gamificación, design thinking y aprendizaje por desafíos para crear experiencias de aprendizaje más atractivas."
                button="CONOCE NUESTRO INSTITUTO"  
                url="https://www.instagram.com/nomade.institutomaker/"
                imagen={imagen1}
            />

            <StoryRight    
                frase="Llegar a la comunidad"
                title="Logramos inspirar a innovar a miles de estudiantes de nuestra Ciudad"
                description="gracias a una alianza con la Universidad Tecnológica Nacional diseñamos eventos libres y gratuitos que promueven la cultura maker y las competencias STEAM: Hackaton, Competencia de Robótica y Gadeco, declarados de interés provincial."
                button="CONOCE NUESTROS EVENTOS"  
                url="https://www.youtube.com/watch?v=rPXJwoDsY0E"
                imagen={imagen2}
            />

            <StoryLeft
                frase="Para inspirar cada vez a más"
                title="Creamos programas educativos de impacto social"
                description="que permiten a empresas y gobiernos fomentar vocaciones digitales y mejorar la empleabilidad de jóvenes en un mundo hiperconectado y en constante cambio"
                button="CONOCE NUESTROS PROGRAMAS"  
                url="/#metodo"
                imagen={imagen3}
            />

            <StoryRight    
                frase="Impactar mas allá de la educación"
                title="Transformamos el modo de trabajar"
                description="diseñando un modelo de producción descentralizada por fabricación digital por alianzas con emprendedores locales para escalar nuestras soluciones y generar impacto en economías regionales."
                button="CONOCE NUESTRO MODELO"  
                url="/#compromiso"
                imagen={imagen4}
            />

            <StoryLeft
                frase="La tecnología nos impacta a todos"
                title="Creamos Nómade for Company"
                description="una suite de soluciones modulares para empresas, enfrentando los desafíos del futuro del trabajo con un enfoque en habilidades blandas y tecnológicas."
                button="CONOCE NÓMADE FOR COMPANY"  
                url="/company"
                imagen={imagen5}
            />

            <StoryRight    
                frase="Expansión global"
                title="Vamos a democratizar el acceso a la educación innovadora"
                description="con nuestra metodología NómadeSTEAM y nuestro modelo de negocio de impacto, nos estamos preparando para escalar internacionalmente y llevar sus soluciones a nuevos lugares, te sumas al desafío?"
                button="CONOCE NUESTRO ROADMAP"  
                url="/education"
                imagen={imagen6}
            />
            <Contacto/>
         
        </div>
    );
}
export default Nosotros;