import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import Rightcard from "./Rightcard";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}
function Rightsection({user}:{user:User}){
    return (
        <>
            <div className="col-md-3" id="rightsection">
                <Rightcard user={user}/>
            </div>
        </>
    );
}

export default Rightsection;
