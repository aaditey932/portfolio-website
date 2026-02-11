import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-lg sm:text-2xl rounded md:p-0 md:py-2 text-gray-400 font-normal tracking-[0.02em] hover:text-gray-200 transition-colors md:text-sm"
    >
      {title}
    </Link>
  );
};

export default NavLink;
