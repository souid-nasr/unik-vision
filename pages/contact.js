import React from "react";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

function page() {
  return (
    <div>
      {" "}
      <PageHeader
        title={"Contact"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
      <Contact />
    </div>
  );
}

export default page;
