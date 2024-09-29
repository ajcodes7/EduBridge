import Contacts from "@/components/Contacts";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <How />
    <Team />
    <Contacts/>
    <Footer/>
    </>
  );
}
