import Navbar from "@/components/main/navbar";
import HeroSection from "@/components/main/hero";
import SkillsSection from "@/components/main/skills";
import ProjectsSection from "@/components/main/projects";
import ExperienceSection from "@/components/main/experience";
import ContactSection from "@/components/main/contact";
import Footer from "@/components/main/footer";
import StructuredData from "@/components/seo/structured-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <StructuredData />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
