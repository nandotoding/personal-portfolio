import waLogo from "../../assets/whatsapp-logo-3.png";

const WaMe = () => {
    return (
        <div className="ms-2 me-auto">
            <a href="https://wa.me/+6281342486950" target="_blank" style={{textDecoration: 'none'}}>
                <button type="button" className="p-1 mt-2 d-flex btn rounded-5 btn-sm" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Message me on WhatsApp" style={{backgroundColor: '#00e676'}}>
                    <img src={waLogo} alt="whatsapp" height="17px" className="m-1"/>
                    {/*<p className="ms-1 m-0" style={{color: 'black'}}>Chat me</p>*/}
                </button>
            </a>
        </div>
    )
};

export default WaMe;