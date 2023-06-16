"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Link ={
  text: string;
  href: string;
}
type Props = {
  links: Link[];
}

const Navbar = ({ links }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 list-none">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={pathname == link.href ? "text-blue-700 underline" : ""}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
