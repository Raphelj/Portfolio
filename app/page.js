import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full">
      <ScrollyCanvas />
      <Overlay />

      {/* 
        Projects rising up at the end. 
        Adjust negative margin if we want overlap, 
        or just let it flow after the 500vh overlay container.
      */}
      <div className="relative z-20 bg-black/80 backdrop-blur-md border-t border-white/10">
        <Projects />
        <TechStack />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
