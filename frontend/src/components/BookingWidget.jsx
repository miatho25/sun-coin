import React, { useEffect, useRef, useState } from 'react';

// Square Appointments embed widget loader.
// The Square script injects the booking UI into the DOM near where it is appended.
const SQUARE_SRC =
  'https://square.site/appointments/buyer/widget/hu45eni7dsgf3z/LQV6PSHJ0D9VE.js';

const BookingWidget = () => {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Avoid double-injecting
    if (el.querySelector('script[data-square-widget]')) {
      setLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = SQUARE_SRC;
    script.async = true;
    script.setAttribute('data-square-widget', 'true');
    script.onload = () => setLoaded(true);
    script.onerror = () => setLoaded(true);
    el.appendChild(script);
  }, []);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-3 text-[#0a0a0a]/60 text-[14px]">
            <span className="w-4 h-4 rounded-full border-2 border-[#0a0a0a]/20 border-t-[#0a0a0a] animate-spin" />
            Loading booking widget…
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        id="square-booking-container"
        className="min-h-[420px] w-full"
      />
    </div>
  );
};

export default BookingWidget;
