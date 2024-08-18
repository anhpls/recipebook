import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="body-container">
        <div className="card-container">
          <div className="heading-container">
            <h2 className="title">Contact</h2>
            <h5>
              We'd love to hear from you! Whether you have a question, feedback,
              or just want to say hello, feel free to get in touch with us.
            </h5>
            <h5>Email: </h5>
            <p>
              <em>support@recipebook.com</em>
            </p>
            <br />
            <h5>Customer Support: </h5>
            <p>
              For any inquiries related to your account, recipes, or technical
              issues, please email our support team at{" "}
              <em> support@recipebook.com</em> <br />
              We aim to respond within 24 hours.
            </p>
            <br />
            <h5>Collaborations & Partnerships:</h5>{" "}
            <p>
              {" "}
              Interested in working with us? Whether you're a brand, blogger, or
              fellow food enthusiast, we're always open to exciting
              collaborations. Reach out to our marketing team at
              <em> partnerships@recipebook.com</em>
            </p>
            <br />
            <h5>Feedback:</h5>{" "}
            <p>
              Your feedback is invaluable to us. If you have suggestions on how
              we can improve our website or services, please let us know at
              <em> feedback@recipebook.com.</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
