import { motion } from 'motion/react';
import {
    container,
    scaleFadeIn,
    sectionSlideFromTop,
} from '../../animations/motionVariants';

const Hero = () => {
    return (
        <div className="flex lg:mx-96 h-96 mt-24 rounded-2xl z-10">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col m-auto gap-4 text-center"
            >
                <motion.h1
                    variants={sectionSlideFromTop}
                    transition={{
                        duration: 0.7,
                        ease: 'easeOut',
                    }}
                    className="text-5xl md:text-7xl font-black  text-white glow-text-secondary"
                >
                    Welcome to EasyToDo
                </motion.h1>
                <motion.p
                    variants={sectionSlideFromTop}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                    }}
                    className="text-lg md:text-2xl text-white glow-text-secondary"
                >
                    Your ultimate task management solution
                </motion.p>
                <motion.div
                    variants={scaleFadeIn}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                    }}
                    className="flex justify-center gap-8 mt-6"
                >
                    <button className="primary-button text-lg font-bold w-36 md:w-48 h-14">
                        Get Started
                    </button>

                    <button
                        className="secondary-button font-bold
               text-lg  w-36 md:w-48 h-14"
                    >
                        Learn More
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
