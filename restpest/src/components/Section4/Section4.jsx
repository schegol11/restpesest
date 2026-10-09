import "./Section4.scss";
import table from "../../assets/unsplash_RFt5ILSr6FA.png";
import tableTop from "../../assets/unsplash_vJsj-hgOEG0.png";
import tableBottom from "../../assets/unsplash_sjBYA8dAw54.png";

export default function Section4() {
  return (
    <section className="section4">
      <div className="section4__images">
        <img src={table} alt="" className="section4__main" />
        <img src={tableTop} alt="" className="section4__top" />
        <img src={tableBottom} alt="" className="section4__bottom" />
      </div>

      <div className="section4__text">
        <h2>Let's reserve<br /><span>a table</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
          nec quam
        </p>
        <button>Reservation</button>
      </div>
    </section>
  );
}