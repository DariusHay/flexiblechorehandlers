import React from 'react'

const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6 style={{ textAlign: "center"}}>Follow Us</h6>
                        <hr/>
                        <a href="https://www.facebook.com/Flexible-Chore-Handlers-105522095382202" target="_blank" class="fa fa-facebook"></a>
                    </div>
                    <div className="col-md-4">
                        <h6 style={{ textAlign: "center"}}>Quick Links</h6>
                        <hr/>
                        <a href="/" className="footer-links" style={{ margin: "auto", justifyContent: "center", display: "flex" }}>Home</a>
                        <a href="/about-owner" className="footer-links" style={{ margin: "auto", justifyContent: "center", display: "flex" }}>About Owner</a>
                        <a className="footer-links" style={{ margin: "auto", justifyContent: "center", display: "flex" }}>Services</a>
                        <a className="footer-links" style={{ margin: "auto", justifyContent: "center", display: "flex" }}>Contact</a>
                    </div>
                    <div className="col-md-4">
                        <h6 style={{ textAlign:"center" }}>Contacts</h6>
                        <hr/>
                        <a className="footer-links" href="mailto:now.work.ready321@gmail.com" target="_blank" style={{ margin: "auto", justifyContent: "center", display: "flex" }}>now.work.ready321@gmail.com</a>
                        <a className="footer-links" href="tel:3215499824" style={{ margin: "auto", justifyContent: "center", display: "flex" }}>321-549-9824</a>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                        <i className="fa fa-copyright">&nbsp;2022 Flexible Chore Handlers</i>
                </div>
            </div>
        </section>
    )
}

export default Footer
