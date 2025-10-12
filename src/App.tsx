import './App.css';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import StarryBackground from './components/StarryBackground.tsx';
import Hero from './components/layout/Hero.tsx';
import Main from './components/layout/Main.tsx';

function App() {
  return (
    // from-[#10002b]  to-[#240046]
    <div className="flex flex-col w-full h-fit bg-linear-150 from-[#080708] to-[#001845]">
      <StarryBackground></StarryBackground>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
