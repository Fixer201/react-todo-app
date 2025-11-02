import SocialProofFooter from '../elements/SocialProofFooter';
import CheckmarkIcon from '../elements/icons/CheckmarkIcon';
import { Button } from '../elements/buttons';
import { motion } from 'motion/react';
import {
    sectionSlideFromTop,
    sectionSlideFromBottom,
    scaleFadeIn,
    linkItem,
} from '../../animations/motionVariants';

const SocialProofData = {
    avatars: [
        '/reviews/man-placeholder.svg',
        '/reviews/woman-placeholder.svg',
        '/reviews/man-placeholder.svg',
        '/reviews/woman-placeholder.svg',
    ],
    userCount: '2,847+',
    timeframe: 'this week',
    rating: '4.9',
    reviewCount: '1,200+',
};

const valuePropsData = [
    { id: 1, text: 'free trial', highlight: '14-day' },
    { id: 2, text: 'No credit card required' },
    { id: 3, text: 'Setup in ', highlight: '5 minutes' },
    { id: 4, text: 'Cancel anytime' },
];

const CallToActionSection = () => {
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
            <motion.div
                variants={sectionSlideFromTop}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                }}
                className="flex flex-col items-center justify-center text-center space-y-4 mb-8"
            >
                <h2 className="text-3xl lg:text-4xl w-fit font-black relative section-title-underline text-white text-center glow-icon-secondary transition duration-200">
                    Ready to{' '}
                    <span className="text-gradient">3x Your Productivity?</span>
                </h2>
                <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
                    Join thousands of teams who transformed their workflow with
                    EasyToDo
                </p>
            </motion.div>

            {/* Value Props */}
            <motion.div
                variants={sectionSlideFromBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                    when: 'beforeChildren',
                    staggerChildren: 0.15,
                    delayChildren: 0.3,
                }}
                className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8"
            >
                {valuePropsData.map(({ id, text, highlight }) => (
                    <motion.div
                        key={id}
                        variants={linkItem}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex items-center gap-2 text-gray-300"
                    >
                        <CheckmarkIcon variant="simple" />
                        <span>
                            {highlight && (
                                <strong className="text-white mr-1">
                                    {highlight}
                                </strong>
                            )}
                            {text}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                variants={scaleFadeIn}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.5,
                }}
                className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mb-6"
            >
                <Button
                    variant="cta"
                    size="lg"
                    href="#"
                    allowWrap={true}
                    className="w-full sm:w-64 min-h-14 glow-secondary-on-hover"
                >
                    Start Free Trial →
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    href="#"
                    allowWrap={true}
                    className="w-full sm:w-64 min-h-14"
                >
                    View Pricing
                </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
                variants={sectionSlideFromBottom}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.7,
                }}
            >
                <SocialProofFooter
                    avatars={SocialProofData.avatars}
                    userCount={SocialProofData.userCount}
                    timeframe={SocialProofData.timeframe}
                    rating={SocialProofData.rating}
                    reviewCount={SocialProofData.reviewCount}
                />
            </motion.div>
        </motion.section>
    );
};

export default CallToActionSection;
