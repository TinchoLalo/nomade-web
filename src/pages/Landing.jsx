import React from "react";


import { Banner } from '../components/banner';
import { Confian } from '../components/confian';
import { Metodo } from '../components/metodo';
import { Soluciones } from "../components/soluciones";
import { Impacto } from "../components/impacto";
import { Form } from "../components/form";


function Landing() {
  
    return (
        <div>
        
          <Banner />
          <Confian />
          <Metodo />
          <Soluciones />
          <Impacto />
          <Form />
         
         <br /><br /><br /><br />
        </div>
    );
}
export default Landing;