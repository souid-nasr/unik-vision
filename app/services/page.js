import React from "react";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import Pricing from "../components/Pricing";

function page() {
  return (
    <div>
      <PageHeader
        title={"Services"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Services />
      <Pricing/>
    </div>
  );
}

export default page;
