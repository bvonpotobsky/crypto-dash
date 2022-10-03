interface svgProps {
  className?: string;
  color?: string;
  size?: string | number;
  strokeWidth?: string | number;
  direction?: "left" | "right" | "top" | "bottom";
}

export const BrandLogo = ({color = "currentColor", className = ""}: svgProps) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 2507 2191"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M136.577 139.444H2367.34" stroke={color} strokeWidth="273.154" strokeLinecap="square" />
    <path d="M523.546 1095.48H1991.75" stroke={color} strokeWidth="273.154" strokeLinecap="square" />
    <path d="M136.577 2051.52H2367.34" stroke={color} strokeWidth="273.154" strokeLinecap="square" />
    <path d="M113.814 93.9185V367.073" stroke={color} strokeWidth="227.628" />
    <path d="M500.783 901.109V1288.08" stroke={color} strokeWidth="227.628" />
    <path d="M2025.89 901.109V1288.08" stroke={color} strokeWidth="227.628" />
    <path d="M113.814 1823.89V2097.05" stroke={color} strokeWidth="227.628" />
    <path d="M2390.1 1823.89V2097.05" stroke={color} strokeWidth="227.628" />
    <path d="M2390.1 93.9185V367.073" stroke={color} strokeWidth="227.628" />
  </svg>
);

export const Sun = ({className, color = "currentColor", size = "22", strokeWidth = "1.5"}: svgProps): JSX.Element => (
  <svg
    className={className}
    data-testid="geist-icon"
    fill="none"
    shapeRendering="geometricPrecision"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    height={size}
    width={size}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="M4.22 4.22l1.42 1.42" />
    <path d="M18.36 18.36l1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="M4.22 19.78l1.42-1.42" />
    <path d="M18.36 5.64l1.42-1.42" />
  </svg>
);

export const Moon = ({className, color = "currentColor", size = "22", strokeWidth = "1.5"}: svgProps): JSX.Element => (
  <svg
    className={className}
    data-testid="geist-icon"
    fill="none"
    shapeRendering="geometricPrecision"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    height={size}
    width={size}
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const Wallet = ({
  className,
  color = "currentColor",
  size = "36",
  strokeWidth = "1.5",
}: svgProps): JSX.Element => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
  </svg>
);
