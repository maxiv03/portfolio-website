import Link from "next/link";

const NavLink = ({href, title}) => {
  return (
    <Link 
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600"
    >
      {title}
    </Link>
  )
}

export default NavLink;