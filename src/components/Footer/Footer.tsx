import React from "react";
import "./Footer.scss";


export const Footer = () => {

    return (
        <div className="Footer">
            <div className="Footer__block">
                <h2>Sede</h2>
                    <h5>Via Giovanni Merliani 73</h5>
                    <h5>Napoli 80127</h5>
            </div>
            <div className="Footer__block">
                <h2 className="Footer__block__title">Recapiti</h2>
                <h3 className="Footer__block__element">Telefono</h3>
                <h5 className="Footer__block__element">081 1877 1408</h5>
                <h3 className="Footer__block__element">Cell/Whatsapp</h3>
                <h5 className="Footer__block__element">+39 375 784 5099</h5>
                <h3 className="Footer__block__element">E-Mail</h3>
                <h5 className="Footer__block__element">info@terrazzamerlianibistrot.it</h5>
                <a href="https://www.instagram.com/terrazzamerliani2.0/" target="blank">
                    <img className="Footer__block__social" src="/instagram-logo.png" />
                </a>
            </div>
            <div className="Footer__block">
                <h2>Orari di apertura</h2>
                <h5>Lun-Gio: 07.00 - 01.00 </h5>
                <h5>Ven-Dom: 07.00 - 02.00 </h5>
            </div>
        </div>
    )
}