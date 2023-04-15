const ContactList = (props) => {
    return (
        <>
            <ul className="nav">
                {props.data.map(d => {
                    return (
                        <li className="nav-item">
                            <div className="me-3">
                                <img src={d.logo} alt={d.alt} height={d.height} className="me-1"/>
                                <a href={d.link} target="_blank" style={d.anchorStyle}>{d.text}</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default ContactList;