import React from "react";
import "./HomePage.scss";
import { CardsComponent } from "../Card/Cards";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import {MyForm} from "../MyForm/MyForm";

export const HomePage = () => {
    return (
        <div className="Home">
            <div className="Home__firstsection">
                <div className="Home__firstsection__mainimg" />
                <div className="Home__firstsection__uppercontent">
                    <div className="Home__firstsection__uppercontent__logo">
                        <img src="./full-logo.jpg" alt="logo"/>
                    </div>
                </div>
            </div>
            <div className="Home__secondsection">
                <div className="Home__secondsection__placeholder">
                    <CardsComponent/>
                </div>
                <div className="Home__secondsection__party">
                    <div className="Home__secondsection__party__block">
                        <h1>Vuoi organizzare un evento?</h1>
                        <p>Con a disposizione un ampia ed elegante sala interna, Terrazza Merliani 2.0 è il luogo perfetto per festeggiare la vostra occasione </p>
                            <a href="/party">
                                <ButtonComponent text={"Vedi di più"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Home__thirdsection">
                    <img src="/maschera.jpg" />
                    <div className="Home__thirdsection__content">
                        <h1>"A volte penso addirittura che Napoli possa essere ancora l'ultima speranza che resta alla razza umana."</h1>
                        <h2>{"(Luciano De Crescenzo)"}</h2>
                    </div>
                </div>
        </div>
    )
}