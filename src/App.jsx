import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Billing from "./components/Billing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column vh-100 no-scrollbars">
      <Navbar  />
      <main className="flex-grow-1 px-2 no-scrollbars">
        <Hero />
        <Services />
        <Pricing />
        <Billing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
