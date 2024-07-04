import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Resume from "./containers/resume/resume";
import Skills from "./containers/skills/skills";
import Portfolio from "./containers/portfolio/portfolio";
import Contact from "./containers/contact/contact";
import Navbar from "./components/navBar/nav";
import particles from "./utils.js/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )} */}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
