import Hero from "./Views/Hero";
import About from "./Views/About";
import Details from "./Views/Details";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Details />
      <Footer />
    </div>
  );
}

export default App;