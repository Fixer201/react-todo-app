import UseCaseCard from '../elements/cards/useCaseCard';
import { motion } from 'motion/react';
import {
    sectionSlideFromTop,
    sectionSlideFromBottom,
    slideFromLeft,
    slideFromRight,
} from '../../animations/motionVariants';

interface CaseData {
  id: number;
  imagePath: string;
  headerText: string;
  descriptionText: string;
}

// Data for use cases in future can be fetched from an API or database on need basis
const casesData: CaseData[] = [
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
    <motion.section
      variants={sectionSlideFromBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{
        when: 'beforeChildren',
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="section glow-secondary-on-hover"
    >
      {/* Header */}
      <motion.div
        variants={sectionSlideFromTop}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
      >
        <h2 className="text-3xl lg:text-4xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200">
          EasyToDo Solves Your Pain Points
        </h2>
      </motion.div>

      {/* cases grid article */}
      <motion.div
        variants={sectionSlideFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          when: 'beforeChildren',
          staggerChildren: 0.3,
          delayChildren: 0.3,
        }}
        className="flex flex-col gap-12"
      >
        {casesData.map(
          ({ id, imagePath, headerText, descriptionText }: CaseData) => (
            <motion.div
              key={id}
              variants={id % 2 === 0 ? slideFromRight : slideFromLeft}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <UseCaseCard
                id={id}
                imagePath={imagePath}
                altText={headerText}
                headerText={headerText}
                descriptionText={descriptionText}
              />
            </motion.div>
          ),
        )}
      </motion.div>
    </motion.section>
  );
};

export default UseCaseSection;
