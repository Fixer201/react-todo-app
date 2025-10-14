import FeaturesSection from '../sections/FeaturesSection';
import UseCaseSection from '../sections/UseCaseSection';
import ReviewSection from '../sections/ReviewSection';
import PricingSection from '../sections/PricingSection';
import FAQSection from '../sections/FAQSection';

const Main = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <FeaturesSection />
      <UseCaseSection />
      <ReviewSection />
      <PricingSection />
      <FAQSection />
      {/* CallToActionSection */}
    </div>
  );
};

export default Main;
