import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ContactBar from "@/components/ContactBar";
import About from "@/components/About";
import ContactComponent from "@/components/ContactComponent";
import ContactForm from "@/components/modals/ContactForm";
import Home1 from "@/components/Home";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Home1 />
      <Services />
      <ContactBar />
      <About />
      <ContactComponent />
      <Footer />
    </div>
  );
}
