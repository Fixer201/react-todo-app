import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SocialProofFooter from '../elements/SocialProofFooter';
import CheckmarkIcon from '../elements/icons/CheckmarkIcon';
const SocialProofData = {
    avatars: [
        '/reviews/man-placeholder.svg',
        '/reviews/woman-placeholder.svg',
        '/reviews/man-placeholder.svg',
        '/reviews/woman-placeholder.svg',
    ],
    userCount: '2,847+',
    timeframe: 'this week',
    rating: '4.9',
    reviewCount: '1,200+',
};
const valuePropsData = [
    { id: 1, text: 'free trial', highlight: '14-day' },
    { id: 2, text: 'No credit card required' },
    { id: 3, text: 'Setup in ', highlight: '5 minutes' },
    { id: 4, text: 'Cancel anytime' },
];
const CallToActionSection = () => {
    return (_jsxs("section", { className: "section glow-secondary-on-hover", children: [_jsxs("div", { className: "flex flex-col items-center justify-center text-center space-y-4 mb-8", children: [_jsxs("h2", { className: "text-3xl lg:text-4xl w-fit font-black relative section-title-underline text-white text-center glow-icon-secondary transition duration-200", children: ["Ready to ", _jsx("span", { className: "text-gradient", children: "3x Your Productivity?" })] }), _jsx("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: "Join thousands of teams who transformed their workflow with EasyToDo" })] }), _jsx("div", { className: "flex flex-col lg:flex-row justify-center items-center gap-6 mb-8", children: valuePropsData.map(({ id, text, highlight }) => (_jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [_jsx(CheckmarkIcon, { variant: "simple" }), _jsxs("span", { children: [highlight && _jsx("strong", { className: "text-white", children: highlight }), text] })] }, id))) }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-4 mb-6", children: [_jsx("a", { href: "#", className: "cta-button w-full sm:w-64 h-14 text-lg glow-secondary-on-hover transition duration-300", children: "Start Free Trial \u2192" }), _jsx("a", { href: "#", className: "secondary-button w-full sm:w-64 h-14 text-lg", children: "View Pricing" })] }), _jsx(SocialProofFooter, { avatars: SocialProofData.avatars, userCount: SocialProofData.userCount, timeframe: SocialProofData.timeframe, rating: SocialProofData.rating, reviewCount: SocialProofData.reviewCount })] }));
};
export default CallToActionSection;
