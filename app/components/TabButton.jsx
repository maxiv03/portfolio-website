import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
  const buttonClasses = active ? "text-transparent bg-clip-text bg-gradient-to-b from-[#d5af8b] via-[#ed5675] to-[#502540] border-b border-[#502540]" : "text-[#ADB7BE]"

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#d5af8b] via-[#ed5675] to-[#502540] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton