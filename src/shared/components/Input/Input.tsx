import "./input.css";

interface Props {
    id: string,
    type: "email" | "text" | "password"
    label: string
    placeholder: string
    required?: boolean,
    onBlur: (e: React.FocusEvent<HTMLInputElement,Element>) => void
}

export const Input = (props: Props) => {
    return (
        <div className="input-container">
            <label className="input-label" htmlFor={props.id}>
                {props.label}
            </label>
            <input 
                required={props.required ? true : false}
                className="input-input"
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                onBlur={props.onBlur}
            ></input>
        </div>
    )
}