import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h2>Niezwykle uzdolniona matematyczka z&nbsp;Ukrainy</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/1.png"
              text="W Charkowie, w wyniku uderzenia pocisku rakietowego zginęła 21-letnia studentka ostatniego roku matematyki komputerowej Kijowskiego Uniwersytetu Narodowego im. Tarasa Szewczenki Julia Zdanowska."
              label="miała zaledwie 21 lat"
              path="/śmierć"
            />
            <CardItem
              src="/images/5.jpg"
              text="Julia była członkiem zwycięskiej ukraińskiej ekipy na Europejskiej Olimpiadzie Matematycznej Dziewcząt (EGMO) w Zürichu w 2017 roku. W rodzinnym Charkowie uczyła matematyki i informatyki jako wolontariuszka, również przygotowując młodzież do udziału w olimpiadach informatycznej i matematycznej."
              label="była nadzieją dla swoich bliskich, Ukrainy i ludzkości"
              path="/śmierć"
            />
            <CardItem
              src="/images/16.jpg"
              text="Na łamach internetowego rosyjskiego czasopisma popularnonaukowego: trv-science.ru zamieszczono list 351 matematyków protestujący przeciwko agresji ich kraju na Ukrainę. Jednak list został usunięty, gdyż pozostawienie go mogło narazić redaktorów, zgodnie z nowo wprowadzonym rosyjskim prawem, na wieloletnie więzienie."
              label="list otwarty 351 rosyjskich matematyków przeciwko wojnie w Ukrainie"
              path="/śmierć"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/14.jpg"
              text="„My, naukowcy-matematycy pracujący w Federacji Rosyjskiej, stanowczo protestujemy przeciwko inwazji militarnej na terytorium Ukrainy rozpoczętej przez armię rosyjską 24 lutego 2022 roku. [...].”"
              label="zapewne władcy Rosji nie czytali Michaiła Bułhakowa i nie wiedzą, że 'rękopisy nie płoną', a w sieci nic nie ginie."
              path="/zbrodnie"
            />
            <CardItem
              src="images/6.jpg"
              text="Jak piszą jej koledzy: „Miała kręcone rude włosy, niebieskie oczy, słodki uśmiech, zawsze nosiła tylko jasne ubrania, a wszystkie wzory matematyczne trzymała pod żółtym kapeluszem”."
              label="mogła posunąć naukę i cywilizację do przodu"
              path="/śmierć"
            />
            <CardItem
              src="images/1.webp"
              text="Ostatnia wiadomość jaką od niej otrzymali w Telegramie brzmiała: „Dziękuję, ale zostanę w Charkowie aż do zwycięstwa”."
              label="była darem od Boga dla nas ludzi"
              path="/pamięć"
            />
            <CardItem
              src="images/7.jpg"
              text="- [...] Armagedon, który zorganizowały rosyjskie wojska faszystowskie. Oni cynicznie strzelają w osiedla pociskami Grad. Co 30 minut lotnictwo nadlatuje nad osiedla, zabijając cywilów - osoby starsze, kobiety, dzieci - mówi Bojczenko."
              label="zamordował ją zbój i złoczyńca, który nadal chodzi po naszej świętej Ziemi"
              path="/zbrodnie"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
