import React from 'react';

interface useCasesCardsProps {
  id: number;
  imagePath?: string;
  altText?: string;
  headerText: string;
  descriptionText: string;
}

const UseCasesCards = ({
  id,
  imagePath,
  altText,
  headerText,
  descriptionText,
}: useCasesCardsProps) => {
  const flexDirection = id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <article
      className={`flex flex-row ${flexDirection} xl:min-h-96 group-hover-glow-red border-0 hover:border rounded-xl border-red-700 glow-red-on-hover-inner p-8 gap-8 transition-shadow duration-300`}
    >
      <img
        src={imagePath}
        alt={altText}
        className="w-full max-w-[300px] mx-auto group-hover:scale-110 h-auto object-cover rounded-lg transition-[shadow, scale] glow-red-on-hover duration-300 hover:scale-100"
      />

      <div className="flex flex-col w-1/2 justify-center">
        <h3 className="text-4xl w-fit font-black mb-4 text-white hover:scale-110 pl-8 hover:text-red-200 glow-red-on-hover transition-[color, scale] duration-300">
          {headerText}
        </h3>
        <p className="text-white  text-xl pl-8 max-w-10/12">
          {descriptionText}
        </p>
      </div>
    </article>
  );
};

export default UseCasesCards;
