import gmLogo from '../../../assets/gmail-logo.png';
import linLogo from '../../../assets/linkedin-logo.png';
import igLogo from '../../../assets/ig-logo.png';

const Contact = () => {
    return (
        <div className="p-2 m-2 card">
            <div className="card-header text-center">
                <h6>Contacts & Social Media</h6>
            </div>
            <div className="card-body">
                <div className="container-fluid d-flex m-0 p-0 d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <div className="me-3">
                                <img src={gmLogo} alt="gmail" height="12px" className="me-1"/>
                                <a href="#" style={{textDecoration: 'none', pointerEvents: 'none', color: 'black'}}>nandotodingbua@gmail.com</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="me-3">
                                <img src={linLogo} alt="linkedin" height="14px" className="me-1"/>
                                <a href="https://www.linkedin.com/in/fernandotodingbua/" style={{textDecoration: 'none'}} target="_blank">Fernando Toding Bua</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <img src={igLogo} alt="instagram" height="16px" className="me-1"/>
                                <a href="https://instagram.com/nando.todingbua" style={{textDecoration: 'none'}} target="_blank">nando.todingbua</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Contact;