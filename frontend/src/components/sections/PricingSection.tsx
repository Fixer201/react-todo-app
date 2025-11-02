import PricingCard from '../elements/cards/PricingCard';
import { motion } from 'motion/react';
import {
    sectionSlideFromTop,
    sectionSlideFromBottom,
    scaleFadeIn,
} from '../../animations/motionVariants';

interface PricingPlanData {
    id: number;
    planName: string;
    imagePath?: string;
    price: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
}

const pricingPlansData: PricingPlanData[] = [
    {
        id: 1,
        planName: 'Basic',
        imagePath: '/pricing-plans/free-plan.svg',
        price: '$0/month',
        features: [
            'Task Management',
            'Basic Collaboration',
            'Limited Integrations',
            'Community Support',
        ],
        ctaText: 'Get Started',
        ctaLink: '#',
    },
    {
        id: 2,
        planName: 'Pro',
        price: '$2/month',
        imagePath: '/pricing-plans/pro-plan.svg',
        features: [
            'All Basic Features',
            'Advanced Collaboration',
            'Priority Support',
            'Unlimited Integrations',
            'Customizable Workflows',
        ],
        ctaText: 'Start Free Trial',
        ctaLink: '#',
    },
    {
        id: 3,
        planName: 'Enterprise',
        price: 'Contact Us',
        imagePath: '/pricing-plans/enterprise-plan.svg',
        features: [
            'All Pro Features',
            'Dedicated Account Manager',
            'Custom Integrations',
            'Enhanced Security',
            'Onboarding & Training',
        ],
        ctaText: 'Contact Sales',
        ctaLink: '#',
    },
];

const PricingSection = () => {
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
            className="section w-10/12 glow-secondary-on-hover"
        >
            {/* Header */}
            <motion.div
                variants={sectionSlideFromTop}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                }}
            >
                <h2 className="text-3xl lg:text-4xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200">
                    Pricing Section
                </h2>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
                variants={sectionSlideFromBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                    when: 'beforeChildren',
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                }}
                className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full h-full place-items-center gap-y-12 max-xl:gap-6"
            >
                {pricingPlansData.map(
                    ({
                        id,
                        imagePath,
                        planName,
                        price,
                        features,
                        ctaText,
                        ctaLink,
                    }: PricingPlanData) => (
                        <motion.div
                            key={id}
                            variants={scaleFadeIn}
                            className="flex justify-center items-center w-full h-full"
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <PricingCard
                                imagePath={imagePath}
                                planName={planName}
                                price={price}
                                features={features}
                                ctaText={ctaText}
                                ctaLink={ctaLink}
                            />
                        </motion.div>
                    ),
                )}
            </motion.div>
        </motion.section>
    );
};

export default PricingSection;
