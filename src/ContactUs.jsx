import React, { useState, useEffect } from "react";
import { init, send } from "emailjs-com";
import "./ContactUs.css"; // Import your CSS file
import contact from "./contact.jpg";

// Initialize EmailJS with your public key
init("61JrX3t85cPsDcVJb"); // Your public key

const ContactUs = () => {
  const [toName, setToName] = useState("Hassan"); // Change this to the recipient's name
  const [fromEmail, setFromEmail] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: toName,
      full_name: fromName,
      from_email: fromEmail,
      message: message,
    };

    send("service_8tvii47", "template_b7t9tv8", templateParams) // Replace YOUR_TEMPLATE_ID with your actual template ID
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Your message has been sent successfully!");
        setErrorMessage("");
        // Clear form fields after submission
        setFromName("");
        setFromEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setErrorMessage("Failed to send your message. Please try again later.");
        setSuccessMessage("");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact__container">
      <h2>Contact Us</h2>
      <div className="contact__us__left__right">
        <div className="contact__us__left">
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <th></th>
                <td>
                  <h2>We Love to <span>Hear from You</span></h2>
                  <div>Feel free and share with us. We will get you</div>
                </td>
              </tr>
              <tr>
                <th>{/* <label htmlFor="fromName">Full Name </label> */}</th>
                <td>
                  {/* :{" "} */}
                  <input
                    type="text"
                    id="fromName"
                    placeholder="Full Name"
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>{/* <label htmlFor="fromEmail">Email </label> */}</th>
                <td>
                  {/* :{" "} */}
                  <input
                    type="email"
                    id="fromEmail"
                    placeholder="Email"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th> {/* <label htmlFor="message">Message </label> */}</th>
                <td>
                  {" "}
                  {/* :{" "} */}
                  <textarea
                    id="message"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <button type="submit">Send Message</button>
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  {successMessage && (
                    <p className="success">{successMessage}</p>
                  )}
                  {errorMessage && <p className="error">{errorMessage}</p>}
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div className="contact__us__right">
          <img src={contact} alt="" />
        </div>
      </div>

      {/* {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>} */}
    </div>
  );
};

export default ContactUs;
