import Diver from "@/components/divers/Diver";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/hero";
// import Street from '@/components/Street/Street'
import ImageDeMarque from "@/components/marque/ImageDeMaruqe";
import Nature from "@/components/nature/Nature";
import Cards from "@/components/Street/Cards";
import Wedding from "@/components/wedding/Wedding";
 
export default function Home() {
  return (
<div>
  <Hero />
 
  <ImageDeMarque />
  <Wedding />
  <Cards />
  <Nature />
  {/* <Diver /> */}
  <Footer />
</div>   
  );
}
