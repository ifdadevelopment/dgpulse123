'use client';

export default function RegularDropdown({ id, label, links, open, onEnter, onLeave }) {
  return (
    <li
      className="nav-item dropdown regular-dropdown"
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

      <ul
        className={`dropdown-menu ${open ? 'show' : ''}`}
        aria-labelledby={id}
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {links.map((item, i) =>
          item.divider ? (
            <li key={i}>
              <hr className="dropdown-divider" />
            </li>
          ) : (
            <li key={i}>
              <a className="dropdown-item" href={item.url}>
                {item.label}
              </a>
            </li>
          )
        )}
      </ul>
    </li>
  );
}
