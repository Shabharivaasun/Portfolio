import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import CustomCursor from "@/components/portfolio/CustomCursor";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Skills from "@/components/portfolio/Skills";
import CodingProfile from "@/components/portfolio/CodingProfile";
import Contact from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shabharivaasun K R — AI/ML Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shabharivaasun K R — B.E. CSE (AI/ML) student at Sri Eshwar College, building real-time AI systems, geospatial pipelines, and full-stack apps.",
      },
      { property: "og:title", content: "Shabharivaasun K R — AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "AI, data, and design. Real-time crash detection, geospatial satellite pipelines, and intelligent automation.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-white" style={{ background: "#050A18" }}>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Skills />
        <CodingProfile />
        <Contact />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
