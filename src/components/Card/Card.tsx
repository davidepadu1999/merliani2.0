import React from "react";
import "./Card.scss";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export type CardProps = {
  card: {
    title: string;
    text: string;
    destination: string;
    target?: string;
    buttontxt: string;
    layout?: boolean;
  };
};
export const Card = (props: CardProps) => {
  return (
    <div className="Card">
      <h2>{props.card.title}</h2>
      <p>{props.card.text}</p>
        <a href={props.card?.destination} target={props.card?.target}>
          <ButtonComponent text={props.card?.buttontxt} />
        </a>
      
    </div>
  );
};
