import { motion } from "motion/react";

export function LaptopIllustration() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E0C6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2E90FA" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E0C6" />
          <stop offset="100%" stopColor="#2E90FA" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Laptop Base */}
      <g>
        {/* Laptop bottom/keyboard */}
        <path
          d="M 50 480 L 750 480 L 780 520 L 20 520 L 50 480 Z"
          fill="#1A2332"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />

        {/* Trackpad */}
        <rect
          x="350"
          y="490"
          width="100"
          height="20"
          rx="4"
          fill="#0A0F1A"
          stroke="#00E0C6"
          strokeWidth="0.5"
          opacity="0.6"
        />

        {/* Screen bezel */}
        <rect
          x="100"
          y="80"
          width="600"
          height="400"
          rx="12"
          fill="#0A0F1A"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        {/* Screen */}
        <rect
          x="120"
          y="100"
          width="560"
          height="360"
          rx="4"
          fill="#121A2B"
        />

        {/* Browser Window */}
        <g>
          {/* Browser header */}
          <rect
            x="140"
            y="120"
            width="520"
            height="40"
            rx="8"
            fill="rgba(18, 26, 43, 0.9)"
            stroke="rgba(0, 224, 198, 0.2)"
            strokeWidth="1"
          />

          {/* Browser dots */}
          <circle cx="160" cy="140" r="5" fill="#FF5F56" opacity="0.8" />
          <circle cx="180" cy="140" r="5" fill="#FFBD2E" opacity="0.8" />
          <circle cx="200" cy="140" r="5" fill="#27C93F" opacity="0.8" />

          {/* URL bar */}
          <rect
            x="230"
            y="130"
            width="280"
            height="20"
            rx="10"
            fill="rgba(18, 26, 43, 0.8)"
            stroke="rgba(0, 224, 198, 0.3)"
            strokeWidth="1"
          />

          {/* URL text simulation */}
          <line
            x1="245"
            y1="140"
            x2="280"
            y2="140"
            stroke="#00E0C6"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="290"
            y1="140"
            x2="340"
            y2="140"
            stroke="rgba(230, 237, 246, 0.3)"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Browser content area */}
          <rect
            x="140"
            y="170"
            width="520"
            height="270"
            rx="4"
            fill="url(#screenGradient)"
          />

          {/* Content blocks */}
          <g opacity="0.6">
            {/* Hero section mockup */}
            <rect
              x="160"
              y="190"
              width="480"
              height="80"
              rx="8"
              fill="rgba(18, 26, 43, 0.6)"
              stroke="rgba(0, 224, 198, 0.2)"
              strokeWidth="1"
            />

            {/* Accent line */}
            <rect
              x="180"
              y="210"
              width="120"
              height="4"
              rx="2"
              fill="url(#accentGradient)"
              filter="url(#glow)"
            >
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>

            {/* Content lines */}
            <rect x="180" y="230" width="200" height="3" rx="1.5" fill="rgba(230, 237, 246, 0.3)" />
            <rect x="180" y="240" width="160" height="3" rx="1.5" fill="rgba(230, 237, 246, 0.2)" />

            {/* Cards */}
            <rect
              x="160"
              y="290"
              width="140"
              height="100"
              rx="8"
              fill="rgba(18, 26, 43, 0.5)"
              stroke="rgba(46, 144, 250, 0.2)"
              strokeWidth="1"
            />
            <rect
              x="320"
              y="290"
              width="140"
              height="100"
              rx="8"
              fill="rgba(18, 26, 43, 0.5)"
              stroke="rgba(0, 224, 198, 0.2)"
              strokeWidth="1"
            />
            <rect
              x="480"
              y="290"
              width="140"
              height="100"
              rx="8"
              fill="rgba(18, 26, 43, 0.5)"
              stroke="rgba(46, 144, 250, 0.2)"
              strokeWidth="1"
            />

            {/* Card accents */}
            <circle cx="190" cy="320" r="12" fill="rgba(0, 224, 198, 0.3)" />
            <circle cx="350" cy="320" r="12" fill="rgba(46, 144, 250, 0.3)" />
            <circle cx="510" cy="320" r="12" fill="rgba(0, 224, 198, 0.3)" />
          </g>
        </g>

        {/* Screen glow */}
        <rect
          x="120"
          y="100"
          width="560"
          height="360"
          rx="4"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          opacity="0.3"
          filter="url(#glow)"
        />

        {/* Webcam */}
        <circle
          cx="400"
          cy="90"
          r="3"
          fill="rgba(255, 255, 255, 0.2)"
        />
      </g>

      {/* Floating elements */}
      <g opacity="0.4">
        {/* Code brackets */}
        <text
          x="60"
          y="200"
          fontSize="40"
          fill="#00E0C6"
          fontFamily="monospace"
          opacity="0.3"
        >
          &lt;/&gt;
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="4s"
            repeatCount="indefinite"
          />
        </text>

        {/* Curly braces */}
        <text
          x="720"
          y="350"
          fontSize="36"
          fill="#2E90FA"
          fontFamily="monospace"
          opacity="0.3"
        >
          &#123;&#125;
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,10; 0,0"
            dur="5s"
            repeatCount="indefinite"
          />
        </text>

        {/* Geometric shapes */}
        <rect
          x="680"
          y="120"
          width="30"
          height="30"
          rx="4"
          fill="none"
          stroke="rgba(0, 224, 198, 0.3)"
          strokeWidth="2"
          transform="rotate(15 695 135)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="15 695 135; 30 695 135; 15 695 135"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>

        <circle
          cx="70"
          cy="400"
          r="20"
          fill="none"
          stroke="rgba(46, 144, 250, 0.3)"
          strokeWidth="2"
        >
          <animate
            attributeName="r"
            values="20;25;20"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
