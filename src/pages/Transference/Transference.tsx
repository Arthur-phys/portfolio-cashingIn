import { CashinLogo } from '../../shared/components/CashinLogo/CashinLogo';
import { Stepper } from '../../shared/components/Stepper/Stepper';

import './transference.css';

interface Props {
    username: string
}

export const Transference = (props: Props) => {
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
                    selectedStep={0}
                    />
                </div>
                <main>
                    {props.username}
                </main>
            </div>
        </div>
    </>)
}