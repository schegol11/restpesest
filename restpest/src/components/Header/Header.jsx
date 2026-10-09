import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Delizioso" />

      <nav>
        <a href="/">Home</a>
        <a href="menu">Menu</a>
        <a href="about">About us</a>
        <a href="#">Order online</a>
        <a href="#">Reservation</a>
        <a href="#">Contact us</a>
      </nav>

      <div className="header__actions">
        <img src={cart} alt="Cart" />
        <button>Log in</button>
      </div>
    </header>
  );
}