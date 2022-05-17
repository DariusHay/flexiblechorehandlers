import React from 'react';
import { Link } from 'react-router-dom';
import floor1 from '../components/Images/floor1.jpg';
import floor2 from '../components/Images/floor2.jpg';
import floor3 from '../components/Images/floor3.jpg';
import floor4 from '../components/Images/floor4.jpg';
import floor5 from '../components/Images/floor5.jpg';
import floor6 from '../components/Images/floor6.jpeg';
import floor7 from '../components/Images/floor7.jpeg';
import floor8 from '../components/Images/floor8.jpeg';
import tree1 from '../components/Images/tree1.jpg';
import tree2 from '../components/Images/tree2.jpg';


const Services = () => {
    return (
        <div>
            <div className="External-Info" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
                <div className="container">
                    <div className="row">
                        <h1 className="services-main text-center">
                            Our Services
                            </h1>
                        <div className="underline mx-auto" style={{ marginTop: "10px", marginBottom: "30px", width: "220px" }}></div>

                        <p className="services-main text-center"><i>If you need any services that are not listed here, please <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>contact us</Link> and we may be able to provide it for you!</i></p>

                        <div className="dropdown" style={{ textAlign: "center", marginTop: "20px" }}>
                            <a style={{ maxWidth: "100%"}} className="btn-about-us shadow dropdown-toggle center" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                scroll service into page view here
                                    </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#carpetCleaning">Carpet Cleaning</a></li>
                                <li><a className="dropdown-item" href="#caulking">Caulking</a></li>
                                <li><a className="dropdown-item" href="#cleaning">Carpet Cleaning/ Floor Cleaning</a></li>
                                <li><a className="dropdown-item" href="#concreteRepair">Concrete Repair</a></li>
                                <li><a className="dropdown-item" href="#Dance">Dance Floor Rentals</a></li>
                                <li><a className="dropdown-item" href="#drywall">Drywall Repair</a></li>
                                <li><a className="dropdown-item" href="#extCleaning">Exterior & Interior Cleaning</a></li>
                                <li><a className="dropdown-item" href="#carpet">Flooring Repairs & More</a></li>
                                <li><a className="dropdown-item" href="#gutter">Gutter Installations</a></li>
                                <li><a className="dropdown-item" href="#insulation">Insulation</a></li>
                                <li><a className="dropdown-item" href="#flooring">Lawn Care Service</a></li>
                                <li><a className="dropdown-item" href="#layingFloor">Laying Floors</a></li>
                                <li><a className="dropdown-item" href="#metal">Metal Pick up Service</a></li>
                                <li><a className="dropdown-item" href="#lawn"> Power Washing</a></li>
                                <li><a className="dropdown-item" href="#roofing"> Roofing Needs</a></li>
                                <li><a className="dropdown-item" href="#power"> Running Data Lines</a></li>
                                <li><a className="dropdown-item" href="#screen"> Screen Enclosure Repair</a></li>
                                <li><a className="dropdown-item" href="#running">Soffit Work</a></li>
                                <li><a className="dropdown-item" href="#storage">Storage Needs</a></li>
                                <li><a className="dropdown-item" href="#tireCleaning">Tire Cleaning and Repair</a></li>
                                <li><a className="dropdown-item" href="#tree">Tree Work</a></li>
                                <li><a className="dropdown-item" href="#tv">TV Wall Mounting</a></li>
                                <li><a className="dropdown-item" href="#vehicle">Vehicle Storage</a></li>
                                <li><a className="dropdown-item" href="#wooden">Wooden Privacy Fence Stain & Seal</a></li>
                            </ul>
                        </div>
                        <p style={{ marginBottom: "50px", marginTop: "50px" }} id="carpetCleaning" className="services-main text-center"><i>Click Service for Details</i></p>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <p id="concreteRepair">
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample17" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Carpet cleaning
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample17">
                                <div className="card card-body">
                                    <h5>Duration varies · Starting at $90</h5>
                                    Pure clean carpet cleaning by your friendly neighborhood handyman is a dedicated and
                                    trustworthy service that strives in customer satisfaction. Email for consultation.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a  id="Dance" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample18" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Concrete Repair
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample18">
                                <div className="card card-body">
                                    <h5>Duration varies · Prices varies</h5>
                                    Patch Cracks & Holes in Concrete. Call or Email for more details.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a id="gutter" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample16" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Dance Floor Rentals
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample16">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                    A dark oak dance floor rental is an amazing add-on to any special occasion with great music.
                                    The price varies by location and hours/days needed. Please email for additional information.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="metal" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Gutter installations
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample6">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                Will install any size any time. This service is only available in
                                Brevard County Florida. Please email to schedule time for service.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="roofing" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample10" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    metal pick up service
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample10">
                                <div className="card card-body">
                                    <h5>Duration varies · Free</h5>
                                    Any items of metal will be picked up and promptly recycled to better help recover our resources.
                                    Thank you in advance for any help as it is a necessary service to help fund our business performance as well as service needs for our customers.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="screen" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Roofing needs
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample8">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                        Free estimates based on location. Will travel out service area of Brevard County Florida.
                                        Multiple years of experience and able to service any type and height.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="storage" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Screen enclosure repair
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample5">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                This service is for repairs only not full installs. We are very flexible on pricing and enjoy this line of work. Will travel out of service area.
                                Pictures of work needed is appreciated. Please email to get your service done today, thank you.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="tv" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample12" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    storage needs
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample12">
                                <div className="card card-body">
                                    <h5>Duration varies · $50</h5>
                                    Price is monthly. We are located in Rockledge FL 32955.
                                    Email for space needed and availability, thank you.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="tireCleaning" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    TV wall mounting
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample4">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                Price varies on size of TV and location. Only servicing the Brevard County area. Able to install any Size with a money back guarantee
                                if you are not satisfied with the service. Please email to get your TV mounted ASAP thank you.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a id="wooden" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample21" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Tire Cleaning & Repair
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample21">
                                <div className="card card-body">
                                    <h5>Duration varies · Prices varies</h5>
                                    Please call or email for more details about this service. Thanks
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>
                                <a id="layingFloor" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Wooden Privacy Fence Stain & Seal
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                    Stain colors will be provided for you to choose from on the day you schedule a Free quote/estimate best way to reach us for this service would either be over the phone or by email.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample23" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Laying Floors
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample23">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                    Laying Carpet, vinyl, wood, tile or laminate. Call or Email for more Details.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <p id="caulking">
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Carpet cleaning/ Floor cleaning
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample3">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                Carpet cleaning/Floor cleaning pricing is by the square footage. $0.53 per square.
                                Extra charges may apply if there is a need to replace any flooring that has permanent stains and or existing damage. Please email to start consultation.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px"}} id="carpet">
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample19" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Caulking
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample19">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                    Call or Email for more deatils about this service. Thanks
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="flooring" style={{ marginTop: "50px", marginBottom: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample9" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Flooring Repairs & More
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample9">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                        We will do our best and use our resources to make sure we find the tile that matches your needs. We also do full installs.
                                        Carpet, Tile, wood, and more. Email to schedule for free estimate (depending on location)
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="lawn" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample14" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    lawn care service
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample14">
                                <div className="card card-body">
                                    <h5>Duration varies · $100</h5>
                                    The $100.00 pricing is monthly. We provide excellence in making your yard perfect. Mowing, Weed Eating, Edging and more can be provided at your convenience.
                                    We service the Brevard County area. Please email for scheduling and any additional information.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="power" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample13" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Power Washing
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample13">
                                <div className="card card-body">
                                    <h5>Duration varies · Prices varies</h5>
                                    Power Washing prices vary due to location and square footage.
                                    We use what is needed to make your porch, deck, dock, and more look as if it was just built or installed.
                                    We service Brevard county. Please email for any questions.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="running" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Running data lines
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample2">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                We have successfully run data lines to over 400 work stations for multiple multi-million-dollar
                                 company's and will be happy to provide this service for you. Our pricing is negotiable and we will travel out of our service area. Please email to schedule a meet.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="tree" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Soffit work
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample7">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                Our Soffit work services are extremely affordable. We have worked on many businesses and houses
                                providing excellent professional service that lasts. Warranty is available for this service. Email for service.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p id="vehicle" style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Tree Work
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample11">
                                <div className="card card-body">
                                    <h5>Duration varies · Price varies</h5>
                                    Free estimates depending on location. We love what we do and take pride in making Florida Beautiful.
                                    Our owner will personally make sure your needs are met and that you are happy with my service. Email for more information.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a id="drywall" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample15" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    vehicle storage
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample15">
                                <div className="card card-body">
                                    <h5>Duration varies · $50</h5>
                                    $50.00 a month storage for everything from motorcycles, cars, to RV's.
                                    Storage area is located in Rockledge Florida 32955. Please Email for any additional information.
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a id="extCleaning" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample20" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Drywall Repair
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample20">
                                <div className="card card-body">
                                    <h5>Duration varies · Prices varies</h5>
                                    Please call or email for more details about this service. Thanks
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a id="insulation" className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample22" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Exterior & Interior Cleaning
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample22">
                                <div className="card card-body">
                                    <h5>Duration varies · Prices varies</h5>
                                    Please call or email for more details about this service. Thanks
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px" }}>
                                <a className="btn-about-us shadow center" data-bs-toggle="collapse" href="#collapseExample24" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Insulation
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample24">
                                <div className="card card-body">
                                    <h5>Duration varies · Prices varies</h5>
                                    Please call or email for more details about this service. Thanks
                                     <a className="number" href="tel:3215499824">321-549-9824</a>
                                    <a className="number" href="mailto:now.work.ready321@gmail.com" target="_blank">now.work.ready321@gmail.com</a>
                                </div>
                            </div>
                            <p style={{ marginTop: "50px", marginBottom: "50px" }} className="services-main"><i>If you need any services that aren't listed here feel free to give us
                            a call at <a style={{ textDecoration: "none" }} className="number" href="tel:3215499824">321-549-9824</a> and we may be able to provide it for you.</i></p>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="services-main text-center">
                            Some of Our Work
                            </h2>
                        <div className="underline mx-auto" style={{ marginTop: "10px", marginBottom: "20px", width: "220px" }}></div>
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={tree1} class="d-flex centered" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Tree Cutting</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={tree2} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Tree Cutting</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor1} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Floor Remodeling</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor3} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Hardwood Floors</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor4} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Floor Remodeling</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor5} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Floor Remodeling</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor6} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Floor Remodeling</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor7} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Hardwood Floors</h5>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={floor8} class="d-block" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Floor Remodeling</h5>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services