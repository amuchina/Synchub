import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";

function About(){
    return (
        <>
            <div className="card-body" id="contacts">
                <h5>Altre informazioni📋</h5>
                <p className="transparent">Contatti</p><br></br>
                <p className="contact">Giovanni </p>
                <p className="contact">Desio</p><br></br>
                <p className="contact">giovannidesio9@gmail.com</p><br></br>
                <p className="contact">+39 320 579 1676</p>
                <br></br>
                <br></br>
                <p className="transparent">Realizzato da Giovanni Desio</p>
            </div>
        </>
    );
}

export default About;
