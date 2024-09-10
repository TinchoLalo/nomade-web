import React from "react";


import { NosotrosBanner } from '../components/nosotrosBanner';
import { Confian } from '../components/confian';
import { Suite } from '../components/suite';
import { Soluciones } from "../components/soluciones";
import { Form } from "../components/form";
import { Experiencias } from "../components/experiencias";
import { Compromiso } from "../components/compromiso";
import { Testimonio } from "../components/testimonios";

function Nosotros() {
  
    return (
        <div>
        
            <NosotrosBanner />
            <Confian/>
            <Suite/>
            
            
            <Form />
         
         <br /><br /><br /><br />
         <p className="text-3 p-2 mx-auto text-center">by Martín La Loggia</p>
        </div>
    );
}
export default Nosotros;