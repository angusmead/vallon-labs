import Image from "next/image";

export function HeroVisual() {
  return (
    <Image
      src="/hero-systems.png"
      alt="Vallon Labs orchestration interface — workflow cards, AI scoring, and a project review surface"
      width={2048}
      height={2048}
      priority
      sizes="(max-width: 1024px) 100vw, 520px"
      className="h-auto w-full max-w-[560px] rounded-[8px]"
    />
  );
}
