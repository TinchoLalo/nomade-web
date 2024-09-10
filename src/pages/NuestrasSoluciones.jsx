import React from "react";


import { SolucionesBanner } from "../components/solucionesBanner";
import { Confian } from '../components/confian';
import { SuiteTalento } from '../components/suiteTalento';
import { Form } from "../components/form";
import { Contacto } from "../components/contacto";

function NuestrasSoluciones() {
  
    return (
        <div>
        
            <SolucionesBanner />
            <Confian/>
            <SuiteTalento/>
            <Form />
            <Contacto/>
        </div>
    );
}
export default NuestrasSoluciones;