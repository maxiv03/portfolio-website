import Link from "next/link";

const NavLink = ({href, title}) => {
  return (
    <Link 
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 active/hover:text-transparent active/hover:bg-clip-text active/hover:bg-gradient-to-br from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR active/hover:border-b active/hover:border-FIRST_COLOR"
    >
      {title}
    </Link>
  )
}

export default NavLink;