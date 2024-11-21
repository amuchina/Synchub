import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import Thread from "./Thread";
import NsfwThread from "./NsfwThread";

function Centersection(){
    return (
        <>
            <div className="col-md-6 vertical-line" id="centersection">
                <Thread />
                <NsfwThread />
            </div>    
        </>
    );
}

export default Centersection;

