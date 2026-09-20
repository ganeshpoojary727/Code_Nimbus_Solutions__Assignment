import { asset } from '../utils/assets';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data/content';

export default function HeroSection() {
  return (
    <section id="nce-hero-section">
      {/* Decorative Leaves */}

      {/* Top Leaf (Desktop) — fades in 1s after arch animation completes (arch: 0.8s → leaves at 1.8s) */}
      <motion.div
        className="nce-hero-topleaf"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 1.8 }}
      >
        <img alt="Hero Top Leaf" src={asset('/svg/topleaf.svg')} draggable={false} />
      </motion.div>

      {/* Right Leaf (Desktop) */}
      <motion.div
        className="nce-hero-rightleaf"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 1.9 }}
      >
        <img alt="Hero Right Leaf" src={asset('/svg/rightleaf.svg')} draggable={false} />
      </motion.div>

      {/* Background Stars */}
      <motion.div
        className="nce-hero-star-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.75, 0.3, 0.85, 0.4, 0.75] }}
        transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity, delay: 0.2 }}
      >
        <img alt="Hero Star Left" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>

      <motion.div
        className="nce-hero-star-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.75, 0.35, 0.9, 0.45, 0.75] }}
        transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 0.4 }}
      >
        <img alt="Hero Star Right" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>

      <motion.div
        className="nce-hero-star-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.75, 0.25, 0.8, 0.35, 0.75] }}
        transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay: 0.3 }}
      >
        <img alt="Hero Star Bottom" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>

      {/* Mobile Stars */}
      <motion.div
        className="nce-hero-star-mobile-one"
        animate={{ opacity: [0.85, 0.3, 0.85] }}
        transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>
      <motion.div
        className="nce-hero-star-mobile-two"
        animate={{ opacity: [0.7, 0.25, 0.7] }}
        transition={{ duration: 4.0, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>
      <motion.div
        className="nce-hero-star-mobile-three"
        animate={{ opacity: [0.9, 0.35, 0.9] }}
        transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>

      {/* Corner Flowers */}

      {/* Left Flower (Desktop) */}
      <motion.div
        className="nce-hero-flower-left"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 3.0,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            delay: 4.2, // exactly 0.5s after loading completes (3.0 + 0.7 + 0.5 = 4.2s)
            duration: 2.0,
            ease: [0.45, 0.05, 0.55, 0.95],
            repeat: 0,
          }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img alt="Hero Flower Left" src={asset('/svg/flower.svg')} draggable={false} style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </motion.div>

      {/* Right Flower (Desktop) */}
      <motion.div
        className="nce-hero-flower-right"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 3.1,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            delay: 4.3, // exactly 0.5s after loading completes (3.1 + 0.7 + 0.5 = 4.3s)
            duration: 2.0,
            ease: [0.45, 0.05, 0.55, 0.95],
            repeat: 0,
          }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img alt="Hero Flower Right" src={asset('/svg/flower.svg')} draggable={false} style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </motion.div>

      {/* Mobile Flower Top */}
      <motion.div
        className="nce-hero-flower-mobile-top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 3.0,
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            delay: 4.2,
            duration: 2.0,
            ease: [0.45, 0.05, 0.55, 0.95],
            repeat: 0,
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <img alt="" src={asset('/svg/flower.svg')} draggable={false} style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </motion.div>

      {/* Bottom-Right Flower (Desktop) — partially visible at right-bottom corner, like original site */}
      <motion.div
        className="nce-hero-flower-bottom"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ delay: 4.4, duration: 2.0, ease: [0.45, 0.05, 0.55, 0.95], repeat: 0 }}
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img alt="Hero Flower Bottom" src={asset('/svg/flower.svg')} draggable={false} style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </motion.div>

      {/* Main Card Container */}
      <div className="nimbus-container">
        {/* Main Arch Animation */}
        <motion.div
          className="nce-hero-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Bottom leaf fades in 1s after arch completes (T = 1.8s stagger, sequence delay 2.0s) */}
          <motion.div
            className="nce-hero-bottomleaf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 2.0 }}
          >
            <img alt="Hero Bottom Leaf" src={asset('/svg/bottomleaf.svg')} draggable={false} />
          </motion.div>

          {/* Mobile Container Stars */}
          <div className="nce-hero-star-mobile-topleft">
            <img alt="" src={asset('/svg/star.svg')} draggable={false} />
          </div>
          <div className="nce-hero-star-mobile-bottomleft">
            <img alt="" src={asset('/svg/star.svg')} draggable={false} />
          </div>

          {/* Mobile Container Flowers (Steps 5 & 6) */}
          <motion.div
            className="nce-hero-flower-mobile-topright"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 3.0,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                delay: 4.2,
                duration: 2.0,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: 0,
              }}
              style={{ width: '100%', height: '100%' }}
            >
              <img alt="" src={asset('/svg/flower.svg')} draggable={false} style={{ width: '100%', height: '100%' }} />
            </motion.div>
          </motion.div>

          <motion.div
            className="nce-hero-flower-mobile-bottomright"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 3.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                delay: 4.3,
                duration: 2.0,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: 0,
              }}
              style={{ width: '100%', height: '100%' }}
            >
              <img alt="" src={asset('/svg/flower.svg')} draggable={false} style={{ width: '100%', height: '100%' }} />
            </motion.div>
          </motion.div>

          {/* Card Content */}
          <div className="nce-hero-content">
            {/* Baby Portrait */}
            <motion.div
              className="nce-hero-image-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            >
              {/* Ribbon Bow */}
              <motion.div
                className="nce-hero-ribbon"
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1], delay: 2.45 }}
              >
                <img alt="Decoration Ribbon" src={asset('/svg/ribbon.webp')} draggable={false} />
              </motion.div>
              <img
                src={SITE_CONTENT.babyPhoto}
                alt="Baby"
                className="nce-hero-baby"
                draggable={false}
              />
            </motion.div>

            {/* Invitation Details */}
            <div className="nce-hero-details">
              {/* Text 1: Invite Line */}
              <motion.p
                className="nce-hero-invite"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 1.3 }}
              >
                Mr &amp; Mrs Nair {SITE_CONTENT.heroInviteLine}
              </motion.p>

              {/* Text 2: Title */}
              <motion.h1
                className="nce-hero-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 1.5 }}
              >
                Naming Ceremony
              </motion.h1>

              {/* Text 3: Subtitle */}
              <motion.p
                className="nce-hero-sub"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 1.7 }}
              >
                {SITE_CONTENT.heroSubtitle}
              </motion.p>
            </div>

            {/* Text 4: Date Block */}
            <motion.div
              className="nce-hero-date"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 1.9 }}
            >
              <p>{SITE_CONTENT.date} | {SITE_CONTENT.time}</p>
            </motion.div>

            {/* Text 5: Location & Open in Maps Button */}
            <motion.div
              className="nce-hero-location"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 2.1 }}
            >
              <p>{SITE_CONTENT.venueName}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONTENT.venueMapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nce-hero-maps-button inline-flex items-center justify-center"
                id="open-in-maps-button"
              >
                Open in Maps
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
