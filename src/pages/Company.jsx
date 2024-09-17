import React from "react";

import { CompanyBanner } from '../components/companyBanner';
import { Confian } from '../components/confian';
import { SuiteCompany } from '../components/suiteCompany';
import { Form } from "../components/form";
import { Contacto } from "../components/contacto";

function Company() {
  
    return (
        <div>
        
            <CompanyBanner />
            <Confian/>
            <SuiteCompany/>
        
            <Form />
         
            <Contacto/>
        </div>
    );
}
export default Company;