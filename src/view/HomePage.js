import React from "react";
import Main from "../components/Main";
import JumbotronComp from "../components/JumbotronComp";
import PricingPlan from "../components/PricingPlan";
function HomePage() {
  return (
    <div>
      <Main />
      <JumbotronComp />
      <PricingPlan />
    </div>
  );
}

export default HomePage;
