import React, { useRef, useEffect } from "react";

const cards = [
  { img: "/images/female.png", title: "Qualified Asatizah", text: "Experienced and certified teachers to guide you with care." },
  { img: "/images/time.png", title: "Flexible Timings", text: "Morning & evening slots to fit your routine, no matter how busy you are." },
  { img: "/images/t.png", title: "Female Asatizah", text: "Dedicated female Asatizah for sisters and kids, ensuring comfort and ease." },
  { img: "/images/cardd.png", title: "Engaging Lessons", text: "Learn Quran with practical exercises, recitation, and real-time feedback." },
  { img: "/images/guide.png", title: "Gentle Guidance", text: "Personalized classes or group sessions for interactive learning." },
  { img: "/images/donated.png", title: "Community Support", text: "Be part of a supportive environment that motivates and inspires you." },
  { img: "/images/donate.png", title: "Your Hadiya, Their Relief", text: "Every contribution brings hope, dignity, and relief to those in need." },
];

const Slider = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const speedRef = useRef(0.35); 
  const pausedRef = useRef(false);
  const halfWidthRef = useRef(0);
  const infiniteCards = [...cards, ...cards];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const recalc = () => {
      const total = track.scrollWidth;
      halfWidthRef.current = total / 2;
      posRef.current = posRef.current % halfWidthRef.current;
    };

    // animation loop
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += speedRef.current;
        if (posRef.current >= halfWidthRef.current) {
          posRef.current -= halfWidthRef.current;
        }
        track.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    recalc();
    rafRef.current = requestAnimationFrame(step);

    // Recalculate on resize / orientation change
    const onResize = () => {
      // briefly pause to avoid jitter while measuring
      pausedRef.current = true;
      // allow layout to settle, then recalc and resume
      requestAnimationFrame(() => {
        recalc();
        pausedRef.current = false;
      });
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // Clean up
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  // Pause on hover / touch (good UX)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    // touch start/stop for mobile
    container.addEventListener("touchstart", onEnter, { passive: true });
    container.addEventListener("touchend", onLeave, { passive: true });

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("touchstart", onEnter);
      container.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <>
<h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mt-15 mb-10 relative text-center">
  <span className="inline-block">
    Why Choose Us
  </span>
</h2>
 <section className="bg-pink-900 py-4 overflow-hidden">
        {/* containerRef used to detect hover/touch */}
        <div ref={containerRef} className="w-full overflow-hidden">
          {/* trackRef is transformed by JS; flex + gap keeps layout */}
          <div
            ref={trackRef}
            className="flex items-stretch gap-4 will-change-transform"
            style={{
              alignItems: "stretch",
            }}
          >
            {infiniteCards.map((card, index) => (
              <div
                key={index}
                className="shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[250px] bg-white rounded-[15px] shadow-md p-4 flex flex-col items-center justify-between"
                // keep hover transform separate (no animation conflicts)
                style={{ transition: "transform .25s, box-shadow .25s" }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-contain rounded-md mb-3"
                />
                <h5 className="text-xl md:text-2xl font-bold text-pink-900 mb-1 text-center">
                  {card.title}
                </h5>
                <p className="text-sm md:text-base text-pink-800 text-center leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* small helper styles */}
      <style jsx>{`
        /* remove scrollbar when track overflows on some browsers */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Slider;
