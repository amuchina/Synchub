import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import logo from '../../logo.png';

function Pinnedhubs(){
    return (
        <>
            <div className="card-body" id="pinnedgroups">
            <h5 className="card-title">Hub pinnate📌</h5>
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

export default Pinnedhubs;