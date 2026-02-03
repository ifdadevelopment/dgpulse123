'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = [
    ['SEO Services', '/seo-services.html'],
    ['Local SEO', '/local-seo-services.html'],
    ['Ecommerce SEO', '/ecommerce-seo-services.html'],
    ['Amazon SEO', '/amazon-seo-services.html'],
    ['Google Map Marketing', '/google-map-marketing.html'],
    ['Social Media Marketing', '/social-media-marketing-services.html'],
    ['PPC Advertising', '/ppc-services-india.html'],
    ['Bing Ads Management', '/bing-ads-agency.html'],
    ['Meta Ads', '/meta-ads-agency.html'],
];

const tools = [
    'Google Analytics',
    'Google Search Console',
    'Heatmap Analysis',
    'AHREFs',
    'SEMRUSH',
    'Screamingfrog',
    'Meta Business Suite',
    'Hootsuite',
];

export default function MarketingSolutionsSection() {
    const [showAllTools, setShowAllTools] = useState(false);
    const toggleList = () => {
        setShowAllTools(prev => !prev);
    };

    return (
        <section
            className="marketing-services-section one1 show"
            role="region"
            aria-label="Marketing Solutions by EZ Rankings"
        >
            <div className="content-wrapper">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                        <div className="md:col-span-4">
                            <div className="image-box aos-init aos-animate" aria-hidden="true" data-aos="fade-up" data-aos-duration="1000">
                                <div className="decorative-circles">
                                    <div className="circle circle-1" />
                                    <div className="circle circle-2" />
                                    <div className="circle circle-3" />
                                </div>

                                <div className="image-icon">
                                    <Image
                                        src="/images/Marketing-Solutions.jpg"
                                        alt="Marketing Solutions"
                                        width={420}
                                        height={420}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-8">
                            <div className="section-badge aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span><i className="fas fa-check-circle" aria-hidden="true"></i> Marketing</span>
                            </div>

                            <h2 className="section-title aos-init" data-aos="fade-up" data-aos-duration="1000">
                                Marketing <span className="highlight">Solutions</span>
                            </h2>

                            <p className="section-description aos-init" data-aos="fade-up" data-aos-duration="1000">
                                We help brands build stronger search visibility, attract high-intent
                                traffic, and generate predictable leads with smart, data-powered
                                digital strategies.
                            </p>
                            <div className="service-card aos-init" data-aos="fade-up" data-aos-duration="1000">
                                <div className="category-header">
                                    <h3 className="category-title"><i className="fas fa-rocket" aria-hidden="true"></i>Core Services</h3>
                                </div>

                                <div className="services-list">
                                    {services.map(([label, link]) => (
                                        <div className="service-item" key={label}>
                                            <Link href={link}>{label}</Link>
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
                                className="theme-btn aos-init" data-aos="fade-up" data-aos-duration="1000"
                            >
                                <div className="arrow-circle">
                                    <div className="arrow">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                                <span className="btn-text">Start Marketing Growth</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
