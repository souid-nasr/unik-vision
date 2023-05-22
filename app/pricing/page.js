import React from "react";
import PageHeader from "../components/PageHeader";
import Pricing from "../components/Pricing";

function page() {
  return (
    <div>
      <PageHeader
        title={"Pricing"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Pricing/>
    </div>
  );
}

export default page;
