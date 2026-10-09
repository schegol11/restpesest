import "./Section7.scss";
import cook1 from "../../assets/unsplash_eBmyH7oO5wY.png";
import cook2 from "../../assets/unsplash_5dsZnCVDHd0.png";
import owner from "../../assets/unsplash_lRAWcT7uwhY.png";

export default function Section7() {
  return (
    <section className="section7">
      <div className="section7__row">
        <img src={cook1} alt="" className="section7__round" />
        <div className="section7__text">
          <h2><span>Our</span><br />restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>

      <div className="section7__row">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>
        <img src={cook2} alt="" className="section7__round" />
      </div>

      <div className="section7__row">
        <img src={owner} alt="" className="section7__owner" />
        <div className="section7__text">
          <h2><span>Owner &</span><br />Executive Chef</h2>
          <h3>Ismail Marzuki</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}