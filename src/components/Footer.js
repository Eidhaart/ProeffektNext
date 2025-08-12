"use client";

import React from "react";
import "./Footer.css";
import { IoLogoFacebook, IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="left-column">
          <div className="footer-left">
            <img
              src="./logo512.png"
              alt="Company Logo"
              className="footer-logo"
            />
            <div className="company-info">
              <h1>Proeffekt AB</h1>
              <p>Jakub Binkowski - VD</p>
              <p>
                <IoCallOutline /> +46 70 557 76 20
              </p>
              <p>
                <IoMailOutline /> proeffektab@gmail.com
              </p>
              <a href="https://facebook.com">
                <IoLogoFacebook /> Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="links-column">
            <a href="#home">Hem</a>
            {/* <a href="#calculator">Kalkylator</a> */}
            <a href="#about">Om oss</a>
            <a href="#contact">Kontakt</a>
            <a href="#privacy-policy">Dataskyddspolicy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2024 Proeffekt AB</p>
        <div className="design-credit-wrapper">
          <a
            href="https://www.eidhaart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="design-credit-link"
          >
            Designed By Eidhaart
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
