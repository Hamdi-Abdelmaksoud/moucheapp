'use client'
import Link from "next/link";
import classes from '@/components/nav/nav.module.css';
import { usePathname } from "next/navigation";

export default function NavList({ ulStyle, liStyle, textColor,menuState }) {
  const currentPath = usePathname();

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Galerie", href: "/galerie" },
    { label: "Contacts", href: "/contacts" },
  ];

const black="#000"
  return (
    <ul className={ulStyle}>
      {navLinks.map(({ label, href }) => (
        <li className={liStyle} key={href} onClick={menuState}>
          <Link
            href={href}
           
            className={` ${textColor === black ? 'text-black' : 'text-amber-50'} ${currentPath === href ? classes.active : ''}`}
            >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
