import FAQAccordion from '../elements/FAQAccordion';

export interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

const FAQData: FAQItemData[] = [
  {
    id: 1,
    question: 'How does EasyToDo work?',
    answer:
      'EasyToDo is a task management platform that helps you organize, prioritize, and collaborate on tasks. Simply create an account, add your tasks, set deadlines, and invite team members to collaborate in real-time.',
  },
  {
    id: 2,
    question: 'Can I cancel my subscription anytime?',
    answer:
      "Yes, you can cancel your subscription at any time through your account settings. There are no cancellation fees, and you'll retain access until the end of your billing period.",
  },
  {
    id: 3,
    question: 'Is there a free trial available?',
    answer:
      "Yes! Our Pro plan comes with a 14-day free trial. No credit card required. You can explore all premium features and decide if it's right for your team.",
  },
  {
    id: 4,
    question: 'What happens to my data?',
    answer:
      'Your privacy is our priority. You have full control over your data storage preferences in settings. You can choose which tasks are stored on our servers or keep everything local on your device.',
  },
  {
    id: 5,
    question: 'Can I use EasyToDo on mobile devices?',
    answer:
      'Absolutely! EasyToDo is fully responsive and works seamlessly on desktop, tablet, and mobile devices.',
  },
  {
    id: 6,
    question: "What's the difference between Basic and Pro plans?",
    answer:
      'Basic is perfect for individuals with essential task management features. Pro includes advanced collaboration tools, priority support, and customizable workflows for teams.',
  },
  {
    id: 7,
    question: 'How do I upgrade or downgrade my plan?',
    answer:
      'You can change your plan anytime in your account settings. Upgrades take effect immediately, while downgrades apply at the end of your current billing cycle.',
  },
  {
    id: 8,
    question: 'Can I export my tasks?',
    answer:
      'Yes, you can export your tasks in various formats at any time. This ensures you always have a backup and can migrate your data if needed.',
  },
];

const FAQSection = () => {
  return (
    <section className="section glow-secondary-on-hover">
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200">
        Frequently Asked Questions
      </h2>

      {/* FAQ Accordions */}
      <div className="flex flex-col w-full">
        {FAQData.map(({ id, question, answer }: FAQItemData) => (
          <FAQAccordion key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
