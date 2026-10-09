import "./Section8.scss";
import open from "../../assets/Background.png";

export default function Section8() {
  return (
    <section className="section8">
      <img src={open} alt="" className="section8__bg" />

      <div className="section8__content">
        <h2>we are open from</h2>
        <h3>Monday-Sunday</h3>
        <p>Launch : Mon-Sun : 11:00am-02:00pm</p>
        <p>Dinner : sunday : 04:00pm-08:00pm</p>
        <p>04:00pm-09:00pm</p>

        <div className="section8__buttons">
          <button className="section8__btn section8__btn--orange">Order now</button>
          <button className="section8__btn section8__btn--white">Reservation</button>
        </div>
      </div>
    </section>
  );
}