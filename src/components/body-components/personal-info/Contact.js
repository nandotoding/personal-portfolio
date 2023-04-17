import {bioTitleStyle, cardStyle} from "./style";
import ContactList from "./ContactList";

const Contact = (props) => {
    return (
        <div className="p-2 m-2 card" style={cardStyle}>
            <div className="card-header text-center bg-transparent">
                <h6 style={bioTitleStyle}>Contacts & Social Media</h6>
            </div>
            <div className="card-body">
                <div className="container-fluid d-flex m-0 p-0 d-flex align-items-center justify-content-center">
                    <ContactList data={props.data}/>
                </div>
            </div>
        </div>
    )
};

export default Contact;