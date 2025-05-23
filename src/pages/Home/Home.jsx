import './Home.css'
import logo from "/assets/koti-wood-works-logo.png"

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Koti Wood Works Logo" />
      <h1>Koti Wood Works</h1>
      <p>Expert wooden craftsmanship tailored for elegant homes and professional office spaces.</p>
      <a href="#contact" className="cta">Contact Us</a>
    </div>
  )
}

export default Home
