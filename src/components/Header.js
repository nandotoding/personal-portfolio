import Title from "./header-components/Title";
import NavBar from "./header-components/NavBar";
import WaMe from "./header-components/WaMe";
import Name from "./header-components/Name";
import Github from "./header-components/Github";

const Header = () => {
    return (
        <div className="container-fluid d-flex p-0 m-0 fixed-top position-sticky top-0" style={{backgroundColor: '#174d98'}}>
            <div>
                <Title/>
            </div>
            <div className="me-auto">
                <Name/>
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