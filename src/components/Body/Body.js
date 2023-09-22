import React from "react";
import "./Body.css";

import Carousel from "react-bootstrap/Carousel";
import Content from "./Content";
import img1 from "./images/7.jpg";
import img2 from "./images/10.jpg";
import img3 from "./images/11.jpg";

const Body = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item className="carousel-item">
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <div className="section-headline text-center">
                <h4
                  className="section-headline"
                  style={{
                    fontSize: "80px",
                    fontFamily: "-moz-initial",
                    color: "white",
                  }}
                >
                  Find your new best friend
                </h4>
              </div>

              <p
                style={{
                  fontSize: "30px",
                  color: "white",
                  fontFamily: "-moz-initial",
                }}
              >
                "Rescue, Love, Repeat: Unleash a Lifetime of Happiness with a
                Shelter Pet!"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h4
                style={{
                  fontSize: "80px",
                  fontFamily: "-moz-initial",
                  color: "white",
                }}
              >
                Find your new best friend
              </h4>
              <p
                style={{
                  fontSize: "30px",
                  color: "white",
                  fontFamily: "-moz-initial",
                }}
              >
                "Fur-ever Homes, Tail-wagging Smiles: Your Journey to Pet
                Parenthood Starts Here!"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h4
                style={{
                  fontSize: "80px",
                  fontFamily: "-moz-initial",
                  color: "white",
                }}
              >
                Find your new best friend
              </h4>
              <p
                style={{
                  fontSize: "30px",
                  color: "white",
                  fontFamily: "-moz-initial",
                }}
              >
                "Transform a Life, Adopt a Pet: Where Compassion Meets
                Companionship!"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Body;
