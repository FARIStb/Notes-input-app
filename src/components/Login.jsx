import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LogInOut(){
    const [Login,setLogin]=useState(false)

function handleLogin(){
        setLogin(!Login)

    }
    return(
        <div>
            <h1>{Login ? "Welcome, User!" : "Please Log In"}</h1>
            <button onClick={handleLogin}>{Login ? "Logout" : "Login"}</button>
        </div>
    )
}

export default LogInOut;  //export the component so it can be used in other files