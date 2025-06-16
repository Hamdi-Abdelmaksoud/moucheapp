import { getPics } from "@/lib/actions/fetch";
import Marque from "@/components/marque/Marque";
export default async function ImageDeMarque()
{
  const pics = await getPics("marque"); 
  return  <Marque  pics={pics}/>
}
 
 
 
  
 
