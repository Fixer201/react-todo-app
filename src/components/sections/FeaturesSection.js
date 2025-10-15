import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FeatureCard from '../elements/cards/FeatureCard';
const featuresData = [
    {
        id: 1,
        imagePath: '/features/collaboration-feature.svg',
        title: 'User-Friendly Interface',
        description: 'Intuitive design that makes task management a breeze for everyone.',
    },
    {
        id: 2,
        imagePath: '/features/integration-feature.svg',
        title: 'Seamless Collaboration',
        description: 'Work together with your team in real-time, no matter where you are.',
    },
    {
        id: 3,
        imagePath: '/features/user-friendly-ui-feature.svg',
        title: 'Powerful Integrations',
        description: 'Connect with your favorite tools and streamline your workflow.',
    },
];
const FeaturesSection = () => {
    return (_jsxs("section", { className: "section glow-secondary-on-hover", children: [_jsx("h2", { className: "text-3xl lg:text-4xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200", children: "Why Choose EasyToDo?" }), _jsx("div", { className: "grid group grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8", children: featuresData.map(({ id, imagePath, title, description }) => (_jsx(FeatureCard, { imagePath: imagePath, title: title, description: description }, id))) })] }));
};
export default FeaturesSection;
