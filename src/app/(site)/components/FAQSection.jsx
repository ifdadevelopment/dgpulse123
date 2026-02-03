'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 'faq1',
    question: 'How do I get started with digital marketing at EZ Rankings?',
    answer:
      'Getting started with the best digital marketing agency, EZ Rankings, is simple. Book a free consultation with our experts to discuss your business goals, target audience, and challenges. We then recommend a strategy tailored to your objectives and start executing a structured plan for measurable growth.',
  },
  {
    id: 'faq2',
    question: 'How is your performance-driven strategy different from other agencies?',
    answer:
      'Unlike other digital marketing agencies, we build strategies based on data, past learnings, and realistic business goals. Our focus is performance that scales over time, not just flashy dashboards.',
  },
  {
    id: 'faq3',
    question: 'How do I know which digital marketing channels are right for my business?',
    answer:
      'We evaluate business goals, customer behaviour, competition, and budget to select the right channels. We recommend channels based on results, not trends.',
  },
  {
    id: 'faq4',
    question: 'How do AI and LLMs improve digital marketing performance?',
    answer:
      'AI and LLMs like ChatGPT and Gemini improve targeting, reach, and high-intent traffic. EZ Rankings leverages these tools to enhance search visibility, content engagement, and overall marketing performance.',
  },
  {
    id: 'faq5',
    question: 'What KPIs do you track in performance marketing campaigns?',
    answer:
      'We focus on ROI, ROAS, efficiency, conversion quality, cost optimization, and long-term growth impact.',
  },
  {
    id: 'faq6',
    question: 'Can performance marketing work with a limited budget?',
    answer:
      'Small budgets limit testing and optimization. Performance marketing works best with sufficient data to make informed decisions.',
  },
  {
    id: 'faq7',
    question: 'Do you support LLM-based search visibility like ChatGPT and Gemini?',
    answer:
      'Yes. We integrate LLM visibility into your digital strategy, ensuring discoverability across AI-driven search platforms.',
  },
  {
    id: 'faq8',
    question: 'How much does digital marketing cost?',
    answer:
      'Our services typically start at $2,000/month. The final cost depends on business goals, channels, competition, and strategy depth.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  const renderFAQ = (faq) => {
    const isActive = openId === faq.id;

    return (
      <article
        key={faq.id}
        className={`faq-item aos-init aos-animate ${isActive ? 'active' : ''}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="faq-header"
          aria-expanded={isActive}
          aria-controls={faq.id}
          onClick={() => toggleFAQ(faq.id)}
        >
          <h3 className="faq-question">{faq.question}</h3>
          <div className="toggle-icon">+</div>
        </div>

        <div className="faq-answer" id={faq.id}>
          {faq.answer}
        </div>
      </article>
    );
  };

  return (
    <section
      className="faq-section show"
      role="region"
      aria-label="Frequently Asked Questions"
    >
      <div className="container mx-auto px-4">
        <h2
          className="section-title ani-heading"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          FAQs (Frequently Asked Questions)
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Clear answers to help you understand our digital marketing solutions better.
        </p>

        <div className="faq-list row">
          <div className="col-md-6">
            {leftColumn.map(renderFAQ)}
          </div>

          <div className="col-md-6">
            {rightColumn.map(renderFAQ)}
          </div>
        </div>
      </div>
    </section>
  );
}
