import React from 'react';

// Sun Coin Laundry logo — handcrafted SVG matching the original look:
// cream square, two blue mountain/wave shapes, an orange sun,
// "SUN COIN" in navy blue, "LAUNDRY" underline in orange.
const Logo = ({ size = 92 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="shrink-0 select-none"
      aria-label="Sun Coin Laundry"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* cream background */}
        <rect x="0" y="0" width="200" height="200" fill="#F6EFD9" />

        {/* sun */}
        <g>
          <circle cx="100" cy="82" r="18" fill="#F7A93C" />
          {/* sun rays */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <rect
                key={i}
                x="98.5"
                y="48"
                width="3"
                height="10"
                rx="1.5"
                fill="#F7A93C"
                transform={`rotate(${angle} 100 82)`}
              />
            );
          })}
        </g>

        {/* mountain (dark blue) */}
        <path
          d="M32 118 L78 78 L110 108 L138 86 L168 118 Z"
          fill="#1F4C80"
        />
        {/* wave 1 */}
        <path
          d="M24 132 C 48 120, 72 144, 100 132 C 128 120, 152 144, 176 132 L176 148 L24 148 Z"
          fill="#2C66A3"
        />
        {/* wave 2 */}
        <path
          d="M24 148 C 52 138, 76 160, 100 148 C 128 136, 150 158, 176 148 L176 162 L24 162 Z"
          fill="#1F4C80"
        />

        {/* SUN COIN text */}
        <text
          x="100"
          y="180"
          textAnchor="middle"
          fontFamily="Archivo, sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="2"
          fill="#1F4C80"
        >
          SUN COIN
        </text>
        {/* LAUNDRY text */}
        <text
          x="100"
          y="196"
          textAnchor="middle"
          fontFamily="Archivo, sans-serif"
          fontWeight="700"
          fontSize="10"
          letterSpacing="6"
          fill="#F0A838"
        >
          LAUNDRY
        </text>
      </svg>
    </div>
  );
};

export default Logo;
