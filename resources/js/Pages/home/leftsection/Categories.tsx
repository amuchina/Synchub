import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";

function Categories(){
    return (
        <>
            <div className="card-body" id="categories">
                <h5 className="card-title">Categorie🌐</h5>
                <p>Esplora i tags in base ai tuoi interessi</p>
                <li> 💻 <p className="transparent">\ Tech</p></li>
                <li> ❓ <p className="transparent">\ Help</p></li>
                <li> ✈️ <p className="transparent">\ Viaggi</p></li>
                <li> ⚾️ <p className="transparent">\ Sport</p></li>
                <li> 🗣 <p className="transparent">\ Sfogo</p></li>
                <li> 🧠 <p className="transparent">\ Riflessioni</p></li>
                <li> 🎮 <p className="transparent">\ Videogiochi</p></li>
                <li> 🥗 <p className="transparent">\ Cucina</p></li>
                <li> 💳 <p className="transparent">\ Finanza</p></li>
                <li><a href="#">Visualizza tutte</a></li>
            </div>
        </>
        
    );
}

export default Categories;