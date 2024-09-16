import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SubscriptionSection from "./components/SubscriptionSection";
import Services from "./components/Services";
import Destinations from "./components/Destinations";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <SubscriptionSection />
      <Footer />
    </>
  );
}

export default App;
