import React from "react";
import "./Party.scss";
import { PartyBlock1, PartyBlock2 } from "./PartyBlock";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export const PartyPage = () => {
    const firstblock = {
        imgsrc: "./gallery/salafeste.jpeg",
        text:"Dotato di grande sala interna per accogliere tutti i tuoi invitati"
    }
    const secondblock = {
        imgsrc: "./gallery/granchio.jpg",
        text: "La ricerca di prodotti di prima scelta, l'alta competenza della cucina e una cultura di tradizione ed innovazione renderanno il tuo evento un esperienza culinaria di prim'ordine"
    }
    const thirdblock = {
        imgsrc: "./long-island.jpg",
        text: "Cocktail bar con ampia scelta, gelateria, dolci e torte per divertirsi e sfiziarsi dopo aver mangiato"
    }
    return (
        <div className="Party">
            <div className="Party__first">
                <h1>Un evento da sogno</h1>
                <PartyBlock1 block={firstblock} />
                <PartyBlock2 block={secondblock}/>
                <PartyBlock1 block={thirdblock} />
            </div>
            <div className="Party__second">
                <h1>Terrazza Merliani happy baby</h1>
                <h2>Festa base per bambini</h2>
                <div className="Party__second__content">
                    <div className="Party__second__content__info">
                            <h3>Accoglienza e benvenuto degli invitati </h3>
                            <h3>2 animatori per 3 ore di intrattenimento </h3>
                            <h3>Giochi a squadre e gare di abilità </h3>
                            <h3>Simpatico personaggio al pic nic e travestimento del festeggiato </h3>
                            <h3>Musiche e canzoni dei cartoni e telefilm preferiti </h3>
                            <h3>Balli di gruppo, baby dance e musica disco </h3>
                            <h3>Trucca bimbi e tatuaggi </h3>
                            <h3>Palloncini modellabili </h3>
                            <h3>Personaggio dei cartoni alla torta </h3>
                            <h3>Regalini per i piccoli invitati ed un regalo speciale per l'invitato </h3>
                            <h3>Pizzette, patatine, panini alla nutella o graffette</h3>
                            <h3>Grande buffet per i genitori</h3>
                        
                        <h2>Inoltre a scelta si potrà avere uno spettacolino tra: </h2>
                        <ul>
                            <li>Teatrino delle marionette</li>
                            <li>Bolle di sapone giganti</li>
                            <li>Micromagia</li>
                            <li>Clown</li>
                        </ul>
                        <div className="Party__second__content__info__contactus">
                            <h2>Per maggiori informazioni vienici a trovare o contattaci</h2>
                            <a href="/contatti">
                                <ButtonComponent text={"Vai"}/>
                            </a>
                        </div>
                    </div>
                    <div className="Party__second__content__rightcontent">
                        <img src="./mickey-mouse.jpg" alt="party" />
                    </div>
                </div>
            </div>
        </div>
    )
}