export const headerSlide = {
    hidden: { y: -50 },
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

export const sectionSlideFromTop = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const sectionSlideFromBottom = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const linkItem = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const scaleFadeIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1 },
};

export const slideFromLeft = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

export const slideFromRight = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
};
