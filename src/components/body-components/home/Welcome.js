import WelcomeSkillCarousel from "./WelcomeSkillCarousel";

const Welcome = (props) => {
    return (
        <>
            <div className="row mt-3 mb-1 p-2">
                <div className="col-sm-4 text-center d-flex justify-content-center align-items-center">
                    <div style={{fontFamily: 'Tenor Sans'}}>
                        <p style={{fontSize: '32pt', fontFamily: 'Tangerine'}}>Hello!</p>
                        <p style={{fontSize: '14pt'}}>I'm Nando. I'm a software engineer.</p>
                    </div>
                </div>
                <div className="col-sm-4 bg-transparent text-black text-center d-flex justify-content-center align-items-center">
                    <img src={props.data.photo} height="200px" className="rounded-circle"/>
                </div>
                <div className="col-sm-4 mt-4 d-flex text-center justify-content-center align-items-center">
                    <div style={{fontFamily: 'Tenor Sans'}}>
                        <p style={{fontSize: '14pt'}}>This is my personal website. This website</p>
                        <p style={{fontSize: '14pt'}}>is developed using React and Bootstrap.</p>
                    </div>
                </div>
            </div>
            <div className="text-center m-4">
                <WelcomeSkillCarousel data={props.data.skills}/>
            </div>
        </>
    )
};

export default Welcome;
