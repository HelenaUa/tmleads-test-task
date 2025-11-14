// import { useState } from 'react'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Deals from "./components/Deals/Deals";
import About from "./components/About/About";
import Tariffs from "./components/Tariffs/Tariffs";
import Question from "./components/Question/Question";
import Footer from "./components/Footer/Footer";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Deals />
      <About />
      <Tariffs />
      <Question />
      <Footer />
    </div>
  )
}

export default App
