import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import logo from '../../logo.png';

function Thread(){
    return (
        <>
            <div className="post">
                <div className="card">
                    <div className="card-body">
                    <div className="postauthor">
                        <img src={logo}></img>
                        <p>Autore</p>
                        <p className="transparent">/data</p>
                        <p className="transparent">/hub</p>
                    </div>
                    <div className="posttitle">
                        <h5 className="card-title">Titolo</h5>
                        <span className="badge tags">Tag</span>
                    </div>
                    <div className="postdescription">
                        <p className="card-text">Descrizione</p>    
                    </div>
                    <div className="postaction">
                        <button id="like" type="button" className="btn btn-danger">👍🏻<p className="transparentcolor"> \ Likes</p></button>
                        <button id="dislike" type="button" className="btn btn-danger">❌<p className="transparentcolor"> \ Dislikes</p></button>
                        <button id="comments" type="button" className="btn btn-danger">📤<p className="transparentcolor"> \ Condividi</p></button>    
                    </div>
                    </div>
                </div>  
             </div>
        </>
    );
}

export default Thread;