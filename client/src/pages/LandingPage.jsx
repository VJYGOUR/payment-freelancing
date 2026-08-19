import BeforeAfterSection from "../components/BeforeAfterSection";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import IndustriesSection from "../components/IndustriesSection";
import Navbar from "../components/Navbar";
import ProblemSection from "../components/ProblemSection";
import ProcessSection from "../components/ProcessSection";
import SolutionsSection from "../components/SolutionsSection";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import WorkflowSection from "../components/WorkflowSection";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <main>
        <Hero />

        <ProblemSection />

        <SolutionsSection />

        <IndustriesSection />

        <WorkflowSection />

        <BeforeAfterSection />

        <ProcessSection />

        <FAQSection />
        <WhatsAppFloatingButton />
        <FinalCTA />
      </main>
    </div>
  );
}
export default LandingPage;
