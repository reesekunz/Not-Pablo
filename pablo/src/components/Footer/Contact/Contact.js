import React from "react";
import "./Contact.scss";
import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <ContactForm />
      <div className="other-pages-linkz">
        <NavLink to="/" activeClassName="activeNavButton" className="next-link">
          Back Home
        </NavLink>
      </div>
    </div>
  );
}

export default Contact;
