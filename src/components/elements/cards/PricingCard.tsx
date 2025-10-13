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
      {/* Svg style */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient
            id="checkmark-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: '#0466c8', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#8b5cf6', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>

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
          <li key={index} className="flex items-start gap-3 text-white">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" viewBox="0 0 20 20">
              <path
                fill="url(#checkmark-gradient)"
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-md leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      {/* CTA Button */}
      <a href={ctaLink} className="cta-button text-lg mt-auto mb-6">
        {ctaText}
      </a>
    </article>
  );
};

export default PricingCard;
