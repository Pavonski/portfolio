import { useEffect, useRef } from 'react';

export default function VideoModal({ isOpen, src, orientation, closeModal }) {
  const modalRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (isOpen) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
      videoRef.current?.load();
    }
  }, [isOpen, src]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) closeModal();
      }}
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
    >
      <div
        className={`relative ${
          orientation === 'vertical'
            ? 'w-[90vw] max-w-[400px] aspect-[9/16]'
            : 'w-full max-w-4xl aspect-video'
        } animate-[fadeIn_0.3s_ease-out]`}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          className="w-full h-full rounded-lg object-contain"
        />
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white text-3xl hover:scale-125 transition"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
// CSS for fadeIn animation
// Add this to your CSS file
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }        