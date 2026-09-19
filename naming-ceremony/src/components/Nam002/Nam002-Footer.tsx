export default function Nam002Footer() {
  return (
    <footer className="shared-footer-main" id="shared-footer-main">
      <div className="shared-footer-top-section">
        <div className="shared-footer-branding-container">
          <div className="shared-footer-branding-text">
            <span className="footer-categorytype">naming_ceremony</span>
            {' '}Invitation website by{' '}
            <span className="shared-footer-brand-name">Invitationnation</span>
          </div>
          <div className="shared-footer-logo-group">
            <img
              alt="Logo"
              src="data:image/png;base64,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"
            />
          </div>
        </div>
      </div>

      <div className="shared-footer-bottom-wrapper">
        <div className="shared-footer-container">
          <div className="shared-footer-links-row">
            <a className="shared-footer-link shared-footer-gray-link" href="#report">
              <span className="shared-footer-icon">
                <svg
                  color="#94A3B8"
                  fill="currentColor"
                  height="17"
                  stroke="currentColor"
                  strokeWidth="0"
                  style={{ color: 'rgb(148, 163, 184)' }}
                  viewBox="0 0 512 512"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
              </span>
              <span className="shared-footer-link-text">Report a Problem</span>
            </a>

            <a
              className="shared-footer-link shared-footer-gray-link"
              href="mailto:marketing@codenimbussolutions.com?subject=Invitation Support&body=Hello Team,%0A%0AI need help with..."
              target="_self"
            >
              <span className="shared-footer-icon">
                <svg
                  color="#94A3B8"
                  fill="currentColor"
                  height="17"
                  stroke="currentColor"
                  strokeWidth="0"
                  style={{ color: 'rgb(148, 163, 184)' }}
                  viewBox="0 0 512 512"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </span>
              <span className="shared-footer-link-text">Contact Support</span>
            </a>

            <a className="shared-footer-link shared-footer-gray-link" href="#privacy">
              <span className="shared-footer-icon">
                <svg
                  color="#94A3B8"
                  fill="currentColor"
                  height="17"
                  stroke="currentColor"
                  strokeWidth="0"
                  style={{ color: 'rgb(148, 163, 184)' }}
                  viewBox="0 0 512 512"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z" />
                </svg>
              </span>
              <span className="shared-footer-link-text">Privacy Policy</span>
            </a>
          </div>

          <div className="shared-footer-attribution">
            POWERED BY <span>INVITATION NATION</span>
          </div>

          <div className="shared-footer-legal-bar">
            <p className="shared-footer-legal-text">
              © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
