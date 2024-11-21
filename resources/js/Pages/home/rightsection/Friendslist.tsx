import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import logo from '../../logo.png';

function Friendslist(){
    return (
        <>
            <div className="card-body">
                <h5 className="card-title">Amici👤</h5>
                <div className="listfriend">
                <li>
                    <a href="#">
                    <img src={logo} className="listfriendlogo"></img>
                    <p id="friendname">@user</p>  
                    </a>
                </li>  
                </div>
                <div className="listfriend">
                <li>
                    <a href="#">
                    <img src={logo} className="listfriendlogo"></img>
                    <p id="friendname">@user</p>  
                    </a>
                </li>  
                </div>
                <div className="listfriend">
                <li>
                    <a href="#">
                    <img src={logo} className="listfriendlogo"></img>
                    <p id="friendname">@user</p>  
                    </a>
                </li>  
                </div>
            </div>
        </>
    );
}

export default Friendslist;