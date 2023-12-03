import React from "react";
import "./ButtonComponent.scss";

export const ButtonComponent =  (props:any) => {

    return (
        <div className="mybutton">
            <h4>{props.text}</h4>
        </div>
    )
}