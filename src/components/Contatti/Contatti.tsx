import React from "react";
import "./Contatti.scss";
import { MyForm } from "../MyForm/MyForm";

export const Contatti = () => {
  return (
    <div className="Contatti">
      <div className="Contatti__block">
        {/* <div className="Contatti__block__img" /> */}
        {/* <div className="Contatti__block__myform">
          <MyForm />
        </div> */}
        <div className="Contatti__block__info">
          <h1>Contatti</h1>
          <div className="Contatti__block__info__sezione">
            <h2>Orari di apertura</h2>
            <h3>Lun-Gio: 07.00 - 01.00</h3>
            <h3>Ven-Dom: 07.00 - 02.00</h3>
          </div>
          <div className="Contatti__block__info__sezione">
            <h2>Indirizzo</h2>
            <h3>Via Giovanni Merliani 73</h3>
          </div>
          <div className="Contatti__block__info__sezione">
            <h2>Telefono</h2>
            <h3>081 1877 1408</h3>
            <h2>Cell / Whatsapp</h2>
            <h3>+39 375 784 5099</h3>
            <h2>E-Mail</h2>
            <h3>info@terrazzamerlianibistrot.it</h3>
          </div>
          <a
            href="https://www.instagram.com/terrazzamerliani2.0/"
            target="blank"
          >
            <div className="Contatti__block__info__insta" />
          </a>
        </div>
      </div>
    </div>
  );
};
