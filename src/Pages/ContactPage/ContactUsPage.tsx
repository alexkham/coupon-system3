import React from "react";
import ContactUsForm from "./ContactUsForm";

import ContactForm2 from "./ContactForm2";
import "./ContactPage.css"





function ContactUsPage(): JSX.Element {
    return (

        <div className='Main'>
        <div className="contact-page">
            <header> <h2>Contact Us Page</h2></header>

            <ContactForm2 />
			
        </div>

        </div>
    );
}
export default ContactUsPage;
