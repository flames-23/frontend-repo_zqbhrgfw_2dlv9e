import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ScrollStory from './components/ScrollStory'
import TimelineSnap from './components/TimelineSnap'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#031A22] text-white min-h-screen snap-y snap-mandatory overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <ScrollStory />
        <TimelineSnap />
        <Contact />
      </main>
    </div>
  )
}

export default App
