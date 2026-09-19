import { asset } from '../utils/assets';
import { motion, type Variants } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { SITE_CONTENT } from '../data/content';

const COUNTDOWN_STARS = [
  { id: '1', style: { top: '10%', left: '42%', width: '3.5rem' } },
  { id: '2', style: { top: '2%', left: '60%', width: '3.5rem' } },
  { id: '3', style: { top: '50%', left: '90%', width: '3.5rem' } },
  { id: '4', style: { top: '74%', left: '10%', width: '3.5rem' } },
  { id: '5', style: { top: '85%', left: '30%', width: '3.5rem' } },
];

// STAGE 1: Minimal up-and-down bounce entrance (0.0s - 0.8s)
const ribbonVariants: Variants = {
  hidden: { opacity: 0, y: -45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5, ease: 'easeOut' },
      y: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
      y: { duration: 0.75, ease: [0.34, 1.3, 0.64, 1], delay: 0.1 },
    },
  },
};

// STAGE 2: 3D Flip Card animation starting right after Stage 1 (0.75s+)
const cardVariants: Variants = {
  hidden: { rotateY: 0 },
  visible: (idx: number) => ({
    rotateY: 180,
    transition: {
      duration: 0.85,
      ease: [0.34, 1.4, 0.64, 1],
      delay: 0.75 + idx * 0.14,
    },
  }),
};

// STAGE 3: Flowers pop up small-to-big right after numbers finish, NO rotation (1.95s+)
const flower1Variants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.95,
      duration: 0.65,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

const flower2Variants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 2.15,
      duration: 0.65,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

const TIME_UNIT_LABELS = [
  { label: 'Days', key: 'days' as const },
  { label: 'Hrs', key: 'hours' as const },
  { label: 'Mins', key: 'minutes' as const },
  { label: 'Secs', key: 'seconds' as const },
];

function CountdownNumber({
  targetDate,
  unit,
}: {
  targetDate: Date;
  unit: 'days' | 'hours' | 'minutes' | 'seconds';
}) {
  const countdown = useCountdown(targetDate);
  return <>{countdown[unit]}</>;
}

export default function CountDown() {
  return (
    <motion.section
      id="nce-countDown"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Countdown Leaf */}
      <motion.div
        className="nce-countDown-leaf"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 2.5, 0],
        }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        <img alt="" src={asset('/svg/countdownleaf.svg')} draggable={false} />
      </motion.div>

      {/* Flower 1 — STAGE 3: pops up small-to-big right after flip complete, NO rotation */}
      <motion.div
        className="nce-countDown-flower-1"
        variants={flower1Variants}
      >
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </motion.div>

      {/* Flower 2 — STAGE 3: pops up small-to-big right after Flower 1, NO rotation */}
      <motion.div
        className="nce-countDown-flower-2"
        variants={flower2Variants}
      >
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </motion.div>

      {/* Stars 1-5 (ambient twinkle) */}
      {COUNTDOWN_STARS.map((star, i) => (
        <motion.div
          key={star.id}
          className={`nce-countDown-star-${star.id}`}
          style={star.style}
          animate={{
            opacity: [0.3, 0.95, 0.3],
            scale: [0.85, 1.05, 0.85],
          }}
          transition={{
            duration: 3.5 + i * 0.8,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          <img alt="" src={asset('/svg/star.svg')} draggable={false} />
        </motion.div>
      ))}

      {/* Main Nimbus Container */}
      <div className="nimbus-container">
        <div className="nce-countDown-container">
          {/* Top Ribbon — STAGE 1: minimal up-and-down bounce */}
          <motion.div
            className="nce-countDown-ribbon"
            variants={ribbonVariants}
          >
            <img alt="" src={asset('/svg/ribbon.webp')} draggable={false} />
          </motion.div>

          <div className="nce-countDown-content">
            {/* Title — STAGE 1: minimal up-and-down bounce */}
            <motion.p
              className="nce-countDown-title"
              variants={titleVariants}
            >
              Let the countdown begin
            </motion.p>

            <div className="nce-countDown-date">
              <div className="shared-countdown">
                {TIME_UNIT_LABELS.map((unit, idx) => (
                  <div key={unit.label} className="time-box nce-flip-box">
                    {/* STAGE 2: Number flip card animation after Stage 1 */}
                    <motion.div
                      className="nce-flip-card"
                      custom={idx}
                      variants={cardVariants}
                    >
                      <div className="nce-flip-face nce-flip-front">
                        <div className="nce-circle">
                          <img className="nce-circle-star" src={asset('/svg/star.svg')} alt="" />
                        </div>
                      </div>
                      <div className="nce-flip-face nce-flip-back">
                        <span className="nce-num">
                          <CountdownNumber
                            targetDate={SITE_CONTENT.ceremonyDate}
                            unit={unit.key}
                          />
                        </span>
                      </div>
                    </motion.div>
                    <span className="nce-label">{unit.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
