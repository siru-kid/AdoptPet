import React from "react";
import UserReview from "./reviews/UserReview";

function Services() {
  return (
    <section id="services">
      <div className="services-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline services-head text-center">
                <h2>Planning to Adopt a Pet?</h2>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="bi bi-briefcase"></i>
                    </a>
                    <h4>Pet Adoption:</h4>
                    <p>
                      Facilitating the adoption process by connecting potential
                      pet owners with available animals seeking homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="bi bi-card-checklist"></i>
                    </a>
                    <h4>Pet Fostering</h4>
                    <p>
                      Offering temporary homes for pets in need until they can
                      find their forever families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="bi bi-bar-chart"></i>
                    </a>
                    <h4>Pet Health Care</h4>
                    <p>
                      Ensuring that adopted pets are spayed/neutered, up-to-date
                      on vaccinations, and receive necessary medical attention
                      before adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="bi bi-binoculars"></i>
                    </a>
                    <h4>Lost and Found Pet Services</h4>
                    <p>
                      Assisting with the recovery and reunification of lost pets
                      with their owners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="bi bi-brightness-high"></i>
                    </a>
                    <h4>Community Education</h4>
                    <p>
                      Educating the public on responsible pet ownership, animal
                      welfare, and the importance of adoption
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="about-move">
                <div className="services-details">
                  <div className="single-services">
                    <a className="services-icon" href="#">
                      <i className="bi bi-calendar4-week"></i>
                    </a>
                    <h4>Fundraising and Donations</h4>
                    <p>
                      Raising funds to cover the costs of pet care, medical
                      treatment, and facility maintenance through donations,
                      events, and sponsorships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="section-headline services-head text-center ">
          <h2>Customer Reviews</h2>
        </div>
        <UserReview />
      </div>
    </section>
  );
}

export default Services;
