import React from "react";
import {useState} from "react";
import "./MyForm.scss";

export const MyForm = () => {
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [mail,setMail] = useState("");
    const [message,setMessage] = useState("");
    return (
        <div className="Form">
            <h1>Contattaci</h1>
            <input type="text" placeholder="Nome e cognome" onChange={(event)=>{setName(event.target.value)}} />
            <input type="text" placeholder="Numero di telefono" onChange={(event)=>{setNumber(event.target.value)}} />
            <input type="text" placeholder="E-Mail" onChange={(event)=>{setMail(event.target.value)}} />
            <input type="text" placeholder="Messaggio" onChange={(event)=>{setMessage(event.target.value)}} />
        </div>
    )
}