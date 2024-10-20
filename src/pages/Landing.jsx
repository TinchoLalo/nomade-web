import React from "react";


import { Banner } from '../components/banner';
import { Confian } from '../components/confian';
import { Metodo } from '../components/metodo';
import { Soluciones } from "../components/soluciones";
import { Form } from "../components/form";
import { Experiencias } from "../components/experiencias";
import { Compromiso } from "../components/compromiso";
import { Testimonio } from "../components/testimonios";
import { Contacto } from "../components/contacto";

function Landing() {
  
    return (
        <div>
        
            <Banner />
            <Experiencias/>
            <Confian />
            <Soluciones />
            <Metodo/>
            <Compromiso/>
            <Testimonio/>
            <Form />
            <Contacto/>
         
        </div>
    );
}
export default Landing;