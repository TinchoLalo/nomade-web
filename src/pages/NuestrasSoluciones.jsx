import React from "react";


import { SolucionesBanner } from "../components/solucionesBanner";
import { Confian } from '../components/confian';
import { SuiteTalento } from '../components/suiteTalento';
import { Form } from "../components/form";

function NuestrasSoluciones() {
  
    return (
        <div>
        
            <SolucionesBanner />
            <Confian/>
            <SuiteTalento/>
            <Form />
         
         <br /><br /><br /><br />
         <p className="text-3 p-2 mx-auto text-center">by Martín La Loggia</p>
        </div>
    );
}
export default NuestrasSoluciones;