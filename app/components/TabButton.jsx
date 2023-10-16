import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
  const buttonClasses = active ? "text-transparent bg-clip-text bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR border-b border-THIRD_COLOR" : "text-[#ADB7BE]"

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton