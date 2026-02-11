import Link from "next/link";

const NavLink = ({ href, title, scrolled }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-lg sm:text-2xl rounded md:p-0 md:px-3 md:py-2 transition-colors ${
        scrolled
          ? "text-[#e5ebe0] hover:bg-[#e5ebe0]/20"
          : "text-green-950 hover:bg-green-950 hover:text-[#e5ebe0]"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
