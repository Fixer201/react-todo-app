import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FeatureCard = ({ imagePath, title, description }) => {
    return (_jsxs("article", { className: "flex flex-col items-center group-hover:scale-90 hover:scale-110 transition-normal duration-300 text-center p-6 bg-secondary rounded-lg glow-secondary-on-hover", children: [_jsx("img", { src: imagePath, alt: title, loading: "lazy", className: "w-20 h-20 mb-4 hover:scale-110 transition-transform duration-200" }), _jsx("h3", { className: "text-lg md:text-2xl font-bold mb-2 text-white", children: title }), _jsx("p", { className: "text-white text-sm", children: description })] }));
};
export default FeatureCard;
