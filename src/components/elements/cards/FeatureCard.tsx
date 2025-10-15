interface FeatureCardProps {
  imagePath: string;
  title: string;
  description: string;
}

const FeatureCard = ({ imagePath, title, description }: FeatureCardProps) => {
  return (
    <article className="flex flex-col items-center group-hover:scale-90 hover:scale-110 transition-normal duration-300 text-center p-6 bg-secondary rounded-lg glow-secondary-on-hover">
      {/* Feature Image */}
      <img
        src={imagePath}
        alt={title}
        loading="lazy"
        className="w-20 h-20 mb-4 hover:scale-110 transition-transform duration-200"
      />

      {/* Feature Header */}
      <h3 className="text-lg md:text-2xl font-bold mb-2 text-white">{title}</h3>

      {/* Feature Description */}
      <p className="text-white text-sm">{description}</p>
    </article>
  );
};

export default FeatureCard;
