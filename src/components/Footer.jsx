import "../styles/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="biggest-container">
          <div className="contact-container">
            <h4>Contact Us</h4>
            <p className="footer-address">
              <span className="footerspans">Address:</span> 1234 Culinary Avenue
              Gourmet City, FL 56789 United States
            </p>
            <p className="footer-phone">
              <span className="footerspans">Phone:</span> +1 (555) 987-6543
            </p>
            <p className="footer-email">
              {" "}
              <span className="footerspans">Email: </span>
              support@recipebook.com
            </p>
          </div>
          <div className="business-hours-container">
            <h4>Business Hours</h4>
            <p className="footer-hours">
              Monday - Friday: 9:00 AM - 6:00 PM (EST) <br /> Saturday: 10:00 AM
              - 4:00 PM (EST) <br /> Sunday: Closed
            </p>
          </div>
          <div className="social-media-container">
            <h4>Social Media:</h4>
            <p className="social-media">
              Follow us on social media to stay updated with the latest recipes,
              cooking tips, and community news! <br />
              <Link to="#" className="footer-links">
                <FaFacebookSquare className="footer-icons" />
              </Link>
              <Link to="#" className="footer-links">
                <GrInstagram className="footer-icons" />
              </Link>
              <Link to="#" className="footer-links">
                <FaSquareXTwitter className="footer-icons" />
              </Link>
            </p>
          </div>
          <div className="newsletter">
            <h4>Newsletter:</h4>
            <p>
              <em>
                Sign up for our newsletter to get the latest recipes, cooking
                tips, and special offers delivered straight to your inbox!
              </em>
            </p>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright-text">Designed & Coded by Anh Huynh</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
