// src/pages/Modules.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Import all SAP module pages
import SAPEWM from "./SAPEWM";
import SAPTM from "./SAPTM";
import SAPCPI from "./SAPCPI";
import SAPMFS from "./SAPMFS";
import SAPBTP from "./SAPBTP";
import SAPYL from "./SAPYL";

function Modules() {
  const { slug } = useParams(); // get the slug from URL

  // Map URL slug to the correct component
  const moduleMap = {
    "sap-ewm": <SAPEWM />,
    "sap-tm": <SAPTM />,
    "sap-cpi": <SAPCPI />,
    "sap-mfs": <SAPMFS />,
    "sap-btp": <SAPBTP />,
    "sap-yl": <SAPYL />,
  };

  // Show correct module or fallback if slug is invalid
  const ModuleComponent = moduleMap[slug] || (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold">Module Not Found</h2>
      <p className="mt-4 text-lg">Please select a valid SAP module.</p>
    </div>
  );

  return <div>{ModuleComponent}</div>;
}

export default Modules;
