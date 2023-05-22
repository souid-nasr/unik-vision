import React from "react";

const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
];
function Services() {
  return (
    <div>
      {" "}
      <section id="services" className="services">
        <div className="container">
          <div className="row gy-4">
            {data.map((el) => {
              return (
                <div className="col-xl-3 col-md-6 d-flex" key={el._id}>
                  <div className="service-item position-relative">
                    <i className="bi bi-activity"></i>
                    <h4>
                      <a href="" className="stretched-link">
                        {el.title}{" "}
                      </a>
                    </h4>
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
