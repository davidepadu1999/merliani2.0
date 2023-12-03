import { Card } from "./Card";
import "./Card.scss"

export const CardsComponent = () => {
    const card1 = {
        title: "Luogo d'incontro",
        text: "Situato nel cuore del Vomero a pochi passi da Piazza Vanvitelli e dalle metropolitane e funicolari che collegano la zona con tutta Napoli",
        buttontxt: "Maps",
        destination:"https://www.google.com/maps/dir//Via+Giovanni+Merliani,+73,+Napoli,+NA/@40.8450001,14.228033,18.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133b08fab91a5b3b:0xba7b0bc50644bdc2!2m2!1d14.2289104!2d40.8446162?hl=it&entry=ttu",
        target: "blank",
    }

    const card2 = {
        title: "Per ogni tua esigenza",
        text: "Dal tuo risveglio a colazione, a pranzo, a cena, e per aperitivo. Caffetteria, lounge bar e trattoria",
        buttontxt:"Vedi di più",
        destination: "/gallery",
    }

    const card3 = {
        title: "Organizza la tua festa",
        text: "Luogo perfetto per festeggiare le tue occasioni, dal compleanno, all'anniversario alla festa di laurea",
        buttontxt:"Vedi di più",
        destination: "/party",
        layout: true
    }

    return (
        <div className="Section">
            <Card card={card1} />
            <Card card={card2} />
            <Card card={card3}  />
        </div>
    )
}