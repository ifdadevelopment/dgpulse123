'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAVBAR } from '../data/services';
import "../../styles/navbar.css"
export default function ModernNavbar() {
  const [open, setOpen] = useState(null);

  const isOpen = (key) => open === key;
  const buildHref = (menuKey, slug) => `/${menuKey}/${slug}`;
  return (
    <div className="modern-nav">
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid px-4">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo.webp"
                alt="EZ Rankings"
                width={180}
                height={50}
                priority
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav ms-auto">
              {NAVBAR.map((menu) => {
                const hasMega = menu.type === 'mega';
                const hasDropdown = menu.type === 'dropdown';

                return (
                  <li
                    key={menu.key}
                    className={`nav-item ${hasMega
                      ? 'dropdown mega-menu-dropdown'
                      : hasDropdown
                        ? 'dropdown regular-dropdown'
                        : ''
                      }`}
                    onMouseEnter={() =>
                      hasMega || hasDropdown ? setOpen(menu.key) : null
                    }
                    onMouseLeave={() => setOpen(null)}
                  >
                    {hasMega || hasDropdown ? (
                      <span className="nav-link">
                        {menu.label}
                        <i className="fas fa-chevron-down dropdown-arrow"></i>
                      </span>
                    ) : (
                      <Link className="nav-link" href={`/${menu.slug}`}>
                        {menu.label}
                      </Link>
                    )}
                    {hasMega && (
                      <div
                        className={`dropdown-menu ${isOpen(menu.key) ? 'show' : ''
                          }`}
                        style={{
                          opacity: isOpen(menu.key) ? 1 : 0,
                          transform: isOpen(menu.key)
                            ? 'translateY(0)'
                            : 'translateY(-20px)',
                        }}
                      >
                        <div className="container-fluid mega-menu-content">
                          <div className="row1">
                            {menu.columns.map((col, i) => (
                              <div
                                key={i}
                                className="col-lg-3 col-md-6 mega-column"
                              >
                                <h6 className="mega-title">{col.title}</h6>

                                <ul className="mega-list">
                                  {col.links.map((l, j) => (
                                    <li key={j}>
                                      <Link
                                        href={buildHref(menu.key, l.slug)}
                                        onClick={() => setOpen(null)}
                                      >
                                        {l.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 🔹 DROPDOWN */}
                    {hasDropdown && (
                      <ul
                        className={`dropdown-menu ${isOpen(menu.key) ? 'show' : ''
                          }`}
                        style={{
                          opacity: isOpen(menu.key) ? 1 : 0,
                          transform: isOpen(menu.key)
                            ? 'translateY(0)'
                            : 'translateY(-20px)',
                        }}
                      >
                        {menu.links.map((l, i) => (
                          <li key={i} className="dropdown-list-item">
                            <Link
                              href={`/${l.slug}`}
                              className="dropdown-list-item"
                              onClick={() => setOpen(null)}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* CTA BUTTON */}
              <li className="nav-item">
                <Link
                  href="/free-website-analysis"
                  className="theme-btn"
                >
                  <div className="arrow-circle">
                    <div className="arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                  <span className="btn-text">Free Website Audit</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
