import React from "react";
import { useParams } from "react-router-dom";

import FashionRetail from "./FashionRetail";
import FMCGServices from "./FMCGServices";
import Automotive from "./Automotive";
import Ecommerce from "./Ecommerce";
import FoodBeverage from "./FoodBeverage";
import Pharmaceutical from "./Pharmaceutical";
import Manufacturing from "./Manufacturing";

function Industries() {
  const { slug } = useParams(); // get the URL parameter

  // Map slugs to components
  const industryMap = {
    "fashion-retail": <FashionRetail />,
    fmcg: <FMCGServices />,
    automotive: <Automotive />,
    "e-commerce": <Ecommerce />,
    "food-beverage": <FoodBeverage />,
    pharmaceutical: <Pharmaceutical />,
    manufacturing: <Manufacturing />,
  };

  // Show component based on slug, or fallback if invalid slug
  const IndustryComponent = industryMap[slug] || (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold">Industry Not Found</h2>
      <p className="mt-4 text-lg">Please select a valid industry.</p>
    </div>
  );

  return <div>{IndustryComponent}</div>;
}

export default Industries;
