import React from 'react'

const Contact = () => {
    return (
        <div className="External-Info" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            <h1 className="services-main text-center">
                Contact Us
                            </h1>
            <div className="underline mx-auto" style={{ marginTop: "10px", marginBottom: "50px", width: "220px" }}></div>
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="external-info">Contact Form</h6>
                                <hr />
                                <div className="form-group">
                                    <label className="external-info mb-1">Full Name</label>
                                    <input type="text" className="form-control" name="" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label className="external-info mb-1">Phone Number</label>
                                    <input type="text" className="form-control" name="" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label className="external-info mb-1">Email Address</label>
                                    <input type="text" className="form-control" name="" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group">
                                    <label className="external-info mb-1">Message</label>
                                    <textarea rows="3" className="form-control" placeholder="Type your message..." />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn-about-us w-100">Send Message</button>
                                </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
