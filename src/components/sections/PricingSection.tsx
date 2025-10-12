import React from 'react';
import PricingCard from '../elements/cards/PricingCard.tsx';

const pricingPlansData = [
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
    <section className="flex flex-col items-center mx-96 border border-secondary rounded-2xl p-12 bg-primary/10 backdrop-blur-xs  z-10 glow-secondary-on-hover transition-shadow duration-300">
      {/* Header */}
      <h2
        className="text-4xl w-fit font-black relative overflow-hidden
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 pb-2 after:bg-white
        after:transition-all after:duration-500 hover:after:w-full text-white text-center glow-icon-secondary transition duration-200"
      >
        Pricing Section
      </h2>
      {/* Pring Cards */}
      <article className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mt-12 w-full h-full place-items-center">
        {pricingPlansData.map((pricingPlan) => (
          <PricingCard
            key={pricingPlan.id}
            id={pricingPlan.id}
            imagePath={pricingPlan.imagePath}
            planName={pricingPlan.planName}
            price={pricingPlan.price}
            features={pricingPlan.features}
            ctaText={pricingPlan.ctaText}
            ctaLink={pricingPlan.ctaLink}
          />
        ))}
      </article>
    </section>
  );
};

export default PricingSection;
