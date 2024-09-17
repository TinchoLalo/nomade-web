import React from "react";


import { EducationBanner } from "../components/educationBanner";
import { Confian } from '../components/confian';
import { SuiteEducation } from '../components/suiteEducation';
import { Form } from "../components/form";
import { Contacto } from "../components/contacto";

function Education() {
  
    return (
        <div>
        
            <EducationBanner />
            <Confian/>
            <SuiteEducation/>
            <Form />
            <Contacto/>
        </div>
    );
}
export default Education;