import { SITE_CONTENT } from '../../data/content';

export default function Nam002Video() {
  return (
    <section id="nam002-video-section">
      <div className="nam002-video-top">
        <img alt="" src="/svg/videotop.svg" draggable={false} />
      </div>
      <div className="nam002-video-bottom">
        <img alt="" src="/svg/videobottom.svg" draggable={false} />
      </div>

      <div className="nimbus-container">
        <div className="nam002-video-container">
          <div className="nam002-video-wrapper">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="nam002-video"
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
