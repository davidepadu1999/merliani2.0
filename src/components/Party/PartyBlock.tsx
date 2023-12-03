import React from "react";

export const PartyBlock1 = (props:any) => {

    return (
        <div className="PartyBlock1"> 
            <div className="PartBlock1__imgdiv"><img className="PartyBlock1__imgdiv__img" src={props.block.imgsrc} alt="img" /></div>
            <div className="PartyBlock1__description">
                <div className="PartyBlock__description__textcontainer">
                    <p className="PartyBlock1__description__textcontainer__text">{props.block.text}</p>
                </div>
            </div>
        </div>
    )
}
export const PartyBlock2 = (props:any) => {

    return (
        <div className="PartyBlock2">
            <div className="PartyBlock2__description">
                <div className="PartyBlock__description__textcontainer">
                    <p className="PartyBlock2__description__textcontainer__text">{props.block.text}</p>
                </div>
            </div>
            <div className="PartBlock2__imgdiv"><img className="PartyBlock2__imgdiv__img" src={props.block.imgsrc} alt="img" /></div>
        </div>
    )
}