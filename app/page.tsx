import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Formation from "@/components/Formation";
import Curriculum from "@/components/Curriculum";
import Founder from "@/components/Founder";
import CTAIngresso from "@/components/CTAIngresso";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-bg-main)", minHeight: "100vh", overflowX: "hidden", paddingTop: 0 }}>
      <SmoothScroll />
<Navbar />
      <Hero />
      <Solutions />
      <About />
      <HowItWorks />
      <Formation />
      <Curriculum />
      <Founder />
      <CTAIngresso />
      <FAQ />
      <Footer />
    </main>
  );
}
