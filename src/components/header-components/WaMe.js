import waLogo from "../../assets/wa-logo.png";

const WaMe = () => {
    return (
        <div className="ms-2">
            <a href="https://wa.me/+6281342486950" target="_blank" style={{textDecoration: 'none'}}>
                <div className="pt-1 mt-1 me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Message me on WhatsApp">
                    <img src={waLogo} alt="whatsapp" height="20px" className="m-1 imghov"/>
                </div>
            </a>
        </div>
    )
};

export default WaMe;