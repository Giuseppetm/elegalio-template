import Hero from "./Views/Hero";
import About from "./Views/About";
import Details from "./Views/Details";
import Contact from "./Views/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Details />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;