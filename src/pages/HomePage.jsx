// src/pages/HomePage.jsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MissionsSection from '../components/MissonsSection';
import ProgrammesSection from '../components/ProgrammesSection';
import ParcoursSection from '../components/ParcoursSection';
import ValeursSection from '../components/ValeursSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MissionsSection />
      <ProgrammesSection />
      <ParcoursSection />
      <ValeursSection />
      <ContactSection />
      <Footer />
    </>
  );
}
