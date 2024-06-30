import "./cashinLogo.css";

interface Props {
    size: "mega" | "big" | "medium" | "small",
    background: boolean;
}

export const CashinLogo = (props: Props) => {
    switch (props.size) {
        case "big":
            return (
            <div className={"cash-in-logo-container" + (props.background ? " cash-in-background" : "")}>
                
                <span className="cash-in-logo" style={{
                    fontSize: "5.2rem"
                }}>
                    Cash in 
                </span>
                
                <img src="/public/wallet.svg" style={{
                    height: "5.2rem",
                    width: "5.2rem"
                }}>
                </img>
            
            </div>
            );

        case "medium":
            return (
            <div className={"cash-in-logo-container" + (props.background ? " cash-in-background" : "")}>
                
                <span className="cash-in-logo" style={{
                    fontSize: "3.6rem"
                }}>
                    Cash in 
                </span>
                
                <img src="/public/wallet.svg" style={{
                    height: "3.6rem",
                    width: "3.6rem"
                }}>
                </img>
            
            </div>
            );

        case "small":
            return (
            <div className={"cash-in-logo-container" + (props.background ? " cash-in-background" : "")}>
                
                <span className="cash-in-logo" style={{
                    fontSize: "2.4rem"
                }}>
                    Cash in 
                </span>
                
                <img src="/public/wallet.svg" style={{
                    height: "2.4rem",
                    width: "2.4rem"
                }}>
                </img>
            
            </div>
            );
        case "mega":
            return (
                <div className={"cash-in-logo-container" + (props.background ? " cash-in-background" : "")} style={{
                    padding: "var(--small-padding)"
                }}>
                    
                    <span className="cash-in-logo" style={{
                        fontSize: "8.6rem"
                    }}>
                        Cash in 
                    </span>
                    
                    <img src="/public/wallet.svg" style={{
                        height: "8.6rem",
                        width: "8.6rem",
                    }}>
                    </img>
                
                </div>
            );
            
    }
}