'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  'Online Reputation Management',
  'Content Marketing',
  'Review Management',
  'Rebranding',
  'Logo Designing',
  'Creative Graphic Design',
  'Crisis Management',
];
const tools = [
  "Adobe Creative Cloud",
  "SEMrush",
  "Brand Monitoring",
  "Google Alerts",
  "Brand Mention",
  "Brandwatch",
  "Screamingfrog",
  "Trustpilot",
  "Hootsuite",
  "Canva",
];

export default function BrandingSolutionsSection() {
  const [showAllTools, setShowAllTools] = useState(false);
  const toggleList = () => {
    setShowAllTools(prev => !prev);
  };
  return (
    <section
      className="marketing-services-section two show"
      role="region"
      aria-label="Branding Solutions by EZ Rankings"
    >
      <div className="content-wrapper">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <div className="section-badge aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <span><i className="fas fa-check-circle" aria-hidden="true"></i> Branding</span>
              </div>

              <h2 className="section-title aos-init" data-aos="fade-up" data-aos-duration="1000">
                Branding <span className="highlight">Solutions</span>
              </h2>

              <p className="section-description aos-init" data-aos="fade-up" data-aos-duration="1000">
                We help businesses communicate their value, create a strong visual identity, and build trust through consistent branding. From shaping audience perception to strengthening long-term recall, we ensure your brand stands out with confidence.
              </p>

              <div className="service-card aos-init" data-aos="fade-up" data-aos-duration="1000">
                <div className="category-header">
                  <h3 className="category-title"><i className="fas fa-palette" aria-hidden="true"></i>Core Services</h3>
                </div>

                <div className="services-list">
                  {services.map((item) => (
                    <div className="service-item" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <div className="category-header">
                  <h3 className="category-title">
                    <i className="fas fa-tools" aria-hidden="true"></i> Key Tools
                  </h3>
                </div>

                <div className="tools-grid show-all" id="toolsGrid1">
                  {(showAllTools ? tools : tools.slice(0, 5)).map(tool => (
                    <div className="tool-card" key={tool}>
                      {tool}
                    </div>
                  ))}
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => toggleList('toolsGrid1', this)}
                >
                  {showAllTools ? 'Read Less' : 'Read More'}{' '}
                  <i
                    className={`fas fa-chevron-down transition-transform duration-300 ${showAllTools ? 'rotate-180' : ''
                      }`}
                  />
                </button>
              </div>
              <Link
                href="/contact-us.html"
                className="theme-btn aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"
              >
                <div className="arrow-circle">
                  <div className="arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
                <span className="btn-text">Build Brand Authority</span>
              </Link>
            </div>
            <div className="md:col-span-4">
              <div className="image-box aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                <Image
                  src="/images/brand-solution.jpg"
                  alt="Branding Solutions"
                  width={420}
                  height={420}
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
