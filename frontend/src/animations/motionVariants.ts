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

// ==========================================
// Modal & Overlay Animations
// ==========================================

/**
 * Fade overlay for modals and dropdowns
 * Usage: <motion.div variants={fadeOverlay} initial="hidden" animate="visible" exit="hidden" />
 */
export const fadeOverlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

/**
 * Modal popup animation with scale and slide
 * Usage: <motion.div variants={modalPopup} initial="hidden" animate="visible" exit="hidden" />
 */
export const modalPopup = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

/**
 * Slide-in menu from right (100%)
 * Usage: <motion.div variants={slideMenuFromRight} initial="hidden" animate="visible" exit="hidden" />
 */
export const slideMenuFromRight = {
    hidden: { x: '100%' },
    visible: { x: 0 },
};

/**
 * Slide-in menu from left (100%)
 * Usage: <motion.div variants={slideMenuFromLeft} initial="hidden" animate="visible" exit="hidden" />
 */
export const slideMenuFromLeft = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
};

// ==========================================
// Small Element Animations
// ==========================================

/**
 * Scale X animation for dividers
 * Usage: <motion.div variants={scaleXIn} initial="hidden" animate="visible" />
 */
export const scaleXIn = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
};

/**
 * Small slide down with fade
 * Usage: <motion.div variants={smallSlideDown} initial="hidden" animate="visible" />
 */
export const smallSlideDown = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};
