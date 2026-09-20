import { asset } from '../utils/assets';
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { type Wish, AI_WISH_TEMPLATES } from '../data/content';

interface SendWishesProps {
  onSubmit?: (wish: Wish) => void;
}

export default function SendWishes({ onSubmit }: SendWishesProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleGenerateAIWish = () => {
    const randomWish =
      AI_WISH_TEMPLATES[Math.floor(Math.random() * AI_WISH_TEMPLATES.length)];
    setMessage(randomWish);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      if (onSubmit) {
        onSubmit({
          id: Date.now(),
          name: name.trim(),
          message: message.trim(),
        });
      }
      setName('');
      setMessage('');
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 400);
  };

  return (
    <section id="nce-sendwishes-section">
      {/* Decorative flowers */}
      <div className="nce-sendwishes-topflower">
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </div>
      <div className="nce-sendwishes-bottomflower">
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </div>
      <div className="nce-sendwishes-rightflower">
        <img alt="" src={asset('/svg/flower.svg')} draggable={false} />
      </div>

      {/* Background stars */}
      <motion.div
        className="nce-sendwishes-leftstar"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.6, ease: 'easeInOut', repeat: Infinity, delay: 0 }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>
      <motion.div
        className="nce-sendwishes-topstar"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity, delay: 0.8 }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>
      <motion.div
        className="nce-sendwishes-bottomstar-one"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity, delay: 1.5 }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>
      <motion.div
        className="nce-sendwishes-bottomstar-two"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3.4, ease: 'easeInOut', repeat: Infinity, delay: 2.2 }}
      >
        <img alt="" src={asset('/svg/star.svg')} draggable={false} />
      </motion.div>

      <div className="nce-sendwishes-topcorner">
        <img alt="" draggable={false} />
      </div>
      <div className="nce-sendwishes-bottomcorner">
        <img alt="" draggable={false} />
      </div>

      <div className="nimbus-container">
        <div className="nce-sendwishes-container">
          <p className="nce-sendwishes-title">Send your wishes</p>

          <div className="nce-sendwishes-content">
            {/* Frame container */}
            <motion.img
              alt=""
              className="nce-sendwishes-tomb"
              src={asset('/svg/sendwishtomb.svg')}
              draggable={false}
              initial={{ scale: 0.86, opacity: 0.4 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              style={{ transformOrigin: 'center center' }}
            />

            <div className="nce-sendwishes-wisher">
              <div className="Wisher-Section" id="wisher-section">
                <div className="wisher-container" id="wisher-container">
                  <form className="wisher-form" id="wisher-form" onSubmit={handleSubmit}>
                    <input
                      className="wisher-input"
                      id="wisher-name-input"
                      placeholder="Your Name"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div className="wisher-textarea-wrapper">
                      <textarea
                        className="wisher-textarea"
                        id="wisher-message-input"
                        maxLength={200}
                        placeholder="Your Wishes"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button
                        className="wisher-ai-btn"
                        type="button"
                        onClick={handleGenerateAIWish}
                      >
                        <span className="wisher-ai-sparkle">
                          <svg
                            aria-hidden="true"
                            fill="currentColor"
                            height="1em"
                            stroke="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="ai-text">Generate AI wishes</span>
                      </button>
                    </div>

                    <div className="wisher-btn-container">
                      <button
                        className="wisher-button"
                        id="wisher-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : submitted ? 'Sent!' : 'Submit'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
