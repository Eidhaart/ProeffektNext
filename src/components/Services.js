"use client";

import React from "react";
import "./Services.css"; // Assume you have corresponding CSS for styling

const Services = () => {
  const CardComponent = ({ img, imgAlt, header, text }) => {
    return (
      <div className="card">
        <a href="#" className="cardActionArea">
          <img src={img} alt={imgAlt} className="cardMedia" />
          <div className="cardContent">
            <h2 className="header">{header}</h2>
            <p className="text">{text}</p>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div className="services-section">
      <div className="title">
        <h2>Våra Tjänster</h2>
        <p>För dina behov</p>
      </div>

      <div id="services" className="services-list">
        <div className="service">
          <CardComponent
            img="/woodworking.jpg"
            imgAlt="Snickeri"
            header="Snickeri"
            text="Från enkla träarbeten till mer komplexa, som terrasser"
          />
        </div>
        <div className="service">
          <CardComponent
            img="/kitchen.jpg"
            imgAlt="Kök"
            header="Kök"
            text="Snickeri arbeten och bänkskivor, installation av vitvaror."
          />
        </div>
        <div className="service">
          <CardComponent
            img="/bathroom.jpg"
            imgAlt="Badrumm"
            header="Badrumm"
            text="Vägg- och takarbete, kakel och golvläggning, installation av badrumsinredning."
          />
        </div>
        <div className="service">
          <CardComponent
            img="/painting.jpg"
            imgAlt="Målning/Spackling"
            header="Målning/Spackling"
            text="På utsidan och insidan."
          />
        </div>
        <div className="service">
          <CardComponent
            img="/garden.jpg"
            imgAlt="Trädgårdsarbete"
            header="Trädgårdsarbete"
            text="Markförberedelse, Hårdlandskap."
          />
        </div>
        <div className="service">
          <CardComponent
            img="/facade.jpg"
            imgAlt="Fasad"
            header="Fasad"
            text="Renovering, utbyte av ruttna/skadade plankor."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
