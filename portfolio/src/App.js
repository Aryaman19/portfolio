import Navbar from "./components/Navbar/Navbar";
import CircularNavigationDrawer from "./components/CircularNavigationDrawer/CircularNavigationDrawer";

import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skill from "./sections/Skill/Skill";
import Contact from "./sections/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CircularNavigationDrawer />
      <Home />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
