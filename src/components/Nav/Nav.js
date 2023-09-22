import React, { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const navbarlinks = document.querySelectorAll("#navbar .scrollto");

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navbarlinksActive);
    window.addEventListener("scroll", navbarlinksActive);

    navbarlinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        if (document.querySelector(this.hash)) {
          e.preventDefault();
          let navbar = document.querySelector("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = document.querySelector(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          window.scrollTo({
            top: document.querySelector(this.hash).offsetTop - 100,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <h1>
            <a href="index.html">
              <span>Furry</span>Friends
            </a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#Petfinder">
                petFinder
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
