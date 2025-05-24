import './Services.css';
import { FaCouch, FaTools, FaWarehouse, FaHammer } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 data-aos="fade-up">Our Woodwork Services</h2>
      <p className="services-subtitle" data-aos="fade-up" data-aos-delay="200">
        Bringing craftsmanship and creativity to life in every project.
      </p>
      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <FaCouch className="service-icon" data-aos="zoom-in" data-aos-delay="350" />
          <h3 data-aos="fade-right" data-aos-delay="400">Custom Furniture</h3>
          <p data-aos="fade-left" data-aos-delay="450">
            Handcrafted chairs, beds, tables, and more—designed to your taste and space.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <FaWarehouse className="service-icon" data-aos="zoom-in" data-aos-delay="450" />
          <h3 data-aos="fade-right" data-aos-delay="500">Modular Kitchens</h3>
          <p data-aos="fade-left" data-aos-delay="550">
            Elegant and space-efficient kitchen setups with premium finishes and fittings.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <FaHammer className="service-icon" data-aos="zoom-in" data-aos-delay="550" />
          <h3 data-aos="fade-right" data-aos-delay="600">Interior Woodwork</h3>
          <p data-aos="fade-left" data-aos-delay="650">
            Wall panels, wardrobes, ceilings—crafted with style, strength, and precision.
          </p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="600">
          <FaTools className="service-icon" data-aos="zoom-in" data-aos-delay="650" />
          <h3 data-aos="fade-right" data-aos-delay="700">Restoration & Repair</h3>
          <p data-aos="fade-left" data-aos-delay="750">
            We bring your old furniture back to life with expert care and craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
