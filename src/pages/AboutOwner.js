import React from 'react';
import LLC from '../components/Images/home-pic.jpg';
import Fun from '../components/Images/fun.jpg';
import Riding from '../components/Images/riding.jpg';
import Suited from '../components/Images/suited.png';

const AboutOwner = () => {
    return (
        <div className="External-Info" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h3 className="external-info">
                            Dustin Fortner
                    </h3>
                        <div className="underline mx-auto"></div>
                        <h5 className="external-info"> Founder of Flexible Chore <br></br> Handlers LLC</h5>
                        <img className="llcImage" src={LLC} style={{ height: "400px", width: "400px", marginTop: "20px", marginBottom: "40px", maxWidth: "100%" }} />
                        <h5 className="external-info" style={{ marginBottom: "30px" }}><i> Connect with Dustin on FaceBook!</i></h5>
                        <a href="https://www.facebook.com/dustin.fortner.52" target="_blank" class="fa fa-facebook" style={{
                            padding: "20px",
                            fontSize: "30px",
                            width: "50px",
                            background: "#55ACEE",
                            color: "white",
                            marginBottom: "30px"
                        }}></a>

                        <h5 className="external-info" style={{ marginBottom: "30px" }}><i> Like our business page on FaceBook!</i></h5>
                        <a href="https://www.facebook.com/Flexible-Chore-Handlers-105522095382202" target="_blank" class="fa fa-facebook" style={{
                            padding: "20px",
                            fontSize: "30px",
                            width: "50px",
                            background: "#55ACEE",
                            color: "white",
                            marginBottom: "30px"
                        }}></a>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3 className="external-info">
                            About the Owner
                        </h3>
                        <div className="underline mx-auto" ></div>
                        <h5 className="external-info" style={{ marginBottom: "40px", marginTop: "40px" }}>
                            Dustin Fortner is the owner and operator of Flexible Chore Operators LLC. Dustin was born in Michigan and moved to Florida
                            at a young age. Growing up with an interest to be a Multi-Skilled Tradesman, he envisioned starting this business long age.
                            The name Flexible Chore Handlers started when Dustin was in elementary school, being taught how to make business cards, Dustin chose the name "chore handlers."
                            He printed out as many cards as his teacher would let him and passed them out to every house on a 10-mile rode in his neighborhood.
                            That birthed his own little business as a child doing odd jobs from pulling weeds to cutting trees.
                            <br></br><br></br> In the workforce, Dustin has worked Landscaping, Tree Work, Roofing, Facility Specialty, Fence building, Plumbing,
                            Electrical, Concrete, Framing Wood, Metal Painting and more. He's worked for as many construction labor trade skilled jobs as possible to
                            gain as much knowldge as he could to provide the best services in his own service business. <br></br><br></br>Call Dustin at <a className="number" href="tel:3215499824">321-549-9824</a> and he will speak with you about any services that you may need.
                    </h5>

                        <img className="llcImage" src={Riding} style={{ height: "200px", width: "200px", marginTop: "20px", marginBottom: "40px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOwner
