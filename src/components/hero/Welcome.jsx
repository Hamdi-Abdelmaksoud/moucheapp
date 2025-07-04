import Presentation from "@/components/hero/Presentation";
import { getPics } from "@/lib/actions/fetch";
import Image from "next/image";

export default async function Welcome() {
  const pics = await getPics('cover');
  const pic = pics[0];

  return (
    <div className="relative w-full h-[100vh]  overflow-hidden">
      {pic?.url && (
        <Image
          src={pic.url}
          alt={pic.description}
          fill
          className="object-cover z-0"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 h-full bg-black/70 z-10" />

      {/* Foreground content */}
      <div className="z-20 absolute left-1/2 -translate-x-1/2 w-[310px] md:left-[15%] md:-translate-x-0 md:w-[500px]">
        <Presentation />
      </div>
    </div>
  );
}
