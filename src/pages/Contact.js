import React from 'react';




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
                                <h6 className="external-info">Direct Message Form</h6>
                                <hr />
                                <form
                                    action="https://formsubmit.co/acojnddigital@gmail.com" method="POST" 
                                >
                                    
                                        <label className="external-info mb-1">Full Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter full name" required/>
                                   
                                        <input type="hidden" name="_next" value="https://dariushay.github.io/flexiblechorehandlers/"></input>
                                        <label className="external-info mb-1">Phone Number</label>
                                        <input type="text" className="form-control" name="phone" placeholder="Enter your phone number" required/>
                               
                                    
                                        <label className="external-info mb-1">Email Address</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter your email" required/>
                                
                                    
                                        <label className="external-info mb-1">Message</label>
                                        <textarea rows="3" className="form-control" name="message" placeholder="Type your message..." required/>
                                 
                                    
                                        <button type="submit" style={{ marginBottom: "20px" }} className="btn-about-us shadow w-100" required>Send Message</button>
                               
                                </form>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="container text-center">
                                    <div className="External-Info shadow" style={{ paddingTop: "10px", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "15px" }}>
                                        <h5><strong>Phone:</strong></h5>
                                        <p><a className="number" href="tel:3215499824">321-549-9824</a></p>
                                        <h5><strong>Email:</strong></h5>
                                        <p><a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact
