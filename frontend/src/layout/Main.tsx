import FeaturesSection from '../components/sections/FeaturesSection';
import UseCaseSection from '../components/sections/UseCaseSection';
import ReviewSection from '../components/sections/ReviewSection';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';
import CallToActionSection from '../components/sections/CallToActionSection';

const Main = () => {
    return (
        <div className="flex flex-col gap-12 justify-center items-center">
            <FeaturesSection />
            <UseCaseSection />
            <ReviewSection />
            <PricingSection />
            <FAQSection />
            <CallToActionSection />
        </div>
    );
};

export default Main;
