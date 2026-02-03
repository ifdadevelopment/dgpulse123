'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const services = [
    'Website Design',
    'Website Development',
    'App Store Marketing',
    'UI/UX Design',
    'Custom Web Applications',
    'Mobile App Development',
    'Shopify Development',
];
const tools = [
    "PHP",
    "Java",
    "Shopify",
    "React",
    "Angular",
];

export default function WebsiteAppDevelopmentSection() {
    const [showAllTools, setShowAllTools] = useState(false);
    const toggleList = () => {
        setShowAllTools(prev => !prev);
    };
    return (
        <section
            className="marketing-services-section three show"
            role="region"
            aria-label="Website and App Development by EZ Rankings"
        >
            <div className="content-wrapper">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

                        {/* LEFT IMAGE */}
                        <div className="md:col-span-4">
                            <div className="image-box aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" >
                                <Image
                                    src="/images/website-app-development.jpg"
                                    alt="Website and App Development"
                                    width={420}
                                    height={420}
                                    priority
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="md:col-span-8">
                            <div className="section-badge aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                                <span><i className="fas fa-check-circle" aria-hidden="true"></i> Website / Apps</span>
                            </div>

                            <h2 className="section-title aos-init" data-aos="fade-up" data-aos-duration="1000">
                                Website &amp; App <span className="highlight">Development</span>
                            </h2>

                            <p className="section-description aos-init" data-aos="fade-up" data-aos-duration="1000">
                                Create fast, modern, and user-friendly websites or apps. We design and build digital platforms that look great, perform smoothly, and turn visitors into customers. Every element is optimized for growth and scalability.
                            </p>

                            <div className="service-card aos-init" data-aos="fade-up" data-aos-duration="1000">
                                <div className="category-header">
                                    <h3 className="category-title"><i className="fas fa-code" aria-hidden="true"></i>Core Services</h3>
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
                                        <i className="fas fa-cogs" aria-hidden="true"></i> Key Technologies
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
                                <span className="btn-text">
                                    Explore Website &amp; App Solutions
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
