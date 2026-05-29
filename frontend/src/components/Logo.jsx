import React from 'react';
import { logoImage } from '../mock';

// Sun Coin Laundry logo — use the original image from the site
const Logo = ({ size = 92 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="shrink-0 select-none overflow-hidden rounded-[10px]"
      aria-label="Sun Coin Laundry"
    >
      <img
        src={logoImage}
        alt="Sun Coin Laundry"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
};

export default Logo;
