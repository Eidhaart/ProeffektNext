"use client";

import React from "react";
import "./Home.css"; // Make sure to create a Home.css file for styling
import ContactForm from "./modals/ContactForm";

const Home = ({ onOpenContactForm }) => {
  return (
    <div id="home">
      <div className="home-container">
        {/* Add the Proeffekt text and the horizontal bar here */}

        <div className="text-container">
          <div className="proeffekt-title">Proeffekt</div>
          <div className="orange-bar"></div>
          <h1>
            <b>Din vision, vår expertis</b>
          </h1>
          <p>
            <i>
              Oöverträffad skicklighet, fantastiskt hantverk, punktlig leverans
              och öppen kommunikation
            </i>
          </p>

          <ContactForm buttonText="Kontakta oss" />
        </div>
      </div>
    </div>
  );
};

export default Home;
