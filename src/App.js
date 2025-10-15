import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import Main from './components/layout/Main';
function App() {
    return (_jsxs("div", { className: "flex flex-col w-full h-fit bg-linear-150 from-[#080708] to-[#001845]", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Main, {}), _jsx(Footer, {})] }));
}
export default App;
