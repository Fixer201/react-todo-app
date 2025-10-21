import { motion } from 'motion/react';
import {
    container,
    scaleFadeIn,
    sectionSlideFromTop,
} from '../../animations/motionVariants';
import { Button } from '../elements/buttons';

const Hero = () => {
    return (
        <div className="flex w-3/4 lg:w-1/2 max-w-2xl self-center h-full mb-24 mt-36 rounded-2xl z-10">
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
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-36 md:w-48 h-14"
                    >
                        Get Started
                    </Button>

                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-36 md:w-48 h-14"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
