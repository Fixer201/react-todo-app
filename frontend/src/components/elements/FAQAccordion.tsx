import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  question: string;
  answer: string;
}

const FaqAccordion = ({ question, answer }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-b border-secondary">
      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left transition-colors hover:text-gray-300"
      >
        <h3 className="text-xl lg:text-2xl font-bold text-white glow-icon-secondary-on-hover transition-all duration-300">
          {question}
        </h3>
        <ChevronDown
          className={`flex-shrink-0 w-6 h-6 text-white transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-gray-300 font-light text-lg pb-4">{answer}</div>
        </div>
      </div>
    </article>
  );
};

export default FaqAccordion;
