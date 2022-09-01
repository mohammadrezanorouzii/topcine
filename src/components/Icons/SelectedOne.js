import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M5 0a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5Zm18.207 10.005V30h-3.28V13.345h-.162L15.18 16.64v-3.178l4.747-3.457h3.28Z"
        fill="#DE518E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
