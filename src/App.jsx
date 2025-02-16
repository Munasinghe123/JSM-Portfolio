
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App=()=>{
  return(
    <>
      <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
        <div className="bg-image fixed inset-0 bg-cover bg-center"></div>
        <div className="relative z-10">
          <Navbar/>
          <HeroSection/>
        </div>
      </main>
    </>
  )
}

export default App;