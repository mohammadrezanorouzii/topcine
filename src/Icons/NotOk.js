import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0ZM6.858 4.375 10 7.517l3.142-3.142 2.483 2.483L12.483 10l3.142 3.142-2.483 2.483L10 12.483l-3.142 3.142-2.483-2.483L7.517 10 4.375 6.858l2.483-2.483Z"
        fill="red"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
