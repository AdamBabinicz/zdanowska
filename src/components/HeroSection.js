import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/4.mp4" autoPlay loop muted />
      <h1>Julia Zdanowska</h1>
      <p>Zabita przez siepaczy Putina!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Czytaj
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Więcej <AiOutlineArrowRight className="arrow" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
