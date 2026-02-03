'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { caseStudies } from '../data/services';

export default function CaseStudyTabs() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].key);

  const activeData = caseStudies.find(item => item.key === activeTab);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  if (!activeData) return null;

  return (
    <div className="tabs-wrapper case-study-wrapper" id="case-studies">
      {/* HEADER */}
      <div className="section-header text-center px-4">
        <h2 className="section-heading" data-aos="fade-up">
          Growth You Can Measure + Results You Can Trust
        </h2>

        <p className="section-subtitle" data-aos="fade-up">
          Explore the challenges our clients faced and how our data-driven digital
          marketing services delivered clear, measurable improvements.
        </p>
      </div>

      <div className="tabs-container">
        {/* TABS */}
        <div className="custom-tabs">
          {caseStudies.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              data-aos="fade-up"
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={`fas ${tab.icon}`} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div
          key={activeData.key}
          className="tab-content-wrapper active"
          id={`content-${activeData.key}`}
        >
          <div className="case-card">
            <div className="case-content">
              <div>
                <span className="client-badge" data-aos="fade-up">
                  {activeData.client}
                </span>

                <div className="section-title" data-aos="fade-up">
                  <i className="fas fa-exclamation-triangle" />
                  The Challenge
                </div>

                <p className="section-content" data-aos="fade-up">
                  {activeData.challenge}
                </p>

                <div className="section-title" data-aos="fade-up">
                  <i className="fas fa-lightbulb" />
                  The Solution
                </div>

                <p className="section-content" data-aos="fade-up">
                  {activeData.solution}
                </p>
              </div>

              <div className="case-image-wrapper" data-aos="fade-up">
                <Image
                  src={activeData.image}
                  alt={activeData.label}
                  width={600}
                  height={400}
                  className="case-image"
                />
              </div>
            </div>

            <div className="bottom-wrapper">
              <h3 className="impact-title" data-aos="fade-up">
                {activeData.impactTitle}
              </h3>

              <div className="metrics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeData.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-card" data-aos="fade-up">
                    <div className="metric-icon">
                      <i className={`fas ${metric.icon}`} />
                    </div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-change">{metric.change}</div>
                  </div>
                ))}
              </div>

              <span className="result-badge" data-aos="fade-up">
                {activeData.result}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
