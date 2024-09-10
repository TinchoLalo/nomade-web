import React from "react";

import { NosotrosBanner } from '../components/nosotrosBanner';
import { Confian } from '../components/confian';
import { Suite } from '../components/suite';
import { Form } from "../components/form";
import { Contacto } from "../components/contacto";

function Nosotros() {
  
    return (
        <div>
        
            <NosotrosBanner />
            <Confian/>
            <Suite/>
        
            <Form />
         
            <Contacto/>
        </div>
    );
}
export default Nosotros;