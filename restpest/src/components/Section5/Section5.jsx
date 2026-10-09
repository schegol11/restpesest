import "./Section5.scss";
import chef1 from "../../assets/Group 8.png";
import chef2 from "../../assets/Group 9.png";
import chef3 from "../../assets/Group 10.png";

export default function Section5() {
  return (
    <section className="section5">
      <h2>Our greatest chef</h2>

      <div className="section5__grid">
        <div className="section5__card">
          <img src={chef1} alt="" />
          <h3>Betran Komar</h3>
          <p>Head chef</p>
        </div>

        <div className="section5__card">
          <img src={chef2} alt="" />
          <h3>Ferry Sauwi</h3>
          <p>Chef</p>
        </div>

        <div className="section5__card">
          <img src={chef3} alt="" />
          <h3>Iswan Dracho</h3>
          <p>Chef</p>
        </div>
      </div>

      <button>View all</button>
    </section>
  );
}