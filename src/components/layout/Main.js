import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FeaturesSection from '../sections/FeaturesSection';
import UseCaseSection from '../sections/UseCaseSection';
import ReviewSection from '../sections/ReviewSection';
import PricingSection from '../sections/PricingSection';
import FAQSection from '../sections/FAQSection';
import CallToActionSection from '../sections/CallToActionSection';
const Main = () => {
    return (_jsxs("div", { className: "flex flex-col gap-12 justify-center items-center", children: [_jsx(FeaturesSection, {}), _jsx(UseCaseSection, {}), _jsx(ReviewSection, {}), _jsx(PricingSection, {}), _jsx(FAQSection, {}), _jsx(CallToActionSection, {})] }));
};
export default Main;
