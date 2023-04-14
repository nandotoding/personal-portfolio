import unhasLogo from '../../../assets/unhas-logo.png';

const Education = () => {
    return (
        <div className="m-2 p-5 card">
            <h6>Education</h6>
            <p>
                Bachelor's degree in Mathematics, Hasanuddin University
                <img src={unhasLogo} className="ms-2" alt="unhas-logo" height="20px"/>
            </p>
        </div>
    )
};

export default Education;