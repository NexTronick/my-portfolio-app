import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Icons from "./components/Icons";
import Projects from "./components/Projects";
import Seperator from "./components/Seperator";

export default function Home() {
  return (
    <main className="relative">
      <Icons />
      <About />
      <Seperator id="experience" text="Experience" />
      <Experience />
      <Seperator id="education" text="Education" />
      <Education />
      <Seperator id="projects" text="Projects" />
      <Projects />
    </main>
  );
}
