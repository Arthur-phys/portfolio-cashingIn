import { useState } from 'react';
import { CashinLogo } from '../../shared/components/CashinLogo/CashinLogo';
import { Stepper } from '../../shared/components/Stepper/Stepper';

import './transference.css';
import { Card } from '../../shared/components/Card/Card';
import { InputCode } from '../../shared/components/InputCode/InputCode';

interface Props {
    username: string
}

export const Transference = (props: Props) => {

    const [selectedStep,setSelectedStep] = useState(0);
    const [loaderStep,setLoaderStep] = useState(-1);

    return (<>
        <div className="center single-block column-flex">
            <div className='large-margin--bottom'>
                <CashinLogo background={true} size='mega'>
                </CashinLogo>
            </div>

            <div className="transference-block main-style">
                <div className="transference-step-by-step">
                    <Stepper steps={
                        ["Please, choose how to cash in your prize:",
                        "Please, introduce your code",
                        "Please, confirm the transference"]
                    }
                    selectedStep={selectedStep}
                    setLoaderOn={loaderStep}
                    />
                </div>
                <main className="transference-menus">

                    {
                        selectedStep === 0 &&
                        <ul className="transference-options medium-margin--top">
                            <li>
                                <Card onClick={() => {
                                    setSelectedStep(1);
                                }} text="Debit card" icon="/public/card.svg"></Card>
                            </li>
                            <li>
                                <Card onClick={() => {
                                    setSelectedStep(1);
                                }} text="Cash" icon='/public/money.svg'></Card>
                            </li>
                            <li>
                                <Card onClick={() => {
                                    setSelectedStep(1);
                                }} text="As products" icon='/public/gift.svg'></Card>
                            </li>
                        </ul>

                    }
                    {
                        selectedStep === 1 &&
                        <InputCode/>
                    }
                    
                    
                </main>
            </div>
        </div>
    </>)
}