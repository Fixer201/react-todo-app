import Home from './pages/Home';
import WhoOurUsers from './pages/WhoOurUsers';
import { Routes, Route } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/auth/AuthModal';
import React from 'react';

function App() {
    return (
        <div className="flex flex-col w-full overflow-hidden h-fit bg-linear-150 from-[#080708] to-[#001845]">
            <AuthProvider>
                <AuthModal />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/whoOurUsers" element={<WhoOurUsers />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
