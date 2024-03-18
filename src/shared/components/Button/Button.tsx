import { MouseEventHandler } from "react";
import "./button.css";

interface Props {
    text: string,
    onClick: MouseEventHandler,
    style: "dark" | "light",
    spacing?: string

}

export const Button = (props: Props) => {

    return(
    <>
        <button
            onClick={props.onClick}
            className={(props.style === "dark" ? "button-dark" : "") + (props.style === "light" ? " button-light" : "") + (props.spacing ? " " + props.spacing : "")}
        >
            {props.text}
        </button>
    </>
    );

}