import "./card.css";

interface Props {
    text: string,
    icon: string,
    onClick: () => void
}

export const Card = (props: Props) => {
    return (<>
        <div onClick={props.onClick} className="card-container">
            <img src={props.icon} className="card-icon"></img>
            <p className="card-name">{props.text}</p>
        </div>
    </>)

}