import CheckmarkIcon from '../icons/CheckmarkIcon';
import { Button } from '../buttons';

interface PricingCardProps {
    planName: string;
    imagePath?: string;
    price: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
}

const PricingCard = ({
    planName,
    imagePath,
    price,
    features,
    ctaText,
    ctaLink,
}: PricingCardProps) => {
    return (
        <article
            className="flex flex-col items-center w-full lg:w-10/12 h-full bg-primary border border-secondary rounded-2xl
      glow-secondary-on-hover transition-[scale, shadow] duration-300 z-100"
        >
            {/* Image */}
            <div className="flex w-full justify-center rounded-t-2xl border-b border-secondary">
                <img
                    src={imagePath}
                    alt={planName}
                    loading="lazy"
                    className="w-64 h-64 object-contain hover:scale-110
          glow-icon-secondary-on-hover transition-[scale,shadow] duration-300"
                />
            </div>

            {/* Plan Name */}
            <h3 className="text-2xl font-bold mt-4 text-white">{planName}</h3>

            {/* Price */}
            <p className="text-xl text-secondary mt-2">{price}</p>

            {/* Features */}
            <ul className="flex flex-col gap-3 mt-6 mb-12 px-6 w-full">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-white"
                    >
                        <CheckmarkIcon variant="gradient"></CheckmarkIcon>
                        <span className="text-md leading-relaxed">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            {/* CTA Button */}
            <div className="flex justify-center items-center h-full max-w-10/12">
                <Button
                    variant="cta"
                    size="lg"
                    href={ctaLink}
                    allowWrap={true}
                    className="my-auto mb-6 w-full px-4 py-3"
                >
                    {ctaText}
                </Button>
            </div>
        </article>
    );
};

export default PricingCard;
