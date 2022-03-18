import React, { useState } from "react";
import "../App.css";
import "./HeroSection.css";
import { Button } from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";

function HeroSection() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

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
          onClick={() => Toggle()}
        >
          Czytaj
        </Button>
        <Modal
          show={modal}
          close={Toggle}
          title="Ksiądz o sytuacji w Charkowie: Dramat ludobójstwa, śmierć"
        >
          <p>
            - Do końca życia będę pamiętał każdy dzień wojny na Ukrainie - jak
            on wyglądał, co się działo, jakie były emocje i strach. Z drugiej
            strony wydaje się, że duch męstwa we wszystkich jest tą największą
            siłą - skrzydłami - która pozwala nam dalej funkcjonować - dodał ks.
            Stasiewicz.
          </p>
          <br />
          <p>
            <em>
              wydarzenia.interia.pl/raporty/raport-ukraina-rosja/aktualnosci/news-ksiadz-o-sytuacji-w-charkowie-dramat-ludobojstwa-smierc,nId,5891972
            </em>
          </p>
        </Modal>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => Toggle1()}
        >
          Więcej
          <AiOutlineArrowRight className="arrow" />
        </Button>
        <Modal1
          show={modal1}
          close={Toggle1}
          title="Zostały tylko zgliszcza i dym. Porażający obraz zniszczeń w Charkowie"
        >
          <p>
            Charków położony jest w północno-wschodniej części Ukrainy, w
            obwodzie charkowskim, w pobliżu granicy z Rosją. Jest drugim po
            Kijowie największym miastem w Ukrainie. W 2021 r. liczba ludności
            tego miasta wynosiła 1,43 mln. Stanowi jeden z największych
            ukraińskich ośrodków przemysłowych i kulturalno-naukowych.
          </p>
          <br />
          <p>
            <em>
              podroze.onet.pl/aktualnosci/wojna-rosja-ukraina-wstrzasajace-zdjecia-z-ostrzelanego-charkowa/h9zymjw
            </em>
          </p>
        </Modal1>
      </div>
    </div>
  );
}

export default HeroSection;
