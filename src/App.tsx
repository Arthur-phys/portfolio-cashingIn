import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";
import { useState } from "react";
import { Transference } from "./pages/Transference/Transference";
import { Footer } from "./shared/components/Footer/Footer";
import { Header } from "./shared/components/Header/Header";



export const App = () => {

    const [username, setUsername] = useState("");

    return (
    <>  
        <Header sections={["PRIZES","WAYS TO CASH IN"]}/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setUser={(userName: string) => {
                    setUsername(userName);
                }}/>}>
                </Route>
                <Route path="/transference" element={<Transference username={username}/>}>

                </Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </>
    
    )
}