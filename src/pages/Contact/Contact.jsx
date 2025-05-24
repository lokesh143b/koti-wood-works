import './Contact.css';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "168bd55d-5f56-4c3a-b20a-842f6229b526");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      alert("Email sent successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Error sending email.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 data-aos="fade-up">Contact Us</h2>
      <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="150">
        We'd love to hear from you!
      </p>

      <form onSubmit={onSubmit} className="contact-form" data-aos="fade-up" data-aos-delay="300">
        <label data-aos="fade-right" data-aos-delay="400">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          data-aos="fade-left"
          data-aos-delay="450"
        />

        <label data-aos="fade-right" data-aos-delay="500">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          data-aos="fade-left"
          data-aos-delay="550"
        />

        <label data-aos="fade-right" data-aos-delay="600">Your Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          data-aos="fade-left"
          data-aos-delay="650"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          {loading ? 'Sending...' : 'Submit now'}
        </button>
      </form>
    </section>
  );
}

export default Contact;
