import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 18.75a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Z"
      fill="#4CAF50"
    />
    <path
      d="M14.417 6.083 8.75 11.75 6.417 9.417 5.25 10.583l3.5 3.5 6.833-6.833-1.166-1.167Z"
      fill="#CCFF90"
    />
  </svg>
)

export default SvgComponent
