import { useState, useRef } from 'react';
import { SITE_CONTENT } from '../../data/content';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Audio playback prevented by browser:', err));
    }
  };

  return (
    <div className="nce-music-section">
      <audio
        ref={audioRef}
        loop
        src={SITE_CONTENT.musicSrc}
        preload="auto"
      />

      <button
        id="music-btn-main"
        onClick={toggleMusic}
        aria-label="Toggle background music"
        type="button"
      >
        {isPlaying ? (
          <svg
            color="#fff"
            fill="currentColor"
            height="3rem"
            stroke="currentColor"
            strokeWidth="0"
            style={{ color: 'rgb(255, 255, 255)' }}
            viewBox="0 0 24 24"
            width="3rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
          </svg>
        ) : (
          <svg
            color="#fff"
            fill="currentColor"
            height="3rem"
            stroke="currentColor"
            strokeWidth="0"
            style={{ color: 'rgb(255, 255, 255)' }}
            viewBox="0 0 24 24"
            width="3rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
          </svg>
        )}
      </button>

      <a
        id="call-btn"
        href={`tel:${SITE_CONTENT.phoneNumber}`}
        aria-label="Call family"
      >
        <svg
          color="#fff"
          fill="currentColor"
          height="2rem"
          stroke="currentColor"
          strokeWidth="0"
          style={{ color: 'rgb(255, 255, 255)' }}
          viewBox="0 0 512 512"
          width="2rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
      </a>
    </div>
  );
}
