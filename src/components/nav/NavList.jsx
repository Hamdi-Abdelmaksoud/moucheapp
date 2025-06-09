import Link from "next/link";

export default function NavList({ ulStyle, liStyle, textColor }) {
  return (
    <ul className={ulStyle}>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className="hover:text-gray-500">Home</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className="hover:text-gray-500">Weddings</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className="hover:text-gray-500">Spots</Link>
      </li>
      <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className="hover:text-gray-500">Contacts</Link>
      </li>
      {/* <li className={liStyle}>
        <Link href="/" style={{ color: textColor }} className="hover:text-gray-500">Corporate & Commercial</Link>
      </li> */}
    </ul>
  );
}
