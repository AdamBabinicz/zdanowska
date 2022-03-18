import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Ukraina walczy i zwycięży!
        </p>
        <p className="footer-subscription-text">
          wojsko agresora jest odpowiedzialne za zbrodnie wojenne, a także
          "świadome wywołanie katastrofy humanitarnej" w ukraińskich miastach
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Artykuły</h2>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
          </div>
          <div class="footer-link-items">
            <h2>Linki</h2>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Filmy</h2>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
            <Link to="/">x</Link>
          </div>
          <div class="footer-link-items">
            <h2>Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <HiAcademicCap /> Julia
            </Link>
          </div>
          <small class="website-rights">
            2022 - {new Date().getFullYear()}.
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="//www.facebook.com/profile.php?id=100007502733594"
              target="_blank"
              aria-label="Facebook"
            >
              <BsFacebook />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="//www.instagram.com/istories.media"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="//www.youtube.com/watch?v=fNx8QE6jQ9M"
              target="_blank"
              aria-label="Youtube"
            >
              <BsYoutube />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="//twitter.com/istories_media"
              target="_blank"
              aria-label="Twitter"
            >
              <BsTwitter />
            </Link>
            {/* <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
