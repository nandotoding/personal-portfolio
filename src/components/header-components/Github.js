import githubLogo from "../../assets/github-logo.png";

const Github = () => {
    return (
        <div className="ms-2">
            <a href="https://github.com/nandotoding" target="_blank" style={{textDecoration: 'none'}}>
                <div className="pt-1 mt-1 me-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Visit my Github">
                    <img src={githubLogo} alt="github" height="20px" className="m-1 imghov"/>
                </div>
            </a>
        </div>
    )
};

export default Github;