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
        d="M5 0a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5Zm11.615 15.6v.175h-3.177v-.16c0-3.033 2.197-6.005 6.592-6.005 3.955 0 6.532 2.373 6.532 5.538 0 2.505-1.5 4.167-3.217 6.075l-.24.267-4.935 5.55v.193h8.745V30h-13.36v-2.08l7.425-8.233c1.085-1.187 2.258-2.52 2.258-4.262 0-1.86-1.393-3.09-3.283-3.09-2.107 0-3.34 1.537-3.34 3.265Z"
        fill="#fff"
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
