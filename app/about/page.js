import React from "react";
import PageHeader from "../components/PageHeader";
import About from "../components/About";

function page() {
  return (
    <div>
      <PageHeader
        title={"About"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <About/>
    </div>
  );
}

export default page;
