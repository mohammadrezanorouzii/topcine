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
      d="M30 0a30 30 0 1 0 0 60 30 30 0 0 0 0-60Zm13.125 28.125a1.875 1.875 0 1 1 0 3.75H21.401l8.052 8.047a1.878 1.878 0 0 1-2.655 2.656l-11.25-11.25a1.877 1.877 0 0 1 0-2.655l11.25-11.25a1.878 1.878 0 0 1 2.655 2.655L21.4 28.125h21.724Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
