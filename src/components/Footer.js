import {footerTextStyle, headerStyle} from "./style";

const Footer = () => {
    return (
        <div className="container-fluid text-info text-center p-5 mt-auto" style={headerStyle}>
            <p className="m-0" style={footerTextStyle}>Thank you for visiting my personal portfolio website</p>
        </div>
    )
};

export default Footer;