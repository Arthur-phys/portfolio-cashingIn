import { useState } from 'react';
import { CashinLogo } from '../../shared/components/CashinLogo/CashinLogo';
import { Stepper } from '../../shared/components/Stepper/Stepper';

import './transference.css';

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
                        ["Please, choose an account to transfer to",
                        "Please, select the amount to transfer",
                        "Please, confirm the transference"]
                    }
                    selectedStep={selectedStep}
                    setLoaderOn={loaderStep}
                    />
                </div>
                <main className="transference-menus">
                    {props.username}
                    <div>
                        <button onClick={() => {
                            setSelectedStep(0);
                        }}>
                            Haz click aquí para ir a 1
                        </button>
                        <button onClick={() => {
                            setLoaderStep(0)
                        }}>
                            Haz click aquí para mostrar el loader en 1
                        </button>
                        <button onClick={() => {
                            setLoaderStep(-1)
                        }}>
                            Haz click aquí para quitar el loader en 1
                        </button>
                    </div>
                    <div>

                        <button onClick={() => {
                            setSelectedStep(1);
                        }}>
                            Haz click aquí para ir a 2
                        </button>
                    </div>
                    <div>

                        <button onClick={() => {
                            setSelectedStep(2);
                        }}>
                            Haz click aquí para ir a 3
                        </button>
                    </div>
                </main>
            </div>
        </div>
    </>)
}