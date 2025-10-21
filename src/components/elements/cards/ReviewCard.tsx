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
      className="flex flex-col items-center my-4 lg:my-6 bg-background hover:bg-primary w-full h-full
   rounded-2xl border glow-secondary-on-hover border-secondary z-10 transition-[color, shadow] duration-300 p-4 lg:p-5"
    >
      <img
        src={imagePath}
        alt={altText}
        loading="lazy"
        className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 glow-icon-secondary-on-hover border border-secondary hover:scale-110 transition-all duration-300 rounded-full object-cover"
      />

      <div className="flex flex-1 flex-col justify-evenly items-center gap-3 lg:gap-4 mt-3 lg:mt-4 w-full">
        <div className="flex flex-col justify-center items-center text-center text-white">
          <h3 className="text-white text-base lg:text-lg font-semibold">
            {name}
          </h3>
          {role && (
            <h4 className="text-white text-xs lg:text-sm mt-1 lg:mt-2 px-3 opacity-80">{role}</h4>
          )}
        </div>

        <div className="relative px-4 lg:px-5 w-full">
          <svg
            className="absolute -top-2 left-0 w-6 h-6 lg:w-7 lg:h-7 text-secondary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p className="text-center text-sm lg:text-base leading-relaxed italic">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
