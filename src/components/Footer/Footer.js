import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <div className="contact-ar ea">
        <div className="contact-inner area-padding">
          <div className="contact-overly"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Contact us</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Start Google Map */}
              <div className="col-md-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.8467084635466!2d38.762849016000986!3d9.045390569828577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16358a4b33a56d0d%3A0x3ff50db24ff07152!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1631593408085!5m2!1sen!2sus"
                  width="100%"
                  height="380"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  title="map"
                  tabindex="0"
                ></iframe>
              </div>
              {/* End Google Map */}
              {/* Start contact */}
              <div className="col-md-6">
                <div className="form contact-form">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* End contact */}
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Section */}
      <div className="foot row">
        <div className="col-md-4">
          <div className="contact-icon text-center">
            <div className="single-icon">
              <i className="bi bi-phone"></i>
              <p className="note">
                Call: +251 977169099
                <br />
                <span className="note">Monday-Friday (9am-5pm)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-icon text-center">
            <div className="single-icon">
              <i className="bi bi-envelope"></i>
              <p className="note">
                Email: furryfriends@example.com
                <br />
                <span className="note">Web: www.furryfriends.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-icon text-center">
            <div className="single-icon">
              <i className="bi bi-geo-alt"></i>
              <p className="note">
                Location: A108 Adam Street
                <br />
                <span className="note">AA 535022, Ethiopia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
