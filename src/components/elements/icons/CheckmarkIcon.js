import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const CheckmarkIcon = ({ variant = 'simple', className = '', }) => {
    if (variant === 'simple') {
        return _jsx("span", { className: `text-secondary text-xl ${className}`, children: "\u2713" });
    }
    return (_jsxs(_Fragment, { children: [_jsx("svg", { width: "0", height: "0", style: { position: 'absolute' }, children: _jsx("defs", { children: _jsxs("linearGradient", { id: "checkmark-gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", style: { stopColor: '#0466c8', stopOpacity: 1 } }), _jsx("stop", { offset: "100%", style: { stopColor: '#8b5cf6', stopOpacity: 1 } })] }) }) }), _jsx("svg", { className: `w-5 h-5 flex-shrink-0 ${className}`, viewBox: "0 0 20 20", children: _jsx("path", { fill: "url(#checkmark-gradient)", fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) })] }));
};
export default CheckmarkIcon;
