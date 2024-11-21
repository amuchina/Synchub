import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import logo from '../../logo.png';

function Hubsleaderboard(){
    return (
        <>
            <div className="card-body" id="hubleaderboard">
            <h5 className="card-title">Classifica Hub🔥</h5>
            <div className="listgroup" id="firstleaderboardgroup">
              <li>
                <a href="#">
                  <img src={logo} className="listgrouplogo"></img>
                  <p>[gruppo]</p>  
                </a>
              </li> 
            </div>
            <div className="listgroup" id="secondleaderboardgroup">
              <li>
                <a href="#">
                  <img src={logo}></img>
                  <p>[gruppo]</p>  
                </a>
              </li>  
            </div>
            <div className="listgroup" id="thirdleaderboardgroup">
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

export default Hubsleaderboard;