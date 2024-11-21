import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";

function Feedback(){
    return (
        <>
            <div className="card-body">
                <h5 className="card-title">Feedback📢</h5>
                <p className="card-text">Il tuo feedback e' importante per noi, scrivici o chiedici qualsiasi cosa!</p>
                <button type="button" className="btn btn-danger" id="askbutton">Scrivi</button>
            </div>
        </>
    );
}

export default Feedback;