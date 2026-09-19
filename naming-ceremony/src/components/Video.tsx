import { SITE_CONTENT } from '../data/content';
import { asset } from '../utils/assets';

export default function Video() {
  return (
    <section id="nce-video-section">
      <div className="nce-video-top">
        <img alt="" src={asset('/svg/videotop.svg')} draggable={false} />
      </div>
      <div className="nce-video-bottom">
        <img alt="" src={asset('/svg/videobottom.svg')} draggable={false} />
      </div>

      <div className="nimbus-container">
        <div className="nce-video-container">
          <div className="nce-video-wrapper">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="nce-video"
              frameBorder="0"
              src={SITE_CONTENT.youtubeEmbedUrl}
              title="Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
