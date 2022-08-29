import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 4.375h-5.833a7.292 7.292 0 0 0-7.292 7.292v11.666a7.292 7.292 0 0 0 7.292 7.292h11.666a7.292 7.292 0 0 0 7.292-7.292V11.667a7.292 7.292 0 0 0-7.292-7.292H17.5Z"
      stroke="#fff"
      strokeWidth={2.917}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 11.667a5.833 5.833 0 1 1 0 11.666 5.833 5.833 0 0 1 0-11.666Z"
      stroke="#fff"
      strokeWidth={2.917}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.792 12.396a2.188 2.188 0 1 0 0-4.375 2.188 2.188 0 0 0 0 4.375Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent