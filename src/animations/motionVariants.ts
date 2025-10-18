export const headerSlide = {
    hidden: { y: -100 },
    show: {
        y: 0,
    },
};

export const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    },
};

export const section = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const linkItem = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};
