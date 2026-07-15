interface LogoProps {
  /** Height of the mark in px — text scales proportionally */
  size?: number;
  /** Show "New Era / Beauty Clinic" text alongside the mark */
  showText?: boolean;
  /** 'light' = sage mark on transparent (default), 'dark' = ivory mark on transparent */
  variant?: 'light' | 'dark';
  className?: string;
}

const SAGE   = 'oklch(0.55 0.15 145)';
const SAGE2  = 'oklch(0.65 0.12 145)';   // lighter sage for side petals
const ROSE   = 'oklch(0.78 0.1 25)';     // dusty rose accent
const IVORY  = 'oklch(0.95 0.002 70)';
const CHARCOAL = 'oklch(0.15 0.01 65)';

export function Logo({
  size = 36,
  showText = true,
  variant = 'light',
  className = '',
}: LogoProps) {
  const markColor  = variant === 'dark' ? IVORY  : SAGE;
  const markColor2 = variant === 'dark' ? IVORY  : SAGE2;
  const textColor  = variant === 'dark' ? IVORY  : CHARCOAL;
  const subColor   = variant === 'dark' ? 'rgba(255,255,255,0.55)' : 'oklch(0.45 0.025 145)';

  // The botanical mark is drawn on a 32×32 internal canvas.
  // Three leaf petals emerge from a common base at (16, 22).
  // Center petal tip: (16, 6) — straight up.
  // Side petals are the same shape rotated ±42° around the base.
  // A delicate stem + horizontal serif base finishes the mark.

  const petalPath = 'M 16 22 C 19.4 19 19.4 11 16 6 C 12.6 11 12.6 19 16 22 Z';
  const scale = size / 32;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG botanical mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left petal */}
        <path
          d={petalPath}
          fill={markColor2}
          fillOpacity={0.65}
          transform="rotate(-42, 16, 22)"
        />

        {/* Right petal */}
        <path
          d={petalPath}
          fill={markColor2}
          fillOpacity={0.65}
          transform="rotate(42, 16, 22)"
        />

        {/* Center petal — slightly taller, full opacity, on top */}
        <path
          d="M 16 22 C 19.4 18.5 19.4 10 16 5 C 12.6 10 12.6 18.5 16 22 Z"
          fill={markColor}
        />

        {/* Rose accent dot at petal base */}
        <circle cx="16" cy="22" r="2" fill={ROSE} />

        {/* Stem */}
        <line
          x1="16" y1="22"
          x2="16" y2="27.5"
          stroke={markColor}
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Serif base — a delicate horizontal line */}
        <line
          x1="11.5" y1="27.5"
          x2="20.5" y2="27.5"
          stroke={markColor}
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Left serif ear */}
        <line
          x1="11.5" y1="27.5"
          x2="11.5" y2="26.5"
          stroke={markColor}
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Right serif ear */}
        <line
          x1="20.5" y1="27.5"
          x2="20.5" y2="26.5"
          stroke={markColor}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none select-none">
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: `${size * 0.44}px`,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: textColor,
              lineHeight: 1.15,
            }}
          >
            New Era
          </span>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: `${size * 0.22}px`,
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: subColor,
              lineHeight: 1.2,
            }}
          >
            Beauty Clinic
          </span>
        </div>
      )}
    </div>
  );
}
