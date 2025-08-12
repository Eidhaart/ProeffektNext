"use client";

import React from "react";
import "./Home.css";
import ContactForm from "./modals/ContactForm";

const Home = ({ onOpenContactForm }) => {
  return (
    <div id="home">
      <div className="home-container">
        {/* Background video */}
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/renovation.jpg"
        >
          <source src="/background.mp4" type="video/mp4" />
          {/* Fallback text if video can't play */}
          Din webbläsare kan inte spela upp videon.
        </video>

        {/* Foreground content */}
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
