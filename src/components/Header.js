import Title from "./header-components/Title";
import NavBar from "./header-components/NavBar";
import WaMe from "./header-components/WaMe";
import Name from "./header-components/Name";

const Header = () => {
    return (
        <div className="container-fluid d-flex p-1 m-0 bg-dark position-sticky top-0">
            <Title/>
            <NavBar/>
            <WaMe/>
            <Name/>
        </div>
    )
};

export default Header;