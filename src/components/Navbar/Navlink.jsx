import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link
      href={href}
      className={`block ${isActive ? 'text-[#304B69] font-bold' : 'text-[#f8f7f9] font-medium'} py-2 xl:pl-3 pl-2 pr-4  lg:text-xl text-lg  hover:border-b-2  border-[#FCE0C5] hover:text-white sm:text-lg `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
