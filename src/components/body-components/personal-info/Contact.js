import waLogo from '../../../assets/whatsapp-logo.png';
import gmLogo from '../../../assets/gmail-logo.png';

const Contact = () => {
    return (
        <div className="p-5 m-0">
            <h6>Contacts & Social Medias</h6>
            <div className="container-fluid d-flex m-0 p-0">
                <ul className="nav">
                    <li className="nav-item">
                        <div>
                            <a href="https://wa.me/+6281342486950" target="_blank" style={{textDecoration: 'none'}}>
                                <button>
                                    <img src={waLogo} alt="whatsapp" height="20px"/>
                                    WhatsApp Me
                                </button>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div>
                            <img src={gmLogo} alt="gmail" height="20px"/>
                            <a href="#" style={{textDecoration: 'none'}}>nandotodingbua@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Contact;