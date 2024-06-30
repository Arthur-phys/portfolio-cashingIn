import "./footer.css";

export const Footer = () => {
    return (<footer className="footer">
            <div className="footer-platforms">
                <a href="#" target="_blank">
                    <img src="/public/facebook.svg" className="footer-platform"></img>
                </a>
                <a href="#" target="_blank">
                    <img src="/public/instagram.svg" className="footer-platform"></img>
                </a>
                <a href="#" target="_blank">
                    <img src="/public/tiktok.svg" className="footer-platform"></img>
                </a>
                <a href="#" target="_blank">
                    <img src="/public/x.svg" className="footer-platform"></img>
                </a>
                <a href="#" target="_blank">
                    <img src="/public/youtube.svg" className="footer-platform"></img>
                </a>
            </div>
            <div className="footer-sections">
                <a className="footer-section" href="#" target="_blank">
                    About Us
                </a>
            </div>
    </footer>);
}