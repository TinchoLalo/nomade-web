import React from "react";


import { Banner } from '../components/banner';
import { Confian } from '../components/confian';
import { Metodo } from '../components/metodo';
import { Soluciones } from "../components/soluciones";

function Landing() {
  
    return (
        <div>
        
          <Banner />
          <Confian />
          <Metodo />
          <Soluciones />
         
         <br /><br /><br /><br />
        </div>
    );
}
export default Landing;