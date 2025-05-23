import './Services.css';
import { FaCouch, FaTools, FaWarehouse, FaHammer } from 'react-icons/fa';

function Services() {
  return (
    <section className="services-section">
      <h2>Our Woodwork Services</h2>
      <p className="services-subtitle">
        Bringing craftsmanship and creativity to life in every project.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <FaCouch className="service-icon" />
          <h3>Custom Furniture</h3>
          <p>Handcrafted chairs, beds, tables, and more—designed to your taste and space.</p>
        </div>
        <div className="service-card">
          <FaWarehouse className="service-icon" />
          <h3>Modular Kitchens</h3>
          <p>Elegant and space-efficient kitchen setups with premium finishes and fittings.</p>
        </div>
        <div className="service-card">
          <FaHammer className="service-icon" />
          <h3>Interior Woodwork</h3>
          <p>Wall panels, wardrobes, ceilings—crafted with style, strength, and precision.</p>
        </div>
        <div className="service-card">
          <FaTools className="service-icon" />
          <h3>Restoration & Repair</h3>
          <p>We bring your old furniture back to life with expert care and craftsmanship.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
