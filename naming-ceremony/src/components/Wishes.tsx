import { asset } from '../utils/assets';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_WISHES, type Wish } from '../data/content';

interface WishesProps {
  wishes?: Wish[];
}

export default function Wishes({ wishes = INITIAL_WISHES }: WishesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? wishes.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === wishes.length - 1 ? 0 : c + 1));
  };

  const currentWish = wishes[currentIndex] || wishes[0];

  return (
    <section id="nce-wishes-section">
      <div className="nce-wishes-leftflower">
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </div>
      <div className="nce-wishes-bottomflower">
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </div>
      <div className="nce-wishes-rightstar">
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </div>
      <div className="nce-wishes-topstar">
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </div>
      <div className="nce-wishes-topleaf">
        <img alt="" src={asset('/svg/wishestopleaf.svg')} draggable={false} />
      </div>
      <div className="nce-wishes-bottomleaf">
        <img alt="" src={asset('/svg/wishesbottomleaf.svg')} draggable={false} />
      </div>

      <div className="nimbus-container">
        <div className="nce-wishes-container">
          <p className="nce-wishes-title">Wishes for the baby</p>

          <div className="nce-wishes-content">
            <div className="nce-wishes-innerstar-one">
              <img alt="" src={asset('/svg/star.svg')} draggable={false} />
            </div>
            <div className="nce-wishes-innerstar-two">
              <img alt="" src={asset('/svg/star.svg')} draggable={false} />
            </div>

            <img alt="" className="nce-wishes-ribbon" src={asset('/svg/ribbon.webp')} draggable={false} />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="nce-wish-item"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="nce-wish-author">{currentWish?.name || 'Well Wisher'}</p>
                <p className="nce-wish-message">{currentWish?.message || ''}</p>
              </motion.div>
            </AnimatePresence>

            <hr className="nce-wishes-divider" />

            <div className="nce-wishes-pagination">
              <button
                className="nce-wishes-arrow"
                onClick={prev}
                aria-label="Previous wish"
                type="button"
              >
                <svg
                  color="white"
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  strokeWidth="0"
                  style={{ color: 'white' }}
                  viewBox="0 0 320 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>

              <span className="nce-wishes-pagecount">
                {currentIndex + 1} / {wishes.length}
              </span>

              <button
                className="nce-wishes-arrow"
                onClick={next}
                aria-label="Next wish"
                type="button"
              >
                <svg
                  color="white"
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  strokeWidth="0"
                  style={{ color: 'white' }}
                  viewBox="0 0 320 512"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
