import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";
import Categories from "./Categories";
import HorizontalLine from "../../HorizontalLine";
import Recenthubs from "./Recenthubs";
import Pinnedhubs from "./Pinnedhubs";
import Hubsleaderboard from "./Hubsleaderboard";

function Leftcard({user}:{user?:any}){
    return (
        <>
            <div className="card">
                <Categories />
                <HorizontalLine />
                { user ?
                    <>
                        <Recenthubs />
                        <HorizontalLine />
                        <Pinnedhubs />
                        <HorizontalLine />
                    </>
                :
                    null
                }


                <Hubsleaderboard />
            </div>
        </>
    );
}

export default Leftcard;
