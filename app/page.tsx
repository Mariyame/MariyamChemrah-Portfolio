import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background sm:items-start">
        <Image
          src="/logo.png"
          alt="Mariyam Chemrah logo"
          width={100}
          height={20}
          priority
        />

      </main>
    </div>
  );
}
