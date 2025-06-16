import { getPics } from "@/lib/actions/fetch";
import WeddingSlide from "@/components/wedding/WeddingSlide";

export default async function Wedding() {
  const photos = await getPics("mariage");

  return <WeddingSlide pics={photos} />;
}
 
 
 
 
 
 
  
 
