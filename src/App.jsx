import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound"
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </>
          }
        />

        <Route path="/gallery" element={<Gallery/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
