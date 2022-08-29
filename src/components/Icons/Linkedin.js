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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.458 4.139a2.68 2.68 0 0 1 2.68-2.68h26.72a2.679 2.679 0 0 1 2.684 2.68v26.72a2.68 2.68 0 0 1-2.682 2.683H4.139a2.678 2.678 0 0 1-2.68-2.682V4.139Zm12.7 9.552h4.344v2.181c.627-1.254 2.231-2.382 4.642-2.382 4.621 0 5.716 2.498 5.716 7.081v8.49h-4.677v-7.446c0-2.61-.627-4.083-2.219-4.083-2.21 0-3.128 1.588-3.128 4.083v7.447h-4.678V13.69ZM6.136 28.86h4.678V13.49H6.137v15.372Zm5.347-20.385a3.009 3.009 0 1 1-6.016.132 3.009 3.009 0 0 1 6.016-.132Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
