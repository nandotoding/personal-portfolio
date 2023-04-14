import {footerTextStyle} from "./style";

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-info text-center p-5">
            <p className="m-0" style={footerTextStyle}>Thank you for visiting my personal website</p>
            <p className="m-0" style={footerTextStyle}>This website is developed using React JS</p>
        </div>
    )
};

export default Footer;