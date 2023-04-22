import {Link} from "react-router-dom";
import {activeNavStyle, navBarStyle, navLinkStyle} from "./style";
import {useState} from "react";

const NavBar = () => {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    const handleActiveNav1 = () => {
        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
    };

    const handleActiveNav2 = () => {
        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActive4(false);
    };

    const handleActiveNav3 = () => {
        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActive4(false);
    };

    const handleActiveNav4 = () => {
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={navBarStyle}>
                <ul className="nav">
                    <li className="p-0 nav-item hov rounded-4" onClick={handleActiveNav1} style={active1 ? activeNavStyle : {}}>
                        <Link to="/" className="nav-link" style={navLinkStyle}>Home</Link>
                    </li>
                    <li className="nav-item hov rounded-4" onClick={handleActiveNav2} style={active2 ? activeNavStyle : {}}>
                        <Link to="/bio" className="nav-link" style={navLinkStyle}>Bio & Contacts</Link>
                    </li>
                    <li className="nav-item hov rounded-4" onClick={handleActiveNav3} style={active3 ? activeNavStyle : {}}>
                        <Link to="/skills" className="nav-link" style={navLinkStyle}>Skills</Link>
                    </li>
                    <li className="nav-item hov rounded-4" onClick={handleActiveNav4} style={active4 ? activeNavStyle : {}}>
                        <Link to="/experiences" className="nav-link" style={navLinkStyle}>Experiences</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;