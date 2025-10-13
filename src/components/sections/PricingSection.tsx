import PricingCard from '../elements/cards/PricingCard';

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
    <section className="section w-10/12 glow-secondary-on-hover">
      {/* Header */}
      <h2
        className="text-3xl lg:text-4xl w-fit font-black section-title-underline
       text-white text-center glow-icon-secondary transition duration-200"
      >
        Pricing Section
      </h2>

      {/* Pring Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3
         w-full h-full place-items-center gap-y-12 max-xl:gap-6"
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
            <PricingCard
              key={id}
              imagePath={imagePath}
              planName={planName}
              price={price}
              features={features}
              ctaText={ctaText}
              ctaLink={ctaLink}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default PricingSection;
