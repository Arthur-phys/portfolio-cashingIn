import "./loader.css";

interface Props {
    size: number,
    color: string,
}

export const Loader = (props: Props) => {
    return (<>
            <div className="loader-container" style={{ height: `${props.size}rem`, width: `${props.size}rem` }}>
                {
                    [...Array(8).keys()].map((k) => {
                            return (<>
                                <div key={k} className="loader-circle" style={{
                                    height: `${props.size / 8}rem`,
                                    width: `${props.size / 8}rem`,
                                    backgroundColor: props.color,
                                    top: `${(props.size/3)*(Math.cos(Math.PI*(k+1)/4) + 3/2) - props.size / 16}rem`,
                                    left: `${(props.size/3)*(Math.sin(Math.PI*(k+1)/4) + 3/2) - props.size / 16}rem`,
                                    animationDelay: `${-k*0.1}s`
                                }}></div>
                            </>)
                    })
                }
            </div>
    </>)
}