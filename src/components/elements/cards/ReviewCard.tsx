interface ReviewCardProps {
  imagePath?: string;
  altText?: string;
  name: string;
  role?: string;
  text: string;
}

const ReviewCard = ({
  imagePath,
  altText,
  name,
  role,
  text,
}: ReviewCardProps) => {
  return (
    <article
      className="flex flex-col justify-center items-center my-6 lg:my-12 bg-background hover:bg-primary w-full h-[450px]
   rounded-2xl border glow-secondary-on-hover border-secondary z-10 transition-[color, shadow] duration-300"
    >
      <img
        src={imagePath}
        alt={altText}
        loading="lazy"
        className="w-full max-w-4/12 mt-6 glow-icon-secondary-on-hover border border-secondary hover:scale-110 transition-all duration-300 rounded-full object-cover"
      />

      <div className="flex flex-1 flex-col justify-evenly items-center gap-6 lg:gap-12 mt-4 lg:mt-8 pb-12">
        <div className="flex flex-col justify-center items-center text-center text-white">
          <h3 className="text-white text-lg lg:text-xl font-semibold">
            {name}
          </h3>
          {role && (
            <h4 className="text-white text-sm mt-2 px-4 opacity-80">{role}</h4>
          )}
        </div>

        <div className="relative px-6">
          <svg
            className="absolute -top-2 left-0 w-8 h-8 text-secondary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p className="text-center text-md lg:text-xl leading-relaxed italic">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
