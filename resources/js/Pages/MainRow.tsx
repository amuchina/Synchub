import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/Style.css";
import Leftsection from "./home/leftsection/Leftsection";
import Centersection from "./home/centersection/Centersection";
import Rightsection from "./home/rightsection/Rightsection";

function MainRow({user}:{user:any}){
    return (
        <>
            <div className="row" id="homebody">
                <Leftsection user={user}/>
                <Centersection />
                <Rightsection user={user}/>
            </div>
        </>
    );
}

export default MainRow;
