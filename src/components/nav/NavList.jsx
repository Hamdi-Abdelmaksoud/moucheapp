import Link from "next/link";
import classes from '@/components/nav/nav.module.css'

export default function NavList({ ulStyle, liStyle, textColor }) {
  return (
    <ul className={ulStyle}>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }}  className={classes.li}>Accueil</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className={classes.li} >Services</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className={classes.li}>Galerie</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className={classes.li}  >Contacts</Link>
      </li>
 
    </ul>
  );
}
