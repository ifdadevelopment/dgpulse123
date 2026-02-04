'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ModernNavbarMobile() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  };

  return (
    <div className="modern-nav">
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid px-4">

            {/* Logo */}
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo.webp"
                alt="EZ Rankings"
                width={180}
                height={50}
                priority
              />
            </Link>

            {/* Mobile Toggle */}
            <button
              className={`navbar-toggler ${mobileOpen ? '' : 'collapsed'}`}
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setOpenDropdown(null);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapse */}
            <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">

                {/* Services Mega Menu */}
                <li className={`nav-item dropdown mega-menu-dropdown ${openDropdown === 'services' ? 'show' : ''}`}>
                  <a
                    href="#"
                    className="nav-link"
                    aria-expanded={openDropdown === 'services'}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('services');
                    }}
                  >
                    <span>Services</span>
                    <i className="fas fa-chevron-down dropdown-arrow"></i>
                  </a>

                  <div className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                    <div className="container-fluid mega-menu-content">
                      <div className="row">

                        <div className="col-lg-3 col-md-6 mega-column">
                          <h6 className="mega-title">Development</h6>
                          <ul className="mega-list">
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">WordPress</a></li>
                            <li><a href="#">PHP</a></li>
                          </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mega-column">
                          <h6 className="mega-title">Branding</h6>
                          <ul className="mega-list">
                            <li><a href="#">Brand Management</a></li>
                            <li><a href="#">Logo Design</a></li>
                          </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mega-column">
                          <h6 className="mega-title">Search Marketing</h6>
                          <ul className="mega-list">
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Local SEO</a></li>
                          </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mega-column">
                          <h6 className="mega-title">Paid Advertising</h6>
                          <ul className="mega-list">
                            <li><a href="#">PPC</a></li>
                            <li><a href="#">Meta Ads</a></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </li>

                {/* White Label */}
                <li className={`nav-item dropdown regular-dropdown ${openDropdown === 'whiteLabel' ? 'show' : ''}`}>
                  <a
                    href="#"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('whiteLabel');
                    }}
                  >
                    <span>White Label</span>
                    <i className="fas fa-chevron-down dropdown-arrow"></i>
                  </a>

                  <ul className={`dropdown-menu ${openDropdown === 'whiteLabel' ? 'show' : ''}`}>
                    <li><a className="dropdown-item" href="#">White Label SEO</a></li>
                    <li><a className="dropdown-item" href="#">White Label PPC</a></li>
                  </ul>
                </li>

                {/* Industry */}
                <li className={`nav-item dropdown regular-dropdown ${openDropdown === 'industry' ? 'show' : ''}`}>
                  <a
                    href="#"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('industry');
                    }}
                  >
                    <span>Industry</span>
                    <i className="fas fa-chevron-down dropdown-arrow"></i>
                  </a>

                  <ul className={`dropdown-menu ${openDropdown === 'industry' ? 'show' : ''}`}>
                    <li><a className="dropdown-item" href="#">Real Estate</a></li>
                    <li><a className="dropdown-item" href="#">Healthcare</a></li>
                  </ul>
                </li>

                {/* CTA */}
                <li className="nav-item">
                  <a href="#" className="theme-btn">
                    <span className="btn-text">Free Website Audit</span>
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
}
