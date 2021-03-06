import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fireDb from '../../firebase.js';

function Contact() {

    const[state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const {name, email, subject, message} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message){
            toast.error("Please provide value in each input field.");
        } else {
            fireDb.child("contacts").push(state);
            setState({ name: "", email: "", subject: "", message: ""});
            toast.success("Form submitted successfully!");
        }
    }

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }
    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <ToastContainer position="top-center"/>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="wrapper c-wrapper">
                                <div className="row no-gutters">

                                    {/* Left section */}
                                    <div className="col-md-6">
                                        <div className="contact-wrap w-100 p-lg-5 p-4">
                                            <h3 className="mb-4">Send us a message</h3>

                                            {/* Form starts here */}
                                            <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control c-form-control"
                                                                name="name"
                                                                placeholder="Name"
                                                                onChange={handleInputChange}
                                                                value={name}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control c-form-control"
                                                                name="email"
                                                                placeholder="Email"
                                                                onChange={handleInputChange}
                                                                value={email}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control c-form-control"
                                                                name="subject"
                                                                placeholder="Subject"
                                                                onChange={handleInputChange}
                                                                value={subject}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                type="text"
                                                                className="form-control c-form-control"
                                                                name="message"
                                                                placeholder="Message"
                                                                col="30"
                                                                rows="6"
                                                                onChange={handleInputChange}
                                                                value={message}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="submit"
                                                                className="btn c-btn btn-outline-light"
                                                                value="Send Message"
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Right section */}
                                    <div className="col-md-6 d-flex align-items-stretch">
                                        <div className="info-wrap w-100 p-lg-5 p-4 img">
                                            <h3 className="c-h3">Contact Us</h3>

                                            <p className="mb-4">We are open to have any suggestion or just to have a chat!</p>

                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-map-marker"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span> Address:</span> District Shifa, City Riyadh, Kingdom of Saudi Arabia
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span> Phone:</span> +966 747464674
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span> Email:</span>&nbsp;
                                                        <Link to="/">email@domain.com</Link>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-globe"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p>
                                                        <span> Website:</span>&nbsp;
                                                        <Link to="/">websitedomain.com</Link>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
