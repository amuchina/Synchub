import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../css/Style.css";

function NewThread(){
    return (
        <>
            <div className="card-body" id="newthread">
                <a className="btn btn-danger" id="addpost" href={route('profile.edit')}>a</a>
            </div>
        </>
    );
}

export default NewThread;
