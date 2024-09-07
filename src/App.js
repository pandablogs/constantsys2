import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import Careears from "./Careears";
import Contact from "./contact/Contact";
import { useEffect, useState } from "react";

function App() {

  const [scrollHeight,setScroll] = useState();
  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on component unmount
    };
  }, []);
  const onTop = () => {
    let ele = document.getElementById("rocketmeluncur");
    if (ele != null) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      ele.classList.add("launchRocket");
      setTimeout(() => {
        ele.classList.remove("launchRocket");
      }, 2000);
    }
  };
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<Careears />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        {scrollHeight > 20 && (
          <div>
            <div className="e-top cursor-pointer" style={{ bottom: "30px" }}>
              <a
                type="button"
                onClick={() => onTop()}
                id="rocketmeluncur"
                className="showrocket"
                style={{ display: "inline-block" }}
              ></a>
            </div>
          </div>
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
