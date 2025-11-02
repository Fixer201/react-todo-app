import { motion } from 'motion/react';
import {
    sectionSlideFromTop,
    sectionSlideFromBottom,
    slideFromLeft,
    slideFromRight,
    scaleFadeIn,
} from '../animations/motionVariants';

const Footer = () => {
    return (
        <motion.footer
            variants={sectionSlideFromBottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
                when: 'beforeChildren',
                duration: 0.8,
                ease: 'easeOut',
            }}
            className="w-10/12 max-w-[1500px] self-center mt-12 mb-4 bg-primary border border-secondary glow-secondary rounded-xl h-32 z-10"
        >
            <article className="flex flex-col justify-center items-center h-full gap-4 p-6">
                {/* Main Text */}
                <motion.p
                    variants={sectionSlideFromTop}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="md:text-lg"
                >
                    2025 EasyToDo. Not just another service.
                </motion.p>

                {/* Links */}
                <motion.div
                    variants={sectionSlideFromBottom}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{
                        when: 'beforeChildren',
                        delayChildren: 0.5,
                    }}
                    className="flex gap-8 font-light text-gray-300 text-center"
                >
                    <motion.a
                        variants={slideFromLeft}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        href="#"
                        className="link"
                    >
                        Privacy Policy
                    </motion.a>
                    <motion.a
                        variants={scaleFadeIn}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        href="#"
                        className="link"
                    >
                        Terms of Service
                    </motion.a>
                    <motion.a
                        variants={slideFromRight}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        href="#"
                        className="link"
                    >
                        Contact Us
                    </motion.a>
                </motion.div>
            </article>
        </motion.footer>
    );
};

export default Footer;
