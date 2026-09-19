import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log(`${files.length} file(s) selected for upload.`);
    }
  };

  return (
    <main>
      <section id="nce-gallery-section">
        {/* Corner Floral & Leaf Decorations */}
        <div className="nce-gallery-topleft">
          <img alt="" src="/svg/flower.svg" draggable={false} />
        </div>
        <div className="nce-gallery-topright">
          <img alt="" src="/svg/flower.svg" draggable={false} />
        </div>
        <div className="nce-gallery-bottomleft">
          <img alt="" src="/svg/flower.svg" draggable={false} />
        </div>
        <div className="nce-gallery-bottom">
          <img alt="" src="/svg/rightleaf.svg" draggable={false} />
        </div>

        <div className="nimbus-container">
          <div className="nce-gallery-container">
            <h1 className="nce-gallery-title">Gallery</h1>

            <div className="nce-gallery-content">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />

              <button
                type="button"
                className="upload-btn"
                onClick={handleUploadClick}
                aria-label="Upload photos"
              >
                Upload
              </button>

              <div className="pagination">
                <button
                  type="button"
                  className="pagination-previous-btn"
                  aria-label="Previous page"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                </button>
                <span className="pagination-text">Page 1</span>
                <button
                  type="button"
                  className="pagination-next-btn"
                  aria-label="Next page"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
