import "./Footer.scss";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <img src={logo} alt="Delizioso" className="footer__logo" />
          <p>
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>
          <div className="footer__socials">
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>

        <div className="footer__col">
          <h4>Page</h4>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Order online</a>
          <a href="#">Catering</a>
          <a href="#">Reservation</a>
        </div>

        <div className="footer__col">
          <h4>Information</h4>
          <a href="#">About us</a>
          <a href="#">Testimonial</a>
          <a href="#">Event</a>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <p>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
          <p>delizioso@gmail.com</p>
          <p>+123 4567 8901</p>
        </div>
      </div>

      <p className="footer__copy">Copyright © 2022 Delizioso</p>
    </footer>
  );
}