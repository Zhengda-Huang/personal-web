import React from 'react'
interface NavProps {
    isOpen: boolean;
    handleClick: ()=>void
}
const Button = ({isOpen, handleClick}: NavProps) => {
  return (
    <button type='button' onClick={handleClick}>
    {isOpen ?
      <svg className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor" >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12" />
      </svg> :

      <svg className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    }
  </button>
  )
}

export default Button