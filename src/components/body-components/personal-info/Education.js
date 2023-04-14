import unhasLogo from '../../../assets/unhas-logo.png';

const Education = () => {
    return (
        <div className="m-2 p-2 card">
            <div className="card-header text-center">
                <h6>Education</h6>
            </div>
            <div className="card-body text-center">
                <p>
                    Bachelor's degree in Mathematics, Hasanuddin University
                    <img src={unhasLogo} className="ms-2" alt="unhas-logo" height="20px"/>
                </p>
            </div>
        </div>
    )
};

export default Education;