import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import Leftcard from "./Leftcard";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}
function Leftsection({user}:{user:User}){
    return (
        <>
            <div className="col-md-3" id="leftsection">
                <Leftcard user={user}/>
            </div>
        </>
    );
}

export default Leftsection;
