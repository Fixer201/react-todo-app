interface UseCaseCardProps {
  id: number;
  imagePath?: string;
  altText?: string;
  headerText: string;
  descriptionText: string;
}

const UseCaseCard = ({
  id,
  imagePath,
  altText,
  headerText,
  descriptionText,
}: UseCaseCardProps) => {
  const flexDirection = id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <article
      className={`flex flex-col lg:flex-row items-center ${flexDirection} xl:min-h-96 group-hover-glow-red border-0 hover:border rounded-xl border-red-700 glow-red-on-hover-inner p-4 lg:p-8 gap-8 transition-shadow duration-300`}
    >
      <img
        src={imagePath}
        alt={altText}
        loading="lazy"
        className="w-full max-w-[300px] mx-auto group-hover:scale-110 h-auto max-lg:p-4 object-cover rounded-lg transition-[shadow, scale] glow-red-on-hover duration-300 hover:scale-100"
      />

      <div className="flex flex-col lg:w-1/2 justify-center">
        <h3 className="text-2xl lg:text-4xl w-full lg:w-fit font-black  mb-4 text-white hover:scale-110 max-lg:p-2 lg:pl-8 hover:text-red-200 glow-red-on-hover transition-[color, scale] duration-300">
          {headerText}
        </h3>
        <p className="text-white text-md w-full text-balance p-2 lg:text-xl lg:pl-8">
          {descriptionText}
        </p>
      </div>
    </article>
  );
};

export default UseCaseCard;
