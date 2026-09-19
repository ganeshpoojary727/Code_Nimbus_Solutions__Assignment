import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nce-shared-navbar-container">
      <nav className="shared-navbar fixed nce-navbar" id="sticky-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `shared-nav-item ${isActive ? 'nce-active' : ''}`
          }
          id="nav-home"
          aria-label="Home"
        >
          <span className="nav-label">Home</span>
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `shared-nav-item ${isActive ? 'nce-active' : ''}`
          }
          id="nav-gallery"
          aria-label="Gallery"
        >
          <span className="nav-label">Gallery</span>
        </NavLink>
      </nav>
    </div>
  );
}
