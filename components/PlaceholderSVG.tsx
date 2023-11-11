export default function PlaceholderSVG({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <div className="relative">
      <svg
        width="199"
        height="199"
        viewBox="0 0 199 199"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.3"
          cx="99.5"
          cy="99.5"
          r="99.5"
          fill="url(#paint0_linear_0_1)"
          className="animate-pulse duration-75"
        />
        <circle cx="99.5" cy="99.5" r="87.5" fill="url(#paint1_linear_0_1)" />
        <g filter="url(#filter0_ddddf_0_1)">
          <circle cx="99.5" cy="99.5" r="81.5" fill="#012A36" />
        </g>
        <defs>
          <filter
            id="filter0_ddddf_0_1"
            x="10"
            y="11"
            width="179"
            height="177"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_0_1"
              result="effect2_dropShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_0_1"
              result="effect3_dropShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_0_1"
              result="effect4_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect4_dropShadow_0_1"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect5_foregroundBlur_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="0"
            y1="99.5"
            x2="199"
            y2="99.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7E52A0" />
            <stop offset="1" stopColor="#52C3E6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="12"
            y1="99.5"
            x2="187"
            y2="99.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7E52A0" />
            <stop offset="1" stopColor="#52C3E6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-[40%] left-[42%] ">{children}</div>
    </div>
  );
}
