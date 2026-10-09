import "./Section2.scss";
import drop from "../../assets/drop.png";

export default function Section2() {
  return (
    <section className="section2">
      <img src={drop} alt="Salad" className="section2__img" />

      <div className="section2__text">
        <h2>Welcome to<br /><span>delizioso</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
          nec quam
        </p>
        <button className="section2__btn">See our menu</button>
      </div>
    </section>
  );
}