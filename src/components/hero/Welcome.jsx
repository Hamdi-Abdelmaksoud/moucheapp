import Presentation from "@/components/hero/Presentation";
import { getPics } from "@/lib/actions/fetch";
import Image from "next/image";

export default async function Welcome() {
  const pics = await getPics('cover');
  const pic = pics[0];

  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {pic?.url && (
        <Image
          src={pic.url}
          alt={pic.description }
          fill
          className="object-cover z-0"
          priority
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 h-full bg-black/70 z-10" />

      {/* Foreground content */}
      <div className="z-20">
        <Presentation />
      </div>
    </div>
  );
}
