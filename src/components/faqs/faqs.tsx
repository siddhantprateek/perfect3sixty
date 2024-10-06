import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <Plus className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    { question: "What is Perfect3sixty?", answer: "Perfect3sixty is..." },
    { question: "Is Perfect3sixty free to use?", answer: "Perfect3sixty offers..." },
    { question: "What kind of support does Perfect3sixty offer?", answer: "Perfect3sixty provides..." },
  ];

  return (
    <section className="py-16" id="faqs">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-medium text-center mb-2">FAQ</h2>
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mb-12">
          Find answers to commonly asked questions about Perfect3sixty
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;