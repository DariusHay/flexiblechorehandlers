import React from 'react';
import LLC from "../components/Images/LLC2.png"

const ExternalInfo = () => {
    return (
        <div style={{ paddingTop: "20px", paddingBottom: "50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h3 className="external-info">
                            Flexible Chore <br></br>Handlers LLC
                        </h3>
                        <a href={LLC} target="_blank">
                        <img className="llcImage" src={LLC} style={{ height: "400px", width: "400px", marginTop: "20px", marginBottom: "40px" }}/>
                        </a>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3 className="external-info">
                            Let us help you get some questions answered.
                        </h3>
                        <div className="underline mx-auto" style={{ marginTop: "30px", marginBottom: "50px"}}></div>
                        <h5 className="external-info" style={{ marginBottom: "40px" }}><i>What work can a Handyman perform in the State of Florida without a License?</i></h5>
                        <a href='https://www.contractorcampus.com/what-can-a-handyman-legally-do-in-florida.html' target="_blank" className="btn-about-us shadow" style={{
                            // display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>Find Out Here</a>
                        <h5 className="external-info" style={{ marginBottom: "40px", marginTop: "40px" }}>
                            <i>What are Specialty Trades That Do Not Require a Certificate of Competency License (COC) in Brevard County?</i>
                        </h5>
                        <a href='https://www.cocoafl.org/1551/Handyman-List' target="_blank" className="btn-about-us shadow" style={{
                            // display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>Find Out Here</a>
                        <div className="underline mx-auto" style={{ marginTop: "50px"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExternalInfo
