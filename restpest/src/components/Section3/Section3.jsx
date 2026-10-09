import "./Section3.scss";
import food1 from "../../assets/Mask Group(1).png";
import food2 from "../../assets/Mask Group(2).png";
import food3 from "../../assets/Mask Group(3).png";
import food4 from "../../assets/Mask Group(4).png";
import food5 from "../../assets/Mask Group(5).png";
import food6 from "../../assets/Mask Group(6).png";
import stars from "../../assets/Rating.png";

export default function Section3() {
  return (
    <section className="section3">
      <h2>Our popular menu</h2>

      <div className="section3__cats">
        <button className="active">All category</button>
        <button>Dinner</button>
        <button>Lunch</button>
        <button>Dessert</button>
        <button>Drink</button>
      </div>

      <div className="section3__grid">
        <div className="section3__card">
          <img src={food1} alt="" className="section3__dish" />
          <h3>Spaghetti</h3>
          <img src={stars} alt="" className="section3__stars" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
          <div className="section3__bottom">
            <span>$12.05</span>
            <button>Order now</button>
          </div>
        </div>

        <div className="section3__card">
          <img src={food2} alt="" className="section3__dish" />
          <h3>Gnocchi</h3>
          <img src={stars} alt="" className="section3__stars" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
          <div className="section3__bottom">
            <span>$12.05</span>
            <button>Order now</button>
          </div>
        </div>

        <div className="section3__card">
          <img src={food3} alt="" className="section3__dish" />
          <h3>Rovioli</h3>
          <img src={stars} alt="" className="section3__stars" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
          <div className="section3__bottom">
            <span>$12.05</span>
            <button>Order now</button>
          </div>
        </div>

        <div className="section3__card">
          <img src={food4} alt="" className="section3__dish" />
          <h3>Penne Alla Vodak</h3>
          <img src={stars} alt="" className="section3__stars" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
          <div className="section3__bottom">
            <span>$12.05</span>
            <button>Order now</button>
          </div>
        </div>

        <div className="section3__card">
          <img src={food5} alt="" className="section3__dish" />
          <h3>Risoto</h3>
          <img src={stars} alt="" className="section3__stars" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
          <div className="section3__bottom">
            <span>$12.05</span>
            <button>Order now</button>
          </div>
        </div>

        <div className="section3__card">
          <img src={food6} alt="" className="section3__dish" />
          <h3>Splitza Signature</h3>
          <img src={stars} alt="" className="section3__stars" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p>
          <div className="section3__bottom">
            <span>$12.05</span>
            <button>Order now</button>
          </div>
        </div>
      </div>

      <div className="section3__pagination">
        <button>‹</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>›</button>
      </div>
    </section>
  );
}