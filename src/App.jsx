import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="bg-fixed bg-cover bg-center bg-img inset-0">
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto ">
          <Navbar />
          <Hero />
          <Project />
          <Bio />
          <Skills />
          <WorkExperience />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
