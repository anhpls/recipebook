import { useState, useRef } from "react";
import "../styles/Contact.css";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [inputs, setInputs] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((input) => ({ ...input, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    inputs.textarea.replace(/\n/g, "");
    alert("Thank you for sending us a message!");
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      textarea: "",
    });
  };
  return (
    <>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Fill out our contact form</h3>
          <label>
            First Name:{" "}
            <div>
              <input
                type="text"
                name="firstName"
                value={inputs.firstName || ""}
                onChange={handleInput}
                placeholder=" John"
                required
              />
            </div>
          </label>
          <br />
          <label>
            Last Name:{" "}
            <div>
              <input
                type="text"
                name="lastName"
                value={inputs.lastName || ""}
                onChange={handleInput}
                placeholder=" Doe"
                required
              />
            </div>
          </label>
          <br />
          <label>
            Email:{" "}
            <div>
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleInput}
                placeholder=" support@recipebook.com"
                required
              />
            </div>
          </label>

          <br />
          <div>
            <h4>Message:</h4>
          </div>
          <textarea
            value={inputs.textarea || ""}
            name="textarea"
            onChange={handleInput}
            placeholder="A message to us about anything..."
            className="textarea-css"
            required
          />
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
