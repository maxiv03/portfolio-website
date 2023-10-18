import Link from "next/link";

const NavLink = ({href, title}) => {
  return (
    <Link 
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 active:text-transparent hover:text-transparent active:bg-clip-text hover:bg-clip-text active:bg-gradient-to-br hover:bg-gradient-to-br from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR active:border-b hover:border-b active:border-FIRST_COLOR hover:border-FIRST_COLOR"
    >
      {title}
    </Link>
  )
}

export default NavLink;