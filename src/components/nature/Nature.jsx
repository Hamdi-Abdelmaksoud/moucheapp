import { getPics } from "@/lib/actions/fetch";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
export default async function Nature() {
  try {
    const pics = await getPics("nature");

    if (!pics || pics.length === 0) {
      return <div className="text-center text-red-500">Aucune image trouvée.</div>;
    }

    return (
    <div className="rounded-md  flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={pics} direction="left"
          speed="slow" />
<p className="absolute z-20 font-bold bottom-0 right-8  text-4xl md:text-7xl" >Street art</p>
    </div>);
  } catch (error) {
    console.error("Erreur lors de la récupération des images :", error);

    return (
      <div className="text-center text-red-600 p-4">
        Une erreur est survenue lors du chargement des images.
      </div>
    );
  }
}

 
 
  
 
