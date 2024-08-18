import { Link } from "react-router-dom";
import "../styles/Landing.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { TbHandClick } from "react-icons/tb";

export default function Landing() {
  return (
    <>
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" id="bg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.85}>
          <div className="animation_layer parallax" id="logo-image"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="lineart"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="title"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="logo"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="fire-top"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="animation_layer parallax" id="fire"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="header-container">
            <div className="header">
              <h1>About Us</h1>
              <p className="descriptions">
                Welcome to Recipe Book, your go-to destination for finding and
                creating mouthwatering recipes from around the world! Whether
                you're a seasoned chef or just starting out in the kitchen,
                we're here to make your cooking journey enjoyable, inspiring,
                and accessible.
              </p>
            </div>
            <div className="header-body">
              <h2>Our Mission</h2>
              <p className="descriptions">
                We believe that everyone should have the opportunity to create
                delicious meals without the hassle of complicated instructions
                or hard-to-find ingredients. Our mission is to simplify the
                cooking process by providing you with a vast selection of
                easy-to-follow recipes that are both flavorful and nutritious.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.55}>
          <div className="animation_layer parallax" id="about1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.75}>
          <div className="animation_layer parallax" id="about2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="enter-container">
            <Link to="/home" className="enter-button">
              Recipes
            </Link>
            <p className="handclick">
              <TbHandClick />
            </p>
          </div>
          {/* <NavBar /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.35}>
          <div className="content-container">
            <h2>What We Offer</h2>
            <p className="descriptions">
              Thanks to our powerful Tasty API, we bring you an extensive
              library of recipes at your fingertips. This means that you'll
              <b>
                {" "}
                <em>always</em>
              </b>{" "}
              find something new and exciting to try, no matter your culinary
              preferences or dietary restrictions. From quick weeknight dinners
              to indulgent desserts, our recipes are curated to suit every taste
              and occasion.
            </p>
            <ul className="landing-list">
              <li>
                <span className="bullet-heading">
                  Diverse Recipe Collection:
                </span>{" "}
                {""}
                Discover a wide range of recipes, from traditional dishes to
                modern twists on your favorites.
              </li>
              <li>
                <span className="bullet-heading">
                  Step-by-Step Instructions:
                </span>{" "}
                Each recipe comes with detailed instructions, making it easy to
                follow along, even if you're a beginner.
              </li>
              <li>
                <span className="bullet-heading">Search by Ingredients:</span>{" "}
                Got something specific in your pantry? Use our ingredient search
                feature to find recipes that use what you already have at home.
              </li>
            </ul>
            <h2>How It Works</h2>
            <p className="descriptions">
              Our website harnesses the power of a cutting-edge Tasty API that
              aggregates and curates recipes from a variety of trusted sources.
              This allows us to offer you a diverse and up-to-date selection of
              recipes, all in one convenient place. Whether you're looking for a
              specific cuisine, a quick meal idea, or inspiration for your next
              culinary adventure, our site has you covered.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.55}>
          <div className="animation_layer parallax" id="api"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.85}>
          <div className="animation_layer parallax" id="book"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.95}>
          <div className="landing-page-footer">
            <p className="footer-text" id="footer-text">
              Designed & Coded By Anh Huynh
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
