import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SITE_CONTENT } from '../../data/content';

export default function Location() {
  const frameRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(frameRef, { amount: 0.35, once: true });

  return (
    <section id="nce-location-section">
      {/* Flower Two */}
      <motion.div
        className="nce-location-flower-two"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
      >
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </motion.div>

      {/* Star Two */}
      <motion.div
        className="nce-location-star-two"
        animate={{ opacity: [0.3, 0.85, 0.3], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity }}
      >
        <img alt="" src="/svg/star.svg" draggable={false} />
      </motion.div>

      <img alt="" className="bg-left" draggable={false} />
      <img alt="" className="bg-right" src="/svg/locationright.svg" draggable={false} />

      <div className="nce-location-container">
        <div className="nce-location-content">
          {/* Near left side flower: blooms right as flip settles, in sync with title */}
          <motion.div
            className="nce-location-flower-one"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
          >
            <img alt="" src="/svg/flower.svg" draggable={false} />
          </motion.div>

          <motion.div
            className="nce-location-star-one"
            animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity }}
          >
            <img alt="" src="/svg/star.svg" draggable={false} />
          </motion.div>

          {/* Series of text animations after the flip */}
          {/* 1. Title */}
          <motion.h2
            className="nce-location-title"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 1.0, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            {SITE_CONTENT.venueName}
          </motion.h2>

          {/* 2. Description (staggered) */}
          <motion.p
            className="nce-location-description"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 1.0, delay: 1.7, ease: [0.25, 1, 0.5, 1] }}
          >
            {SITE_CONTENT.venueAddress}
          </motion.p>

          {/* 3. Button (staggered) */}
          <motion.a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONTENT.venueMapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nce-location-button cursor-pointer no-underline text-white"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 1.0, delay: 2.0, ease: [0.25, 1, 0.5, 1] }}
          >
            <svg
              color="white"
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              style={{ color: 'white' }}
              viewBox="0 0 384 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            Open in Maps
          </motion.a>
        </div>

        <div className="nce-location-design">
          <img alt="" className="design-svg" src="/svg/locationdesign.svg" draggable={false} />
          <div className="nce-location-frame" ref={frameRef}>
            {/* Big bow ribbon: starts visible, flips horizontally (rotateY) on scroll */}
            <motion.img
              alt=""
              className="nce-location-ribbon"
              src="/images/locationribbon.webp"
              draggable={false}
              initial={{ rotateY: 0 }}
              animate={isInView ? { rotateY: 180 } : { rotateY: 0 }}
              transition={{ duration: 1.6, ease: [0.45, 0, 0.55, 1] }}
              style={{ backfaceVisibility: 'hidden' }}
            />
            {/* Round venue photo: reveals as ribbon turns past 90deg */}
            <motion.img
              alt=""
              className="nce-location-photo"
              src={SITE_CONTENT.venuePhoto}
              draggable={false}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
              transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
