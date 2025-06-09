import Link from "next/link";
import socialLinks from "@/lib/socialLinks";
export default function Contact() {
  return (
<div className="absolute left-2 sm:left-3.5 top-[14vh] bottom-[14vh] flex flex-col items-center z-30 opacity-0 sm:opacity-100">
      {/* Barres de décoration */}
      <div className="w-2.5 h-[25vh]  bg-gradient-orange-yellow"></div>
      {/* Liste des icônes */}
      <div className="h-[22vh] flex flex-col justify-center space-y-4">
        <ul className="w-full flex flex-col justify-center items-center space-y-4">
          {socialLinks.map(({ href, icon, label }, index) => (
            <li key={index}>
              <Link href={href} aria-label={label}>
                <span
                  className="w-9 h-9 bg-amber-50 flex justify-center items-center rounded-full shadow-md">
                  {icon}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Barres de décoration */}
      <div className="w-2.5 h-[25vh] bg-gradient-orange-yellow"></div>
      </div>
  );
}
