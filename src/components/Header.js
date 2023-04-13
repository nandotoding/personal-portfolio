import Title from "./header-components/Title";
import NavBar from "./header-components/NavBar";
import Name from "./header-components/Name";

const Header = () => {
    return (
        <div className="container-fluid d-flex p-2 bg-dark position-sticky top-0">
            <Title/>
            <NavBar/>
            <Name/>
        </div>
    )
};

export default Header;