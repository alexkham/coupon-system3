import React, { JSXElementConstructor } from "react";
import './Contact.scss';



function ContactUsForm():JSX.Element{

    return(
        <>
       < div id="contactForm" className="contactForm">
        <><div id="formHeader" className="formHeader">
                <h1 id="message">Contact Us</h1>
            </div><div id="formBody" className="formBody">
                    <form action="" method="POST" name="contactForm">
                        <div className="inputContainer">
                            <label htmlFor="userName">
                                <i className="fa fa-lg fa-fw fa-user"></i>
                            </label>
                            <input name="name" id="userName" type="text" placeholder="John Smith"/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="userEmail">
                                <i className="fa fa-lg fa-fw fa-envelope"></i>
                            </label>
                            <input name="email" id="userEmail" type="email" placeholder="jsmith@domain.com"/>
                        </div>
                        <div className="inputContainer">
                            <textarea name="feedback" id="userMessage"  placeholder="Enter your message"></textarea>
                        </div>
                        <input id="submitBtn" className="submitBtn" type="submit" value="Send"/>
                    </form>
                </div></>
      </div>
      </>
    

    )
}

export default ContactUsForm;