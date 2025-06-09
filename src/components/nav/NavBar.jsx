"use client"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import NavList from './NavList';
import { useEffect, useState } from 'react';
export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  function toggleMenu() {
    setMenu(prevMenu => !prevMenu);
  }
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#faffef');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#faffef');
      }
    };
    window.addEventListener('scroll', changeColor)
  }, []);
  return (
  <div style={{backgroundColor:`${color}`}}  className=" fixed left-0 top-0 w-full z-[100] ease-in duration-300">
      {/* ease-in et duration pour le changement du couleur en scrolling */} 
      <nav className="max-w-[1240px] h-[15vh] m-auto flex justify-between items-center p-4 text-white">
        <div> 
          <h1  className="text-4xl logo">Studio Mouche</h1>
          {/* <h1 style={{color:`${textColor}`}} className="font-bold text-4xl">Studio Mouche</h1> */}
        </div>
        <NavList textColor={textColor} liStyle={"p-4"} ulStyle={"hidden sm:flex"} />
        {/* Mobile buttons */}
        <div className="sm:hidden block z-10" >
          {menu ? <AiOutlineClose size={20} className="cursor-pointer" color="#ffffff" onClick={toggleMenu} /> : <AiOutlineMenu className="cursor-pointer" size={20}  color={textColor} onClick={toggleMenu} />}
        </div>
        {/* mobile menu */}
        <div className={!menu ? "sm:hidden absolute top-0  left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          : "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }>
          <NavList liStyle={"p-4 text-4xl"} ulStyle={'flex-col '} />
        </div>
      </nav>
    </div>
  );
} 
