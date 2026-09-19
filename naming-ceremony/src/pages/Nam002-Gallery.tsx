import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/content';
import Nam002Footer from '../components/Nam002/Nam002-Footer';

export default function Nam002Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <main>
      <section id="nam002-gallery-section">
        <div className="nam002-gallery-topleft">
          <img alt="" src="/svg/wishestopleaf.svg" draggable={false} />
        </div>
        <div className="nam002-gallery-topright">
          <img alt="" src="/svg/wishestopleaf.svg" draggable={false} />
        </div>
        <div className="nam002-gallery-bottomleft">
          <img alt="" src="/svg/wishesbottomleaf.svg" draggable={false} />
        </div>
        <div className="nam002-gallery-bottom">
          <img alt="" src="/svg/flower.svg" draggable={false} />
        </div>

        <div className="nimbus-container">
          <div className="nam002-gallery-container">
            <h1 className="nam002-gallery-title">Gallery</h1>

            <div className="nam002-gallery-content w-full">
              <div className="gallery">
                {GALLERY_IMAGES.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="gallery-item cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full aspect-[16/9] object-cover block group-hover:scale-105 transition-transform duration-300"
                      draggable={false}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 p-2"
              aria-label="Close lightbox"
              type="button"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-10"
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.img
              key={lightboxIndex}
              src={GALLERY_IMAGES[lightboxIndex].url}
              alt={GALLERY_IMAGES[lightboxIndex].caption}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-10"
              aria-label="Next image"
              type="button"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Nam002Footer />
    </main>
  );
}
