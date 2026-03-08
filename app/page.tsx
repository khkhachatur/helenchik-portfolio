
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import ScrollToTop from "./Components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next"



export default function Home() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Works />
      <Gallery />
      <Info />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}
