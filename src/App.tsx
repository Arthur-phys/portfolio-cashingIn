import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import { useState } from "react";
import { Transference } from "./pages/Transference/Transference";



export const App = () => {

    const [username, setUsername] = useState("");

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setUser={(userName: string) => {
                setUsername(userName);
            }}/>}>
            </Route>
            <Route path="/transference" element={<Transference username={username}/>}>

            </Route>
        </Routes>
    </BrowserRouter>)
}