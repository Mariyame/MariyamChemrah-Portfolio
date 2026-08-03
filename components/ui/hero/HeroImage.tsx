import Image from "next/image";
import { floatTechStack } from "@/data/technologies";
import TechStack from "./TechStack";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center max-w-lg sm:max-w-2xl">
      <div className="absolute h-90 w-50 sm:h-120 sm:w-100 rounded-full bg-primary/20 blur-3xl z-0" />
      <div className="absolute -top-10 left-35 h-48 w-48 rounded-full bg-secondary/30 blur-3xl z-0" />

      <div className="absolute h-35 w-80 sm:h-60 sm:w-120 rounded-[50%/50%] rotate-x-15 -rotate-y-30 z-10 inset-shadow-sm inset-shadow-primary" />
      <div className="absolute h-35 w-80 sm:h-60 sm:w-120 rounded-[50%/50%] inset-shadow-sm inset-shadow-secondary border-box z-10 rotate-x-100 rotate-z-45 animate-spin-slow" />
      <div className="absolute h-30 w-75 sm:h-60 sm:w-120 rounded-[50%/50%] inset-shadow-xs inset-shadow-secondary z-15 rotate-y-25 rotate-z-30 animate-spin-reverse-slow" />

      <div className="absolute left-19 top-65 h-2 w-2 rounded-full bg-white blur-xs animate-pulse" />
      <div className="absolute left-30 top-30 h-2 w-2 rounded-full bg-label blur-xs animate-pulse" />
      <div className="absolute right-23 top-46 h-2 w-2 rounded-full bg-secondary blur-xs animate-pulse" />
      <div className="absolute left-16 top-6 h-2 w-2 rounded-full bg-secondary blur-xs animate-pulse" />
      <div className="absolute bottom-45 left-25 h-2 w-2 rounded-full bg-primary blur-xs animate-pulse" />

      <TechStack technologies={floatTechStack} variant="floating" />

      <Image
        src="/mariyamchemrah.png"
        alt="Mariyam Chemrah"
        width={550}
        height={550}
        priority
        className="relative z-20 rounded-full shadow-xs shadow-inset shadow-background/50"
      />
    </div>
  );
}