import "./Section1.scss";
import musor from "../../assets/musor.png";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1__text">
        <span className="section1__tag">Restaurant</span>
        <h1>Italian<br />Cuisine</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
          senectus dictum arcu sit tristique donec eget.
        </p>
        <div className="section1__buttons">
          <button className="section1__btn section1__btn--orange">Order now</button>
          <button className="section1__btn section1__btn--green">Reservation</button>
        </div>
      </div>

      <img src={musor} alt="Italian Cuisine" className="section1__img" />
    </section>
  );
}