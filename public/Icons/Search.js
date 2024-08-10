import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 3.125a9.375 9.375 0 0 1 7.455 15.06l5.929 5.931a1.25 1.25 0 0 1-1.65 1.872l-.118-.104-5.931-5.929A9.375 9.375 0 1 1 12.5 3.125Zm0 2.5a6.875 6.875 0 1 0 0 13.75 6.875 6.875 0 0 0 0-13.75Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
