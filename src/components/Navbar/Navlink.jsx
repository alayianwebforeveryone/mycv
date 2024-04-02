import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 xl:pl-3 pl-2 pr-4 text-[#f8f7f9] lg:text-xl text-lg font-medium  hover:text-white sm:text-lg"
    >
      {title}
    </Link>
  );
};

export default NavLink;
