'use client';

import { useState } from 'react';

const services = [
  {
    title: 'Omnichannel Digital Visibility',
    duration: 1000,
    content: (
      <>
        <p>
          At EZ Rankings, the best digital marketing company in India,
          we make sure your brand is easy to find across all major online platforms.
        </p>
        <p>
          By aligning all these channels, we help your business connect
          with more people and grow faster.
        </p>
      </>
    ),
  },
  {
    title: 'High-Intent MQLs (Marketing Qualified Leads)',
    duration: 1200,
    content: (
      <>
        <p>
          Traffic alone does not help a business grow. You need people
          who are genuinely interested in what you offer.
        </p>
        <p>
          This method improves conversions, lowers acquisition costs
          and strengthens your sales pipeline.
        </p>
      </>
    ),
  },
  {
    title: 'Performance-Driven Results',
    duration: 1400,
    content: (
      <p>
        We design strategies guided by data, performance insights
        and real user behaviour.
      </p>
    ),
  },
  {
    title: 'Guaranteed ROAS (Based on Industry and Budget)*',
    duration: 1600,
    content: (
      <p>
        We set clear performance benchmarks and work toward delivering
        a guaranteed ROAS.
      </p>
    ),
  },
  {
    title: 'LLM-Optimized Search and Brand Visibility',
    duration: 1800,
    content: (
      <p>
        We help your business stay visible across AI-driven platforms
        like ChatGPT, Gemini, Copilot, and Perplexity.
      </p>
    ),
  },
];
export default function ResultsSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      className="results-section show"
      role="region"
      aria-label="Performance Marketing Results"
    >
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row gap-12">
          <div className="col-lg-5 w-full lg:w-5/12">
            <h2 className="section-title ani-heading" data-aos="fade-up" data-aos-duration="1000">
              The Results You Need <br />
              <span className="highlight">
                From the Best Performance Marketing Agency
              </span>
            </h2>

            <p className="intro-text aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              At EZ Rankings, we provide digital marketing services that help you achieve
              your business goals quickly and efficiently. Using AI insights, LLM-based
              optimization, and proven strategies, we give your brand the support it needs
              to grow.
              <br /><br />
              Our proven case studies and client reviews show why we are a trusted digital
              marketing company in India.
            </p>
          </div>

          <div className="col-lg-7 w-full lg:w-7/12">
            <div className="services-list flex flex-col gap-4">

              {services.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`service-item aos-init aos-animate ${isOpen ? 'active' : ''}`}
                     data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration={item.duration}
                  >
                    <button
                      type="button"
                      className="service-header w-full flex items-center justify-between text-left"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <div className="service-title">{item.title}</div>
                      <div className="toggle-icon">
                        {isOpen ? '−' : '+'}
                      </div>
                    </button>

                    <div
                      className={`service-content transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[1000px] mt-4' : 'max-h-0'
                      }`}
                    >
                      {item.content}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
