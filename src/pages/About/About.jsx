import './About.css';
import logo from "../../assets/koti-wood-works-logo.png";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={logo} alt="Koti Wood Works Logo" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Koti Wood Works is a trusted name in wooden craftsmanship for over 25 years.
            We specialize in bespoke wooden furniture, elegant interiors, and modular fittings
            that combine durability with timeless design.
            <br /><br />
            Our mission is to craft wood into art — blending tradition with modern
            innovation to enrich homes and commercial spaces with warmth and style.
            <br /><br />
            We pride ourselves on integrity, attention to detail, and client satisfaction.
            Whether it’s a rustic coffee table or a complete modular kitchen, we bring passion
            and precision to every piece.
          </p>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default About;
