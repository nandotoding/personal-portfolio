import {footerTextStyle} from "./style";

const Footer = () => {
    return (
        <div className="container-fluid text-info text-center p-4 mt-auto" style={{backgroundColor: '#03244a'}}>
            <p className="m-0" style={footerTextStyle}>Thank you for visiting my personal portfolio website</p>
            <p className="m-0" style={footerTextStyle}>This website is developed using React JS and Bootstrap 5</p>
        </div>
    )
};

export default Footer;