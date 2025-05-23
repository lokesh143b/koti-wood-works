import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "c7bc175d-ed97-4509-9eaf-109225fec190");

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
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">We'd love to hear from you!</p>

      <form onSubmit={onSubmit} className="contact-form">
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input type="email" name="email" placeholder="Enter your email" required />

        <label>Your Message</label>
        <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit now'}
        </button>
      </form>
    </section>
  );
}

export default Contact;
