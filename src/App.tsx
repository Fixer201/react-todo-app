import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import Main from './components/layout/Main';

function App() {
  return (
    <div className="flex flex-col w-full h-fit bg-linear-150 from-[#080708] to-[#001845]">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
