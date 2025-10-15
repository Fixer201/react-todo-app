import SocialProofFooter from '../elements/SocialProofFooter';
import CheckmarkIcon from '../elements/icons/CheckmarkIcon';

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
    <section className="section glow-secondary-on-hover">
      {/*Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
        <h2 className="text-3xl lg:text-4xl w-fit font-black relative section-title-underline text-white text-center glow-icon-secondary transition duration-200">
          Ready to <span className="text-gradient">3x Your Productivity?</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join thousands of teams who transformed their workflow with EasyToDo
        </p>
      </div>

      {/* Value Props */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8">
        {valuePropsData.map(({ id, text, highlight }) => (
          <div key={id} className="flex items-center gap-2 text-gray-300">
            <CheckmarkIcon variant="simple" />
            <span>
              {highlight && <strong className="text-white">{highlight}</strong>}
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <a
          href="#"
          className="cta-button w-full sm:w-64 h-14 text-lg glow-secondary-on-hover transition duration-300"
        >
          Start Free Trial →
        </a>
        <a href="#" className="secondary-button w-full sm:w-64 h-14 text-lg">
          View Pricing
        </a>
      </div>

      <SocialProofFooter
        avatars={SocialProofData.avatars}
        userCount={SocialProofData.userCount}
        timeframe={SocialProofData.timeframe}
        rating={SocialProofData.rating}
        reviewCount={SocialProofData.reviewCount}
      />
    </section>
  );
};

export default CallToActionSection;
