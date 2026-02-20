import React from "react";
import { Routes, Route } from "react-router-dom";

// Base Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Modules from "../pages/Modules";
import Industries from "../pages/Industries";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";

// Industry Pages
import FashionRetail from "../pages/FashionRetail";
import FMCGServices from "../pages/FMCGServices";
import Automotive from "../pages/Automotive";
import Ecommerce from "../pages/Ecommerce";
import FoodBeverage from "../pages/FoodBeverage";
import Pharmaceutical from "../pages/Pharmaceutical";
import Manufacturing from "../pages/Manufacturing";

// SAP Module Pages
import SAPTM from "../pages/SAPTM";
import SAPEWM from "../pages/SAPEWM";
import SAPCPI from "../pages/SAPCPI";
import SAPMFS from "../pages/SAPMFS";
import SAPBTP from "../pages/SAPBTP";
import SAPYL from "../pages/SAPYL";

// SAP Service Pages
import SAPSupport from "../pages/SAPSupport";
import SAPMigration from "../pages/SAPMigration";
import SAPApplicationManagementServices from "../pages/SAPApllicationManagementServices"; 
import SAPImplementation from "../pages/SAPImplementation";
import SAPRollouts from "../pages/SAPRollouts";
import SAPSecurityServices from "../pages/SAPSecurityServices";
import SAPIntegration from "../pages/SAPIntegration";
import SAPMigrationToCloud from "../pages/SAPMigrationToCloud";
import RiseWithSAP from "../pages/RiseWithSAP";
import GrowWithSAP from "../pages/GrowWithSAP";
import SAPOnPremise from "../pages/SAPOnPremise";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/industries/:slug" element={<Industries />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />

      {/* INDUSTRY PAGES */}
      <Route path="industries/fashion-retail" element={<FashionRetail />} />
      <Route path="industries/fmcg" element={<FMCGServices />} />
      <Route path="industries/automotive" element={<Automotive />} />
      <Route path="industries/e-commerce" element={<Ecommerce />} />
      <Route path="industries/food-beverage" element={<FoodBeverage />} />
      <Route path="industries/pharmaceutical" element={<Pharmaceutical />} />
      <Route path="industries/manufacturing" element={<Manufacturing />} />

      {/* SAP MODULE PAGES */}
      <Route path="/modules/sap-tm" element={<SAPTM />} />
      <Route path="/modules/sap-ewm" element={<SAPEWM />} />
      <Route path="/modules/sap-cpi" element={<SAPCPI />} />
      <Route path="/modules/sap-mfs" element={<SAPMFS />} />
      <Route path="/modules/sap-btp" element={<SAPBTP />} />
      <Route path="/modules/sap-yl" element={<SAPYL />} />

      {/* SAP SERVICES PAGES */}
      <Route path="/services/sap-implementation" element={<SAPImplementation />} />
      <Route path="/services/sap-rollouts" element={<SAPRollouts />} />
      <Route path="/services/sap-support" element={<SAPSupport />} />
      <Route path="/services/sap-migration" element={<SAPMigration />} />
      <Route path="/services/sap-application-management-services" element={<SAPApplicationManagementServices />} />
      <Route path="/services/sap-security-services" element={<SAPSecurityServices />} />
      <Route path="/services/sap-integration" element={<SAPIntegration />} />
      <Route path="/services/sap-migration-to-cloud" element={<SAPMigrationToCloud />} />
      <Route path="/services/rise-with-sap" element={<RiseWithSAP />} />
      <Route path="/services/grow-with-sap" element={<GrowWithSAP />} />
      <Route path="/services/sap-on-premise" element={<SAPOnPremise />} />
  
    </Routes>
  );
}

export default Routers;