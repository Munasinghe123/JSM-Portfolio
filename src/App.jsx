
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App=()=>{
  return(
    <>
      <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
        <div className="bg-image fixed inset-0 bg-cover bg-center"></div>
        <div className="relative z-10">
          <Navbar/>
          <HeroSection/>
          <Projects/>
          <Skills/>
        </div>
      </main>
    </>
  )
}

export default App;