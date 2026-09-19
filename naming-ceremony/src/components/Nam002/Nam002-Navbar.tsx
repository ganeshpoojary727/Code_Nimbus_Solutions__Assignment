import { NavLink } from 'react-router-dom';

export default function Nam002Navbar() {
  return (
    <div className="nam002-shared-navbar-container">
      <nav className="shared-navbar fixed nam002-navbar" id="sticky-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `shared-nav-item ${isActive ? 'nam002-active' : ''}`
          }
          id="nav-home"
          aria-label="Home"
        >
          <span className="nav-label">Home</span>
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `shared-nav-item ${isActive ? 'nam002-active' : ''}`
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
