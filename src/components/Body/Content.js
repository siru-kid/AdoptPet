import React from "react";
import { animals } from "../data";

const Content = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const itemStyle = {
    flex: "0 0 calc(50% - 10px)",
    height: "400px",
    marginBottom: "20px",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "10%",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#ddd",
    padding: "15px",
    width: "100%",
    borderRadius: "10%",
  };

  return (
    <section id="Petfinder">
      {" "}
      <div className="content">
        <div
          className="section-headline text-center"
          style={{ paddingTop: 30 }}
        >
          <h2>choose your next friend</h2>
        </div>
      </div>
      <div className="container">
        <div className="row" style={containerStyle}>
          {animals.map((animal, index) => (
            <div
              key={index}
              className="col-md-6 col-sm-6 col-xs-12 portfolio-item filter-card"
              style={itemStyle}
            >
              <div
                className="single-awesome-project"
                style={{ height: "100%" }}
              >
                <div className="awesome-img">
                  <a href="#">
                    <img
                      src={animal.image}
                      alt={`image-${index}`}
                      style={imageStyle}
                    />
                  </a>
                  <div className="add-actions" style={contentStyle}>
                    <div className="project-dec">
                      <a
                        className="portfolio-lightbox"
                        data-gallery="myGallery"
                        href={animal.image}
                      >
                        <h4>{animal.name}</h4>
                        <span>{animal.description}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
