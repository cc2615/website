import CustomNavbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/howItWorks";
import Features from "@/components/home/features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <div className="bg-[#191919] w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 pt-20">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="contact">
          <CTA />
        </div>
        <Footer />
      </div>
    </>
  );
}