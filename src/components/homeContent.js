import React from 'react'

const homeContent = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Company</h3>
                        <div className="underline mx-auto"></div>
                        <h5>Flexible Chore Handlers LLC is a company that takes pride in providing a wide variety of handyman services to
                        properly satisfy our clients needs. Our flexiblity pertains to scheduling and services. You can contact us anytime night
                        or day at 321-549-9824 and schedule any handyman needs. Our flexible services provides our clients with a variety of dependable
                            handyman solutions from lawn care, tree work, cleaning services and more. <br></br><br></br> We look forward to hearing from you soon!
                        </h5>
                        <h3 className="main-heading" style={{ marginTop: "100px" }}>Learn More About Us</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <a href='#' className="btn-about-us d-flex" style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>Our Founder</a>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <a href='#' className="btn-about-us d-flex" style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>Our Services</a>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <a href='#' className="btn-about-us d-flex" style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center"
                        }}>Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default homeContent
