'use client';

export default function MegaMenu({ id, label, children, open, onEnter, onLeave }) {
  return (
    <li
      className="nav-item dropdown mega-menu-dropdown"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <a
        className="nav-link"
        href="#"
        id={id}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded={open}
      >
        <span>{label}</span>
        <i className="fas fa-chevron-down dropdown-arrow"></i>
      </a>

      <div
        className={`dropdown-menu ${open ? 'show' : ''}`}
        aria-labelledby={id}
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {children}
      </div>
    </li>
  );
}
