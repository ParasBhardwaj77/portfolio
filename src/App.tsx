import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Hero } from "./sections/Hero";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Navigation } from "./components/Navigation";
import { StarBackground } from "./components/StarBackground";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <Navigation />
      <StarBackground />
      <main
        className={`transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
