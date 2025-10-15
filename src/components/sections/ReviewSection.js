import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReviewCard from '../elements/cards/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const reviewsData = [
    {
        id: 1,
        avatar: '/reviews/man-placeholder.svg',
        name: 'John Doe',
        role: 'Product Manager at Company Inc.',
        text: 'EasyToDo transformed how our team organizes tasks. Highly recommend!',
    },
    {
        id: 2,
        avatar: '/reviews/woman-placeholder.svg',
        name: 'Sarah Lee',
        role: 'Team Lead at BrightWorks',
        text: 'Intuitive, fast, and beautifully designed. My team’s productivity skyrocketed within a week!',
    },
    {
        id: 3,
        avatar: '/reviews/man-placeholder.svg',
        name: 'Michael Chen',
        role: 'Freelance Designer',
        text: 'I finally have a tool that doesn’t get in my way. EasyToDo keeps me focused and organized effortlessly.',
    },
    {
        id: 4,
        avatar: '/reviews/woman-placeholder.svg',
        name: 'Anna Petrova',
        role: 'Operations Director at BestTech Company',
        text: 'The collaboration features are brilliant — managing multiple projects has never been this smooth.',
    },
    {
        id: 5,
        avatar: '/reviews/man-placeholder.svg',
        name: 'David Kim',
        role: 'Software Engineer at DevSolutions',
        text: 'A game-changer for my workflow. The seamless integration with other tools is a huge plus!',
    },
    {
        id: 6,
        avatar: '/reviews/woman-placeholder.svg',
        name: 'Emily Johnson',
        role: 'Marketing Specialist at Creative Minds',
        text: 'EasyToDo is my go-to app for task management. It’s simple yet powerful!',
    },
];
const ReviewSection = () => {
    return (_jsxs("section", { className: "section glow-secondary-on-hover", children: [_jsx("h2", { className: "text-3xl lg:text-4xl w-fit font-black relative section-title-underline text-white text-center glow-icon-secondary transition duration-200", children: "What Our Users Say" }), _jsx("div", { className: "w-full lg:px-8", children: _jsx(Swiper, { modules: [Pagination, Autoplay], pagination: { clickable: true }, autoplay: { delay: 4000, disableOnInteraction: false }, loop: true, slidesPerView: 1, breakpoints: {
                        1000: { slidesPerView: 2, spaceBetween: 25 },
                        1800: { slidesPerView: 3, spaceBetween: 30 },
                        2200: { slidesPerView: 4, spaceBetween: 30 },
                    }, spaceBetween: 20, children: reviewsData.map(({ id, avatar, name, role, text }) => (_jsx(SwiperSlide, { className: "mb-4 px-5", children: _jsx(ReviewCard, { imagePath: avatar, altText: name, name: name, role: role, text: text }) }, id))) }) })] }));
};
export default ReviewSection;
