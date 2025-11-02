import FeatureCard from '../elements/cards/FeatureCard';
import { motion } from 'motion/react';
import {
    linkItem,
    sectionSlideFromBottom,
    sectionSlideFromTop,
} from '../../animations/motionVariants';

interface FeatureData {
    id: number;
    imagePath: string;
    title: string;
    description: string;
}

const featuresData: FeatureData[] = [
    {
        id: 1,
        imagePath: '/features/collaboration-feature.svg',
        title: 'User-Friendly Interface',
        description:
            'Intuitive design that makes task management a breeze for everyone.',
    },
    {
        id: 2,
        imagePath: '/features/integration-feature.svg',
        title: 'Seamless Collaboration',
        description:
            'Work together with your team in real-time, no matter where you are.',
    },
    {
        id: 3,
        imagePath: '/features/user-friendly-ui-feature.svg',
        title: 'Powerful Integrations',
        description:
            'Connect with your favorite tools and streamline your workflow.',
    },
];

const FeaturesSection = () => {
    return (
        <motion.section
            variants={sectionSlideFromBottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
                when: 'beforeChildren',
                duration: 0.7,
                ease: 'easeOut',
            }}
            className="section glow-secondary-on-hover"
        >
            {/* Header */}
            <motion.div // без контейнера анимация становится дёрганной
                variants={sectionSlideFromTop}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                }}
            >
                <h2 className="text-3xl lg:text-4xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200">
                    Why Choose EasyToDo?
                </h2>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                variants={sectionSlideFromBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                    when: 'beforeChildren',
                    staggerChildren: 0.3,
                    delayChildren: 0.3,
                }}
                className="grid group grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8"
            >
                {featuresData.map(
                    ({ id, imagePath, title, description }: FeatureData) => (
                        <motion.div
                            key={id}
                            variants={linkItem}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <FeatureCard
                                imagePath={imagePath}
                                title={title}
                                description={description}
                            />
                        </motion.div>
                    ),
                )}
            </motion.div>
        </motion.section>
    );
};

export default FeaturesSection;
