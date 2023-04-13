import {Link} from "react-router-dom";
import {navBarStyle, navLinkStyle} from "./style";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" style={navLinkStyle}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bio" className="nav-link" style={navLinkStyle}>Bio & Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link" style={navLinkStyle}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experiences" className="nav-link" style={navLinkStyle}>Experiences</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};


export default NavBar;