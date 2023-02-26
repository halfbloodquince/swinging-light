import "./Light.css";

export default function () {
  return (
    <div className="Light">
      <div className="light--container">
        <svg
          width="522"
          height="602"
          viewBox="0 0 522 602"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_13)">
            <path
              d="M518 487C518 561.558 373.959 594 262.674 594C151.389 594 4 566.558 4 492C4 417.442 151.389 261 262.674 261C373.959 261 518 412.442 518 487Z"
              fill="url(#paint0_radial_1_13)"
            />
            <path d="M262 0V194" stroke="#F59033" stroke-width="3" />
            <path
              d="M262 194H290.252L313 270H211L234.482 194H262Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_13"
              x="0"
              y="0"
              width="522"
              height="602"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_13"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_1_13"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(261 226) rotate(84.8193) scale(376.538 430.329)"
            >
              <stop />
              <stop
                offset="0.277766"
                stop-color="#FF9A02"
                stop-opacity="0.541899"
              />
              <stop offset="1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="text">FRONT END DEVELOPMENT IS HARD</div>
    </div>
  );
}
