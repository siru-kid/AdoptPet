import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/12.jpg";
import img3 from "../images/img3.jpg";

const UserReview = () => {
  return (
    <section>
      <div className="row text-center pt-5">
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={img1}
              className="rounded-circle shadow-1-strong"
              width={70}
              height={70}
              alt="User Avatar"
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i> I adopted a sweet little
            kitten from this pet store, and she has brought so much joy into my
            life. The staff was incredibly helpful in guiding me through the
            adoption process, and I couldn't be happier with my new furry
            friend!
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star-half-alt fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={img2}
              className="rounded-circle shadow-1-strong"
              width={70}
              height={70}
              alt="User Avatar"
            />
          </div>
          <h5 className="mb-3">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>I recently adopted a
            rescue dog from this pet store, and it was one of the best decisions
            I've ever made. The store's commitment to animal welfare is
            commendable, and my new dog has quickly become a cherished member of
            my family.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src={img3}
              className="rounded-circle shadow-1-strong"
              width={70}
              height={70}
              alt="User Avatar"
            />
          </div>
          <h5 className="mb-3">Sirak Kidane</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2"></i>I've adopted two cats from
            this pet store, and both experiences were fantastic. The cats were
            well-cared for, and the store provided all the information and
            supplies I needed for a smooth transition. I highly recommend this
            place to anyone looking to adopt a pet.
          </p>
          <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i className="far fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserReview;
