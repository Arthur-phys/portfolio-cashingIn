import { useEffect, useRef, useState } from "react";

import "./stepper.css";
import { Loader } from "../Loader/Loader";

interface Props {
    steps: (number | string)[]
    selectedStep: number,
    setLoaderOn: number
}

export const Stepper = (props: Props) => {

    const totalStepsLen = props.steps.length;
    const containerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [containerLen,setContainerLen] = useState(0);
    const [centeredLine,setCenteredLine] = useState(0);

    useEffect(() => {

        if (containerRef.current) {
            setContainerLen(containerRef.current.offsetWidth);
            setCenteredLine((containerRef.current.offsetHeight / 2));
        }

    },[])

    const loaderOnFunction = (index: number) => {
        if (props.setLoaderOn === index ) {
            return (<Loader size={3} color={"var(--washed-up-blue)"}/>);
        } else if(props.selectedStep > index ) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon stepper-check" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 128L192 384l-96-96"/></svg>
            )
        } else {
            return (index + 1)
        }
    }

    return (
    <>
        <div className="stepper-container" ref={containerRef}>
            {
                props.steps.map((_, index) => {
                    
                    if (index !== 0) {
                        return (
                            <div key={index} className={
                                "stepper" + (props.selectedStep < index ? " stepper-unreached" : "")
                            } style={
                                {
                                    width: `${containerLen / (totalStepsLen-1)}px`
                                }
                            }>
                                <div className="stepper-line" style={
                                    {
                                        marginTop: `${centeredLine}px` 
                                    }
                                }></div>
                                <div className="stepper-circle">
                                    {
                                        loaderOnFunction(index)
                                    }
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className={
                                "stepper" + (props.selectedStep < index ? " stepper-unreached" : "")
                            }>
                                <div className="stepper-circle">
                                    {
                                        loaderOnFunction(index)
                                    }
                                </div>
                            </div>
                        )
                    }
                    
                })
            }
        </div>
        <div className="stepper-text medium-margin--top">
            { props.steps[props.selectedStep] }
        </div>
    </>
    )
}