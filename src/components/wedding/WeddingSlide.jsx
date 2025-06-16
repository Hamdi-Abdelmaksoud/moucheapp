"use client"
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Title from "./Title";
import { useState } from "react";

export default function WeddingSlide({ pics }) {
  const [current, setCurrent] = useState(0)
  const length = pics.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <div className="min-w-full  mt-10 p-8 bg-amber-200 flex flex-col lg:flex-row items-center justify-center ">
      <Title />
      <div className="flex items-center justify-center relative ">
        <SlArrowLeft onClick={prevSlide} className="absolute z-20 left-0 w-[70px] h-[100px]  text-orange-400  lg:static lg:w-[250px] lg:h-[250px] " />
        <div className="flex bg-slate-700 my-10 w-[85vw] h-[400px] md:w-[500px] md:h-[400px] relative overflow-hidden mx-auto">
          {pics.length > 0 ? (
            pics.map((pic, i) => (
              <div key={i} className={i === current ? 'opacity-[1] ease-in duration-1000 ' : 'opacity-0'}>
                {i === current && <Image src={pic.url} key={pic.id} alt={pic.description} fill   sizes="(max-width: 768px) 85vw, (max-width: 1200px) 500px, 600px"
    style={{ objectFit: 'cover' }}/>
                }
              </div>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xl">
              Aucune photo disponible pour le moment.
            </div>
          )}
        </div>
        <SlArrowRight onClick={nextSlide} className="absolute w-[70px] h-[100px]   text-orange-400 right-0 lg:static lg:w-[250px] lg:h-[250px]" />
      </div>
    </div>
  )
}