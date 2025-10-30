import Home from './pages/Home';
import WhoOurUsers from './pages/WhoOurUsers';
import { Routes, Route } from 'react-router';

function App() {
    return (
        <div className="flex flex-col w-full overflow-hidden h-fit bg-linear-150 from-[#080708] to-[#001845]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<WhoOurUsers />} />
            </Routes>
        </div>
    );
}

export default App;
