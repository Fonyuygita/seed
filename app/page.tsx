
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import AboutSection from "@/components/about-us";
import Footer from "@/components/footer-stick";
import Quiz from "@/components/quiz";
import ServicesSection from "@/components/service";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Camp />
      <Guide />
      <Features /> */}

      <AboutSection/>
      <TeamSection/>
      <ServicesSection/>
      
      {/* <GetApp /> */}
      <Footer/>

    </>
  )
}
