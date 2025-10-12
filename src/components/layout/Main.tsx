import React from 'react';
import AchievementSection from '../sections/AchievementSection.tsx';
import UseCaseSection from '../sections/UseCaseSection.tsx';
import ReviewSection from '../sections/ReviewSection.tsx';
import PricingSection from '../sections/PricingSection.tsx';

const Main = () => {
  return (
    <div className="flex flex-col gap-12">
      <AchievementSection />
      <UseCaseSection />
      <ReviewSection />
      <PricingSection />
      {/* FAQSection */}
      {/* CallToActionSection */}
    </div>
  );
};

export default Main;
