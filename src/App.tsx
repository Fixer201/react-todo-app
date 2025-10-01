import './App.css';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import StarryBackground from './components/StarryBackground.tsx';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-background">
      <StarryBackground></StarryBackground>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
