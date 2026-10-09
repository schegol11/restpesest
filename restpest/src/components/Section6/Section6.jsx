import "./Section6.scss";
import customer from "../../assets/customer.png";
import customers from "../../assets/customers.png";

export default function Section6() {
  return (
    <section className="section6">
      <h2>Our customers say</h2>

      <img src={customer} alt="" className="section6__photo" />
      <h3>Starla Virgoun</h3>
      <p className="section6__role">Financial advisor</p>

      <p className="section6__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
        ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
        quam
      </p>

      <img src={customers} alt="" className="section6__avatars" />
    </section>
  );
}