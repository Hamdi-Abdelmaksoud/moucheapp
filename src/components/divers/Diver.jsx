import AutoSlide  from '@/components/divers/AutoSlide'
import { getLastPics } from '@/lib/actions/fetch';
export default async function Diver(){
    const pics = await getLastPics(); 
 
  return(
    <AutoSlide pics={pics} />
  )

}