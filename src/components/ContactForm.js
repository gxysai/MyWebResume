import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <div>
          <h2>Let's Chat</h2>
        </div>
        <br />

        <div className="form-wrapper">
          <form
            action="https://getform.io/f/493c9126-1c76-4c1f-b3d2-de3805d2fad6"
            className="form-fields"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field"
              required
            />
            <br />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input-field"
              required
            />
            <br />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="textarea-field"
              required
            ></textarea>
            <br />

            <button className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
