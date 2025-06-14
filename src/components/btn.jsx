export default function Btn({children='Contactez nous',className="max-w-[250px] mx-auto bg-black text-white hover:scale-95 transition-transform duration-300 ease-in-out p-4 rounded-full shadow-md hover:shadow-lg"
}){
  return(
      <button
className={className}        >
          {children}
        </button>
  )
}