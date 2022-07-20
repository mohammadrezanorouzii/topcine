import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 0a30 30 0 1 1 0 60 30 30 0 0 1 0-60ZM16.875 28.125a1.875 1.875 0 1 0 0 3.75h21.724l-8.051 8.047a1.878 1.878 0 0 0 2.655 2.656l11.25-11.25a1.877 1.877 0 0 0 0-2.655l-11.25-11.25a1.878 1.878 0 0 0-2.656 2.655l8.052 8.047H16.875Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
