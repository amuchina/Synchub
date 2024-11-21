import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import logo from '../../logo.png';

function Recenthubs(){
    return (
        <>
            <div className="card-body" id="mostrecents">
                <h5 className="card-title">Hub recenti🕗</h5>
                <div className="listgroup">
                <li>
                    <a href="#">
                    <img src={logo} className="listgrouplogo"></img>
                    <p>[gruppo]</p>  
                    </a>
                </li>  
                </div>
                <div className="listgroup">
                <li>
                    <a href="#">
                    <img src={logo} className="listgrouplogo"></img>
                    <p>[gruppo]</p>  
                    </a>
                </li>  
                </div>
                
            </div>
        </>
    );
}

export default Recenthubs;