import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const FaqAccordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("article", { className: "border-b border-secondary", children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "w-full flex items-center justify-between gap-4 py-4 text-left transition-colors hover:text-gray-300", children: [_jsx("h3", { className: "text-xl lg:text-2xl font-bold text-white glow-icon-secondary-on-hover transition-all duration-300", children: question }), _jsx(ChevronDown, { className: `flex-shrink-0 w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}` })] }), _jsx("div", { className: `grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`, children: _jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: "text-white text-lg pb-4", children: answer }) }) })] }));
};
export default FaqAccordion;
