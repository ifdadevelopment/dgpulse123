'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAVBAR } from '../data/services';
import "../../styles/navbar.css"
export default function ModernNavbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isOpen = (key) => open === key;
  const buildHref = (menuKey, slug) => `/${menuKey}/${slug}`;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 991px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);
  useEffect(() => {
    setOpen(null);
  }, [isMobile]);
  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  } else {
    document.body.style.overflow = "";
    document.body.style.height = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.height = "";
  };
}, [mobileOpen]);
  const isMegaMobileActive = (menuKey) =>
    open === menuKey || (typeof open === "string" && open.startsWith(`${menuKey}-`));

  const isAccordionOpen = (menuKey, idx) => open === `${menuKey}-${idx}`;
  return (
    <div className="modern-nav">
      <header className="main-header ">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid px2-4">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo.webp"
                alt="EZ Rankings"
                width={180}
                height={50}
                priority
                className='img mt-20'
              />
            </Link>
            <button
              className={`navbar-toggler ${mobileOpen ? '' : 'collapsed'}`}
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen(prev => !prev)}
            >
              <span className="navbar-toggler-icon active"></span>
            </button>
            <div className={`navbar-collapse show ${mobileOpen ? 'block' : 'hidden'}`} id="navbarNav">
              <ul className="navbar-nav ms-auto ">
                {NAVBAR.map((menu) => {
                  const hasMega = menu.type === 'mega';
                  const hasDropdown = menu.type === 'dropdown';

                  return (
                    <li
                      key={menu.key}
                      className={`nav-item ${hasMega && !isMobile
                        ? 'dropdown mega-menu-dropdown'
                        : hasDropdown && !isMobile
                          ? 'dropdown regular-dropdown'
                          : ''
                        }`}
                      onMouseEnter={() => {
                        if (!isMobile && (hasMega || hasDropdown)) {
                          setOpen(menu.key);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMobile) {
                          setOpen(null);
                        }
                      }}
                    >
                      {hasMega || hasDropdown ? (
                        <span
                          className="nav-link"
                          onClick={() => {
                            if (isMobile) {
                              setOpen(isOpen(menu.key) ? null : menu.key);
                            }
                          }}
                        >
                          {menu.label}
                          <i className="fas fa-chevron-down dropdown-arrow"></i>
                        </span>
                      ) : (
                        <Link className="nav-link" href={`/${menu.slug}`}>
                          {menu.label}
                        </Link>
                      )}
                      {hasMega && (
                        <>
                          {!isMobile && (
                            <div
                              className={`dropdown-menu ${isOpen(menu.key) ? 'show' : ''}`}
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
                                    <div key={i} className="mega-column">
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
                          {isMobile && isMegaMobileActive(menu.key) && (
                            <div className="dropdown-menu mega-wrapper show">
                              <div className="container-fluid mega-menu-content">
                                {menu.columns.map((col, i) => {
                                  const accordionOpen = isAccordionOpen(menu.key, i);

                                  return (
                                    <div key={i} className="mega-accordion">
                                      <button
                                        type="button"
                                        className="mega-accordion-title"
                                        onClick={() => {
                                          if (accordionOpen) return setOpen(menu.key);
                                          setOpen(`${menu.key}-${i}`);
                                        }}
                                      >
                                        {col.title}
                                        <span className="icon">{accordionOpen ? "−" : "+"}</span>
                                      </button>

                                      <ul className={`mega-accordion-body ${accordionOpen ? "open" : ""}`}>
                                        {col.links.map((l, j) => (
                                          <li key={j}>
                                            <Link
                                              href={buildHref(menu.key, l.slug)}
                                              onClick={() => {
                                                setOpen(null);
                                                setMobileOpen(false);
                                              }}
                                            >
                                              {l.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                        </>
                      )}
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
                                className="dropdown-item"
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

          </div>
        </nav>
      </header>
    </div>
  );
}
