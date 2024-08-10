import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.5 0 1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0Z"
      fill="#FFD600"
    />
  </svg>
);

export default SvgComponent;
