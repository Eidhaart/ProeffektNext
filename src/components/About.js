"use client";

import React from "react";
import "./About.css"; // Make sure to create and link the CSS file for styling
// Placeholder image path, replace with your actual image path
import ContactForm from "./modals/ContactForm";

const About = () => {
  return (
    <div className="about-us-container" id="about">
      {/* <img src={aboutImage} alt="About Us" className="about-us-image" /> */}
      <div className="about-us-text">
        <h2>OM OSS</h2>
        <p>
          Hos Proeffekt AB är vårt tillvägagångssätt "Från golv till tak". Vi
          specialiserar oss på omfattande renoveringar och tar hand om varje
          detalj både inuti och utanför byggnader. Med många års erfarenhet
          garanterar vårt samspelta team av proffs den högsta servicenivån. Vi
          förstår hur viktig våra kunders tid är, därför erbjuder vi snabba och
          precisa kostnadsförslag anpassade till de individuella behoven hos
          varje projekt. Med Proeffekt AB förvandlas varje utrymme till en plats
          du kan vara stolt över att kalla din egen.
        </p>
      </div>
      <div>
        <div className="home-bottom-bar">
          <p>
            Letar du efter en kvalitets- och prisvärd entreprenör för ditt nästa
            projekt?
          </p>

          <ContactForm buttonText="Få en Uppskattning" />
        </div>
      </div>
    </div>
  );
};

export default About;
