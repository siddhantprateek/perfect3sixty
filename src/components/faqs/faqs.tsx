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
      {isOpen && <p className="mt-2 text-left text-gray-600">{answer}</p>}
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    { question: "What is Perfect3sixty?", answer: "Perfect3sixty streamlines salon operations, minimizes wait times, and delivers personalized beauty experiences." },
    { question: "Is Perfect3sixty free to use?", answer: "Yes, Perfect3sixty is free to use for all users. Our core features, including Smart Booking, Real-time Updates, and Service Menu browsing, are available at no cost. We aim to make salon management and client experiences as accessible as possible. While the app is currently free, we plan to introduce optional subscription plans in the future that will offer additional premium features for those who want to enhance their experience further." },
    { question: "What kind of support does Perfect3sixty offer?", answer: "Our salon app is your beauty bestie. No more stressing over appointments or wondering if your stylist is running late. Just chill and book your next treatment whenever it suits you. Plus, our menu is packed with options to help you look and feel your best. It's like having your own personal beauty assistant right at your fingertips." },
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