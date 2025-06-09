import Presentation from "@/components/hero/Presentation";

export default function Welcome() {
 

  return (
    <div className="flex items-center h-[100vh] bg-fixed bg-center bg-cover ">
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-black/70 z-[1]" />

      {/* Animated text container */}
  <Presentation />
    </div>
  );
} 
