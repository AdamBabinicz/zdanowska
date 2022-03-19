import React from "react";
import "./Footer.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { ImNewspaper, ImFilm } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Ukraina walczy i&nbsp;zwycięży!
        </p>
        <p className="footer-subscription-text">
          wojsko agresora jest odpowiedzialne za zbrodnie wojenne, a&nbsp;także
          "świadome wywołanie katastrofy humanitarnej" w&nbsp;ukraińskich
          miastach!
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Artykuły</h2>
            <Link
              to="//wydarzenia.interia.pl/raporty/raport-ukraina-rosja/aktualnosci/news-wojna-w-ukrainie-to-dopiero-poczatek-te-kraje-boja-sie-ze-sa,nId,5898933"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImNewspaper />
            </Link>
            <Link
              to="//www.rp.pl/spoleczenstwo/art35889931-wojna-na-ukrainie-rosjanie-zaczynaja-miec-watpliwosci-odpowiedzi-szukaja-w-internecie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImNewspaper />
            </Link>
            <Link
              to="//www.polskieradio.pl/wojna-na-Ukrainie/Tag179372"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImNewspaper />
            </Link>
            <Link
              to="//pl.wikipedia.org/wiki/Wojna_w_Donbasie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImNewspaper />
            </Link>
            <Link
              to="//300gospodarka.pl/news/wojna-w-ukrainie-najnowsze-informacje-na-zywo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImNewspaper />
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Linki</h2>
            <Link
              to="//www.tvp.info/59134070/kiedy-skonczy-sie-wojna-na-ukrainie-doradca-zelenskiego-zostalo-im-moze-14-dni-wojsko-rosyjskie-traci-potencjal-ofensywny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkAlt />
            </Link>
            <Link
              to="//bezprawnik.pl/tag/wojna-na-ukrainie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkAlt />
            </Link>
            <Link
              to="//forsal.pl/raporty/konflikt-rosja-ukraina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkAlt />
            </Link>
            <Link
              to="//wiadomosci.radiozet.pl/tags/kategoria/wojna-na-ukrainie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkAlt />
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Filmy</h2>
            <Link
              to="//www.youtube.com/watch?v=9K7rnoU0kfQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFilm />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=CUSRg7NX0w8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFilm />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=tq81VTcl-hs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFilm />
            </Link>
            <Link
              to="//www.youtube.com/watch?v=aKMReaO-HRc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFilm />
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Media</h2>
            <Link
              to="//www.instagram.com/istories.media"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              to="//www.facebook.com/profile.php?id=100007502733594"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <Link
              to="//www.youtube.com/watch?v=fNx8QE6jQ9M"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </Link>
            <Link
              to="//twitter.com/istories_media"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div className="social-media-wrap">
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
              className="social-icon-link facebook"
              to="//www.facebook.com/profile.php?id=100007502733594"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="//www.instagram.com/istories.media"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="//www.youtube.com/watch?v=fNx8QE6jQ9M"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="//twitter.com/istories_media"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
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
