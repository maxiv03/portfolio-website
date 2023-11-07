import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent">
      <div className="p-8 lg:p-12 flex justify-between items-center">
        <Link href={"/"} className="text-3xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR">
            MV
          </span>
        </Link>
        <p className="text-SECOND_COLOR opacity-80">&copy; All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer