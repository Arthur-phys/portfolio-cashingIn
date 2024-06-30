import { CashinLogo } from "../CashinLogo/CashinLogo";
import "./header.css";

interface Props {
    sections: string[]
}

export const Header = (props: Props) => {
    return (<header className="header">
        <CashinLogo size="medium" background={false}/>
        <div className="header-sections-container">
            { props.sections.map(s => {
                return (<div className="header-section">
                    {s}
                </div>)
            }) }
        </div>
    </header>);
}