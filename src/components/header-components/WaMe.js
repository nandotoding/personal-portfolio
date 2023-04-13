import waLogo from "../../assets/whatsapp-logo-2.png";

const WaMe = () => {
    return (
        <div className="ms-2 me-auto">
            <a href="https://wa.me/+6281342486950" target="_blank" style={{textDecoration: 'none'}}>
                <button type="button" className="p-2 mt-2 d-flex btn btn-light rounded-5">
                    <img src={waLogo} alt="whatsapp" height="25px" className="m-0"/>
                    <p className="ms-1 m-0" style={{color: 'black'}}>Chat me</p>
                </button>
            </a>
        </div>
    )
};

export default WaMe;