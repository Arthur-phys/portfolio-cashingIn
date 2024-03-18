import { useState } from "react";
import { Button } from "../../shared/components/Button/Button";
import { CashinLogo } from "../../shared/components/CashinLogo/CashinLogo";
import { Input } from "../../shared/components/Input/Input";
import "./login.css";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface Props {
    setUser: (userName: string) => void
}

export const Login = (props: Props) => {

    const { loginWithRedirect } = useAuth0();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return (<>
        <main>
            <div className="center single-block">
                <div className="login-block main-style">
                    <div className="login-title">
                        <span className="login-title-text">
                            Sign in to
                        </span>
                        <CashinLogo background={false} size="medium"/>
                    </div>
                    <div className="grid grid--1-col">
                        <form className="login-form">

                            <Input id="login-email" type="text" label="User" placeholder="John Doe" required={true} onBlur={(e) => {
                                setUsername(e.target.value);
                            }}/>

                            <Input id="login-password" type="password" label="Password" placeholder="" required={true} onBlur={(e) => {
                                setPassword(e.target.value);
                            }}/>

                            <Button text="Sign in" onClick={(e) => {
                                e.preventDefault();
                                if (username.length !== 0 && password.length !== 0) {
                                    props.setUser(username);
                                    console.log(username);
                                    navigate("/transference");

                                }
                            }} style="dark" spacing="small-margin--top"/>

                        </form>

                        <div className="login-full-or">

                            <div className="login-full-line"></div>
                            <p className="login-or large-margin--top large-margin--bottom ">
                                Or
                            </p>
                            <div className="login-full-line"></div>

                        </div>

                        <Button text="Sign in with Auth0" onClick={() => {loginWithRedirect()}} style="dark" spacing="small-margin--bottom"/>

                    </div>
                    
                </div>
            </div>
        </main>
    </>)
}