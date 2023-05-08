import Title from "./header-components/Title";
import NavBar from "./header-components/NavBar";
import WaMe from "./header-components/WaMe";
import Github from "./header-components/Github";
import {headerStyle} from "./style";

const Header = (props) => {
    return (
        <div className="container-fluid d-flex p-0 m-0 fixed-top position-sticky top-0" style={headerStyle}>
            <div className="me-auto">
                <Title/>
            </div>
            <div className="row">
                <NavBar/>
            </div>
            <div>
                <Github/>
            </div>
            <div className="me-2">
                <WaMe/>
            </div>
        </div>
    )
};

export default Header;