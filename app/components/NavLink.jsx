import Link from "next/link";

const NavLink = ({href, title}) => {
  return (
    <Link 
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-[#d5af8b] via-[#ed5675] to-[#502540] hover:border-b hover:border-[#d5af8b]"
    >
      {title}
    </Link>
  )
}

export default NavLink;