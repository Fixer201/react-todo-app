import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UseCaseCard from '../elements/cards/useCaseCard';
// Data for use cases in future can be fetched from an API or database on need basis
const casesData = [
    {
        id: 1,
        imagePath: '/use-cases/overwhelmed-by-tasks-problem.svg',
        headerText: 'Overwhelmed by Tasks?',
        descriptionText: 'EasyToDo helps you organize and prioritize your tasks, making it easier to manage your workload and reduce stress.',
    },
    {
        id: 2,
        imagePath: '/use-cases/difficulty-in-collaboration-problem.svg',
        headerText: 'Difficulty in Collaboration?',
        descriptionText: 'With EasyToDo, you can easily share tasks and projects with your team, enhancing communication and teamwork.',
    },
    {
        id: 3,
        imagePath: '/use-cases/lack-of-motivation-problem.svg',
        headerText: 'Lack of Motivation?',
        descriptionText: 'EasyToDo provides reminders and progress tracking to keep you motivated and on track to achieve your goals.',
    },
];
const UseCaseSection = () => {
    return (_jsxs("section", { className: "section glow-secondary-on-hover", children: [_jsx("h2", { className: "text-3xl lg:text-4xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200", children: "EasyToDo Solves Your Pain Points" }), _jsx("div", { className: "flex flex-col gap-12", children: casesData.map(({ id, imagePath, headerText, descriptionText }) => (_jsx(UseCaseCard, { id: id, imagePath: imagePath, altText: headerText, headerText: headerText, descriptionText: descriptionText }, id))) })] }));
};
export default UseCaseSection;
