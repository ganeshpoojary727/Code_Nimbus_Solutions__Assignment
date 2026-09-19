import { motion } from 'framer-motion';

export default function Nam002WarmInvite() {
  return (
    <section id="nam002-warm-invite-section">
      {/* Top Leaf */}
      <motion.div
        className="nam002-warminvite-topleaf"
        initial={{ opacity: 0, x: -25, y: -25 }}
        whileInView={{ opacity: 1, x: -6, y: -10 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img alt="" src="/svg/wishestopleaf.svg" draggable={false} />
      </motion.div>

      {/* Bottom Leaf */}
      <motion.div
        className="nam002-warminvite-bottomleaf"
        initial={{ opacity: 0, x: 25, y: 25 }}
        whileInView={{ opacity: 1, x: 6, y: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img alt="" src="/svg/wishesbottomleaf.svg" draggable={false} />
      </motion.div>

      {/* Top Flower (Right Top) — slowly becomes bigger after main widget animation */}
      <motion.div
        className="nam002-warminvite-topflower"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
      >
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </motion.div>

      {/* Bottom Flower */}
      <motion.div
        className="nam002-warminvite-bottomflower"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
      >
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </motion.div>

      {/* Right Flower */}
      <motion.div
        className="nam002-warminvite-rightflower"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 1.15 }}
      >
        <img alt="" src="/svg/flower.svg" draggable={false} />
      </motion.div>

      {/* Stars */}
      <motion.div
        className="nam002-warminvite-topstar"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      >
        <img alt="" src="/svg/star.svg" draggable={false} />
      </motion.div>
      <motion.div
        className="nam002-warminvite-bottomstar"
        animate={{ opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
      >
        <img alt="" src="/svg/star.svg" draggable={false} />
      </motion.div>
      <motion.div
        className="nam002-warminvite-leftstar"
        animate={{ opacity: [0.4, 0.95, 0.4] }}
        transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
      >
        <img alt="" src="/svg/star.svg" draggable={false} />
      </motion.div>

      {/* Container */}
      <div className="nimbus-container">
        <motion.div
          className="nam002-warminvite-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="nam002-warminvite-innerflower"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          >
            <img alt="" src="/svg/flower.svg" draggable={false} />
          </motion.div>

          <motion.div
            className="nam002-warminvite-innerstar-one"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
          >
            <img alt="" src="/svg/star.svg" draggable={false} />
          </motion.div>

          <motion.div
            className="nam002-warminvite-innerstar-two"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 0.6 }}
          >
            <img alt="" src="/svg/star.svg" draggable={false} />
          </motion.div>

          <div className="nam002-warminvite-content">
            <motion.p
              className="nam002-warminvite-title"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            >
              Warm Invite
            </motion.p>
            <motion.p
              className="nam002-warminvite-text"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            >
              With hearts overflowing with gratitude and joy, Mr &amp; Mrs Nair joyfully invite you to the naming ceremony of their little blessing. Come, celebrate this beautiful milestone with us, and shower our little Vihaan with your warmest wishes and love.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
