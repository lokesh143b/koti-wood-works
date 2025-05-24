import './Home.css';
import logo from "/assets/koti-wood-works-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home" id="home" data-aos="fade-up">
      <img src={logo} alt="Koti Wood Works Logo" data-aos="zoom-in" data-aos-delay="200" />
      <h1 data-aos="fade-up" data-aos-delay="400">Koti Wood Works</h1>
      <p data-aos="fade-up" data-aos-delay="600">
        Expert wooden craftsmanship tailored for elegant homes and professional office spaces.
      </p>
      <div className="cta-container">
        <a href="#contact" className="cta" data-aos="fade-up" data-aos-delay="800">Contact Us</a>
        <a href="/gallery" className="cta secondary" data-aos="fade-up" data-aos-delay="900">Our Gallery</a>
      </div>
    </div>
  );
}

export default Home;
