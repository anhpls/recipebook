import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import logo from "../assets/title.png";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <img src={logo} className="contact-title-logo" alt="" id="" />
      <ContactForm />
      <Contact />
      <Footer />
    </>
  );
}
