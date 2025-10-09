import React from 'react';
import UseCasesCards from '../elements/cards/useCasesCards.tsx';

// Data for use cases in future can be fetched from an API or database on need basis
const casesData = [
  {
    id: 1,
    imagePath: '/use-cases/overwhelmed-by-tasks-problem.svg',
    headerText: 'Overwhelmed by Tasks?',
    descriptionText:
      'EasyToDo helps you organize and prioritize your tasks, making it easier to manage your workload and reduce stress.',
  },
  {
    id: 2,
    imagePath: '/use-cases/difficulty-in-collaboration-problem.svg',
    headerText: 'Difficulty in Collaboration?',
    descriptionText:
      'With EasyToDo, you can easily share tasks and projects with your team, enhancing communication and teamwork.',
  },
  {
    id: 3,
    imagePath: '/use-cases/lack-of-motivation-problem.svg',
    headerText: 'Lack of Motivation?',
    descriptionText:
      'EasyToDo provides reminders and progress tracking to keep you motivated and on track to achieve your goals.',
  },
];

const UseCaseSection = () => {
  return (
    <section className="flex flex-col items-center mx-96 h-fit border border-secondary rounded-2xl p-12 bg-primary z-10 glow-secondary-on-hover transition-shadow duration-300">
      {/* Header */}
      <h2
        className="text-4xl w-fit font-black relative overflow-hidden
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 pb-2 after:bg-white
                        after:transition-all after:duration-500 hover:after:w-full text-white text-center glow-icon-secondary transition duration-200"
      >
        EasyToDo Solves Your Pain Points
      </h2>

      {/* cases grid article */}
      <article className="flex flex-col gap-12 mt-12">
        {/* Case 1 */}
        {casesData.map((caseItem) => (
          <UseCasesCards
            key={caseItem.id}
            id={caseItem.id}
            imagePath={caseItem.imagePath}
            altText={caseItem.headerText}
            headerText={caseItem.headerText}
            descriptionText={caseItem.descriptionText}
          />
        ))}
      </article>
    </section>
  );
};

export default UseCaseSection;
