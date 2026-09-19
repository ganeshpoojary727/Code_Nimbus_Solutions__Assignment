import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '../../data/content';

export default function Schedule() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeIndex < TIMELINE_EVENTS.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
    dragStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeIndex < TIMELINE_EVENTS.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
    dragStartX.current = null;
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && activeIndex < TIMELINE_EVENTS.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    }
    dragStartX.current = null;
  };

  return (
    <section id="nce-schedule-section">
      {/* Static flowers: no animation as requested */}
      <div className="nce-schedule-topflower">
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </div>
      <div className="nce-schedule-bottomflower-one">
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </div>
      <div className="nce-schedule-bottomflower-two">
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </div>

      {/* Static leaves */}
      <div className="nce-schedule-bottomleaf">
        <img alt="" src="/svg/schedulebottomleaf.svg" draggable={false} />
      </div>
      <div className="nce-schedule-topleaf">
        <img alt="" src="/svg/wishestopleaf.svg" draggable={false} />
      </div>

      <div className="nimbus-container">
        <div className="nce-schedule-container">
          {/* Normal schedule text entrance animation */}
          <motion.p
            className="nce-schedule-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Schedule
          </motion.p>

          <div
            className="nce-schedule-carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="nce-schedule-carousel-track"
              style={{
                transform: `translateX(calc(50% - 50% * 0.72 - ${activeIndex} * 72% - ${activeIndex} * 1.2rem))`,
              }}
            >
              {TIMELINE_EVENTS.map((event, idx) => (
                <div
                  key={event.time}
                  className={`nce-schedule-card ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Star animation in every widget */}
                  <motion.div
                    className="nce-card-star-left"
                    animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity, delay: 0.2 }}
                  >
                    <img alt="" src="/svg/star.svg" draggable={false} />
                  </motion.div>
                  <motion.div
                    className="nce-card-star-right"
                    animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, delay: 0.9 }}
                  >
                    <img alt="" src="/svg/star.svg" draggable={false} />
                  </motion.div>

                  <div className="nce-card-ribbon">
                    <img alt="" src="/svg/ribbon.webp" draggable={false} />
                  </div>
                  <p className="nce-card-event-name">{event.title}</p>
                  <p className="nce-card-event-time">{event.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="nce-schedule-dots-wrapper">
            <div
              className="nce-schedule-dots-track"
              style={{
                transform: `translateX(calc(-${activeIndex} * 1.4rem + 2rem))`,
              }}
            >
              {TIMELINE_EVENTS.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`nce-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
