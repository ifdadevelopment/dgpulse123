'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sanjiv Nanda',
    role: 'Director, Smarthead Consulting',
    image: '/images/Sanjiv-Nanda.jpg',
    text:
      'I, Sanjiv Nanda, Director of Smarthead Consulting wish to record my appreciation and acknowledgment, for Mrs. Mansi Rana, Director of EZ Rankings IT Services. Her company has given excellent services to our clients in the sphere of making websites for our Real Estate Clients and Defence Sector Clients in record time and at very reasonable costs.',
  },
  {
    name: 'Ray Adams',
    role: 'MD, Alliant Web',
    image: '/images/1534831325RAY.jpg',
    text:
      'Thank you for a great experience in working on this project to a successful completion. Your pricing matched the value we received. The site is beautiful and functional and has already received response from those looking for our services.',
  },
  {
    name: 'Kristin & Jared',
    role: 'Clients, Digital Marketing',
    image: '/images/1534830787jarred-and-kris.png',
    text:
      'Our experience with EZ Rankings has been incredible - they have surpassed expectations with great quality, whether that is design work, SEO work and development work.',
  },
];

export default function ClutchTestimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section
      className="clutch-testimonial-section show"
      role="region"
      aria-label="Client Testimonials"
    >
      <div className="container mx-auto px-2">
        <div className="section-header text-center mb-12">
          <h2 className="section-title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">What Our Clients Have To Say</h2>
          <p className="section-subtitle aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
            We’ve partnered with more than 16K clients, and we truly value every
            relationship. Here’s what they share about our performance marketing experience.
          </p>
        </div>

        <div className="clutch-testimonials-container">
          <div className="clutch-card">
            <div className="clutch-logo aos-init" data-aos="fade-up" data-aos-duration="1000">
              Join us and become our next success story
            </div>

            <div className="stars aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="star">{s}</span>
              ))}
            </div>

            <a
              href="https://www.ezrankings.com/testimonial.html"
              className="clutch-btn aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Verified Reviews <i className="fas fa-arrow-right"></i>
            </a>

            <div className="clutch-reviews aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
              <div className="clutch-icon">C</div>
              <span>600+ reviews</span>
            </div>
          </div>
          <div className="arrow-testi">
            <i className="fas fa-chevron-left arrow prev-arrow" onClick={prev}></i>
            <i className="fas fa-chevron-right arrow next-arrow" onClick={next}></i>
          </div>
          <div className="slider-wrapper">
            <div
              className="clutch-testimonials-slider grid grid-cols-1 md:grid-cols-2 gap-6"
              id="clutch-testimonialsSlider"
            >
              {visibleTestimonials.map((item, i) => (
                <article key={i} className="clutch-testimonial-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                  <div className="client-header">
                    <div className="client-avatar">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>

                    <div className="client-info">
                      <h3 className="client-name">{item.name}</h3>
                      <p className="client-position">{item.role}</p>
                      <div className="client-stars">
                        {'★★★★★'.split('').map((s, i) => (
                          <span key={i} className="star">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <p className="clutch-testimonial-text">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
